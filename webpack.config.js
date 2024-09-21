// webpack.config.js

const path = require("path");
const { experiments } = require("webpack");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "editor.js",
    library: {
      type: "module",
    },
  },
  plugins: [],
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  experiments: {
    outputModule: true,
  },
};
