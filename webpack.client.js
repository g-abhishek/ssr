const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development", // Later we can switch to 'production'
  entry: "./src/index.js", // Where our client code starts
  output: {
    path: path.resolve(__dirname, "build/public"),
    filename: "client_bundle.js", // Final bundled file for browser
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
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Can import without writing extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Use html-webpack-plugin to inject the client_bundle.js file into your HTML file // this will create new html file by injecting the scripts into it
      publicPath: '/public/', // This ensures the script uses `/public/` prefix, like "http://localhost:4000/public/client_bundle.js"
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
