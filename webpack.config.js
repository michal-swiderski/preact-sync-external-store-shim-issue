const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  // breaks on target=node
  target: "node",
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat"
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        use: "babel-loader",
      },
    ],
  },
};
