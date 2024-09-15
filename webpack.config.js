// webpack.config.js

const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js",
    library: {
      name: "editor",
      type: "umd",
    },
  },
  plugins: [],
  resolve: {
    extensions: [".js"],
  },
};
