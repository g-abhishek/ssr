import React from "react";
import { loadableReady } from "@loadable/component";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import createStore from "./store";
import ErrorBoundary from "./components/ErrorBoundary";
import FallbackComponent from "./components/FallbackComponent";

// Read the injected state
const preloadedState = window.__INITIAL_STATE__ || {};
const store = createStore(preloadedState);

loadableReady(() => {
  hydrateRoot(
    document.getElementById("root"),
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary
          fallback={FallbackComponent}
          onError={(error, errorInfo) => console.log(error, errorInfo)}
        >
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  );
});
