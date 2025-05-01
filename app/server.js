const express = require("express");
const path = require("path");
const fs = require("fs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const { default: App } = require("../src/App");
const { StaticRouter } = require("react-router-dom");
const PORT = process.env.PORT || 4000;

const app = express();
app.use("/public", express.static(path.resolve(__dirname, "../build/public")));

// in express@v5, "*" is not considered valid anymore, thats why used regex /^\/.*/
app.get(/^\/.*/, (req, res, next) => {
  const htmlFileStr = fs.readFileSync(
    path.resolve(__dirname, "../build/public/index.html"),
    "utf8"
  );

  console.log("req.url>>>>>>>", req.url);

  const appHtml = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  // Inject serverTime into HTML as a global variable
  const finalHtmlStr = htmlFileStr
    .replace(`<div id="root"></div>`, `<div id="root">${appHtml}</div>`)
    .replace(
      `</body>`,
      `<script>window.__INITIAL_STATE__ = ${JSON.stringify({
        test: 123,
      })};</script></body>`
    );

  res.send(finalHtmlStr);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
