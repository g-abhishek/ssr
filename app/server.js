const express = require("express");
const path = require("path");
const fs = require("fs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const { default: App } = require("../src/App");
const { StaticRouter, matchPath } = require("react-router-dom");
const { default: createStore } = require("../src/store");
const { Provider } = require("react-redux");
const PostRouter = require("./routes/posts.routes");
const { fetchPosts } = require("../src/store/slices/post.slice");
const { default: routes } = require("../src/routes");
const { default: ErrorPage } = require("../src/pages/ErrorPage");
const PORT = process.env.PORT || 4000;

const app = express();
app.use("/public", express.static(path.resolve(__dirname, "../build/public")));

app.use("/api/posts", PostRouter);

// in express@v5, "*" is not considered valid anymore, thats why used regex /^\/.*/
app.get(/^\/.*/, async (req, res, next) => {
  try {
    let promises = [];
    const store = createStore();

    let matched = false;
    routes.forEach((route) => {
      const match = matchPath(route.path, req.path);

      if (match && route.loadData) {
        matched = true;
        promises.push(route.loadData(store, match.params));
      }
    });
    await Promise.all(promises);
    const preloadedState = store?.getState();

    const htmlFileStr = fs.readFileSync(
      path.resolve(__dirname, "../build/public/index.html"),
      "utf8"
    );

    const appHtml = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url}>
          <App />
        </StaticRouter>
      </Provider>
    );
    // Inject serverTime into HTML as a global variable
    const finalHtmlStr = htmlFileStr
      .replace(`<div id="root"></div>`, `<div id="root">${appHtml}</div>`)
      .replace(
        `</body>`,
        `<script>window.__INITIAL_STATE__ = ${JSON.stringify(
          preloadedState
        )};</script></body>`
      );

    if (!matched) {
      res.status(404);
    }
    res.send(finalHtmlStr);
  } catch (err) {
    console.error("SSR rendering failed:", err);
    const errorHTML = ReactDOMServer.renderToString(
      <ErrorPage message="Server Error: Failed to render page." />
    );

    res.status(500).send(`
      <!DOCTYPE html>
      <html>
        <head><title>Server Error</title></head>
        <body>${errorHTML}</body>
      </html>
    `);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
