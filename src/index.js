import React from "react";
import ReactDOM from "react-dom";
import App from "@/core/init";
import { apiGet } from "./core/network";

apiGet("https://www.easy-mock.com/mock/5c26d2b580aa7e1788ba03cc/example/mock", {
  params: {
    data: 1
  }
}).then(res => {});
ReactDOM.render(<App />, document.querySelector("#root"));
