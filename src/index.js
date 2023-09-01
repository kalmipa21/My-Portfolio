import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routers/index.js";
import reportWebVitals from "./reportWebVitals";
import "react-multi-carousel/lib/styles.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./assets/css/typography.css";
import "./assets/css/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
