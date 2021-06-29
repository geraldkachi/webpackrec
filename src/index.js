import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
ReactDOM.render(<App />, document.getElementById("app"));
// hot reloading. It works by replacing a module of the application 
// during runtime with an updated one so that it’s available for instant use.
module.hot.accept();
// npm i -D style-loader
// from web.config
// entry: path.resolve(__dirname, "./src/index.js"),
// entry: path.resolve(__dirname, "./index.js"),