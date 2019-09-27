const path = require("path");
module.exports = {
  presets: ["react-app"],
  plugins: [
    "lodash",
    [
      "module-resolver",
      {
        alias: {
          "@": path.join(__dirname, "src")
        }
      }
    ],
    // [
    //   "react-css-modules",
    //   {
    //     generateScopedName: "[name]__[local]___[hash:base64:5]",
    //     filetypes: {
    //       ".scss": {
    //         syntax: "postcss-scss"
    //       }
    //     }
    //   }
    // ],
    // `style: true` 会加载 less 文件
    ["import", { libraryName: "antd-mobile", style: "css" }],
    "webpack-async-module-name"
  ]
};
