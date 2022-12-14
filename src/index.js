import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { FronteggProvider } from "@frontegg/react";
const contextOptions = {
  baseUrl: "https://app-anxv0uqz9qjh.frontegg.com",
  clientId: "7089eeaf-b8a3-461a-9826-caec9f1a396d",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
  <App />
  </FronteggProvider>
);
// If you want to start measuring performance in your app, pass a function // to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals reportWebVitals();
