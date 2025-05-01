import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Read the injected state
const initialData = window.__INITIAL_STATE__ || {};

hydrateRoot(
  document.getElementById("root"),
  <BrowserRouter>
    <App initialData={initialData} />
  </BrowserRouter>
);
