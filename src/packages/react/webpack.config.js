const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "react.bundle.js",
  },
  devServer: {
    host: "0.0.0.0",
    port: "8001",
    static: {
      directory: path.resolve(__dirname, "public"),
      publicPath: "/",
    },
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css/, use: ["style-loader", "css-loader"] },
    ],
  },
};
