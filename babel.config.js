const path = require("path");
module.exports = {
  presets: ["react-app"],
  plugins: [
    "lodash",
    "@babel/plugin-proposal-export-default-from",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    [
      "module-resolver",
      {
        alias: {
          "@": path.join(__dirname, "src")
        }
      }
    ],
    ["import", { libraryName: "antd-mobile", style: "css" }],
    "webpack-async-module-name"
  ]
};
