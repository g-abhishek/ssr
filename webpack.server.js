const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  target: "node", // // Important! Tell webpack it's Node.js code
  entry: "./app/server.js", // Server entry point
  output: {
    filename: "server_bundle.js",
    path: path.resolve(__dirname, "build"),
    libraryTarget: 'commonjs2',
  },
  externals: [nodeExternals()], // Don't bundle node_modules like express, mongoose, dotenv, etc. Just require them normally at runtime.
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};

/**
 * Will server_bundle.js include routers, DB models?
 * ✅ Yes, your own files are bundled — routers, DB models, SSR logic.
 * 
 * Why exclude node_modules?
 * Bundle size, performance, dynamic requiring
 * 
 * Is DB connection bundled?
 * ❌ Only connection code bundled; real connection happens at runtime
 * 
 * When we run Webpack for the server (target: 'node'):
 * It will start from your server/index.js (or server.js) as the entry point.
 * Then trace all the imports:
 *  Express app setup
 *  Routes
 *  Controllers
 *  DB models (Mongoose / Sequelize etc)
 *  Utilities
 * Server-side React components (for renderToString)
 * It will bundle all JavaScript code into one single server_bundle.js.
 */

/**
 * Questions
 * 1. Will server use build files or server/index.js file to run the server
 */


/**
 * Will server use build files or server/index.js file to run the server?
 * ✅ Short Answer:
 * Environment | Server Runs From
 * Development | server/index.js (raw source code with tools like ts-node or babel-register)
 * Production  | build/server_bundle.js (compiled Webpack output)
 */
