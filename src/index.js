import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import './assets/styles/global.scss'

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);