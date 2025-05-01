const express = require("express");
const path = require("path");
const fs = require("fs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const { default: App } = require("../src/App");
const { StaticRouter } = require("react-router-dom");
const { default: createStore } = require("../src/store");
const { Provider } = require("react-redux");
const PORT = process.env.PORT || 4000;

const app = express();
app.use("/public", express.static(path.resolve(__dirname, "../build/public")));

// in express@v5, "*" is not considered valid anymore, thats why used regex /^\/.*/
app.get(/^\/.*/, async (req, res, next) => {
  let initialData = { post: null };

  const htmlFileStr = fs.readFileSync(
    path.resolve(__dirname, "../build/public/index.html"),
    "utf8"
  );

  const match = req.url.match(/^\/post\/(\d+)/);
  // 🔍 If /post/:id route, fetch the post
  if (match) {
    const id = match[1];
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await response.json();
    initialData.post = {
      currentPost: data,
    };
  }

  const store = createStore(initialData);
  const appHtml = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <App initialData={initialData} />
      </StaticRouter>
    </Provider>
  );
  // Inject serverTime into HTML as a global variable
  const finalHtmlStr = htmlFileStr
    .replace(`<div id="root"></div>`, `<div id="root">${appHtml}</div>`)
    .replace(
      `</body>`,
      `<script>window.__INITIAL_STATE__ = ${JSON.stringify(
        store?.getState()
      )};</script></body>`
    );

  res.send(finalHtmlStr);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
