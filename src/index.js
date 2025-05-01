import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import createStore from "./store";

// Read the injected state
const preloadedState = window.__INITIAL_STATE__ || {};
const store = createStore(preloadedState);

hydrateRoot(
  document.getElementById("root"),
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
