const path = require("path");

module.exports = {
  entry: {
    app: "./src/main.js"
  },
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "index.js"
  }
};