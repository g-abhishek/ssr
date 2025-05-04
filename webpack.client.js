const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const path = require("path");
const isDev = process.env.NODE_ENV === "development";

module.exports = {
  mode: "development", // Later we can switch to 'production'
  entry: "./src/index.js", // Where our client code starts
  output: {
    path: path.resolve(__dirname, "build/public"),
    filename: "client_bundle.js", // Final bundled file for browser
    chunkFilename: "[name].[contenthash].js", // Lazy-loaded chunks
    publicPath: "/public/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // If file ends with .js/.jsx
        exclude: /node_modules/, // Ignore libraries
        use: {
          loader: "babel-loader", // Use babel to transpile
        },
      },
      {
        test: /\.css$/,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader, // instead of style-loader
          "css-loader",
        ], // style-loader: Injects CSS into the <head> of the HTML via <style> tags
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "images/[name].[hash].[ext]",
            publicPath: "/public",
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Can import without writing extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Use html-webpack-plugin to inject the client_bundle.js file into your HTML file // this will create new html file by injecting the scripts into it
      publicPath: "/public/", // This ensures the script uses `/public/` prefix, like "http://localhost:4000/public/client_bundle.js"
      inject: false,
    }),
    //Let you manually or automatically inject the <link rel="stylesheet" href="main.css"> into HTML
    new MiniCssExtractPlugin({
      filename: "css/client_bundle.css", // Extract CSS into a physical file (main.css)
      chunkFilename: "css/[name].[contenthash].css", // Ensures chunk-specific CSS gets extracted
    }),
    new LoadablePlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: "static", // or 'server' for live preview // make it "disabled" on production
      openAnalyzer: false, // opens in browser automatically
      reportFilename: "report.html",
    }),
  ],
};

// ********************************* NOTES *******************************************
/**
 * We build files like client_bundle.js in public folder, These files need to be served to browser only.
 * And if we see in server webpack, output folder is build, that is an server folder
 * Browser cannot read that server folders, So, we put client files in a folder like public/ that Express will expose like this:
 * app.use(express.static('public'));
 *
 * Node will directly require() or import the server_bundle.js
 * It never needs to be downloaded by the browser
 */

/**
 * In rules, we mentioned => exclude: /node_modules/
 * This tells webpack, Skip processing any file inside the node_modules/ folder.
 *
 * These libraries are already compiled,
 * Packages inside node_modules/ are already published in a ready-to-use format (often ES5).
 * We write modern JS (like ES6, JSX), so only our src/ files need to be transpiled.
 * node_modules can have thousands of files. If Babel processes every library (React, Axios, etc.), build becomes super slow.
 * Otherwise, it would waste a lot of CPU time and memory.
 */

/**
 * css-loader ***********
 *
 * It parses the CSS file so Webpack can understand it as a module.
 * It resolves any @import statements inside your CSS, like
 * @import './base.css'; in your App.css file
 * This means if your CSS file imports another CSS file, css-loader will make sure that file is also bundled.
 *
 * It resolves url(...) paths, like
 * background-image: url('./images/bg.png');
 * css-loader will figure out what this image path means, and include it in your bundle.
 *
 * In Short
 * css-loader turns .css files into JS modules Webpack can understand,
 * It ensures all dependent files (@import, url(...)) are included correctly
 *
 * style-loader ***************
 * Injects CSS into the <head> of the HTML via <style> tags
 *
 * mini-css-extract-plugin *********
 * But we want a seperate .css file to be injected into the HTML, right
 * For this we need "mini-css-extract-plugin" plugin support.
 * So, instead of style-loader we will use this plugin
 */

/**
 * @loadable/webpack-plugin
 *
 * no, the @loadable/webpack-plugin should be added only to your client Webpack config, not the server one.
 * ✅ Why only in the client config?
 *  The plugin generates a loadable-stats.json file.
 *  This file maps the dynamically imported components to the output Webpack chunks (like JS and CSS).
 *  These chunks are only relevant to the client-side build — the server doesn’t need them to generate or bundle anything.
 *
 * ❌ Do not include @loadable/webpack-plugin in server webpack.
 */

/**
 * Cache Busting
 * Adding contenthash to your JS and CSS filenames is the core technique for cache busting.
 *
 * Browsers aggressively cache files based on their URL. If a filename stays the same (like main.js), the browser assumes it's unchanged and will serve it from cache, even if the content is updated.
 *
 * By including a hash based on the file's contents:
 * main.[contenthash].js → main.ab12cd34.js
 * …then when the content changes, the hash changes too, generating a new filename. This new URL ensures the browser fetches the updated version.
 *
 * Make sure your server sets long-term caching headers for hashed assets:
 * Cache-Control: public, max-age=31536000, immutable
 * And avoid no-store for static assets like JS/CSS.
 */
