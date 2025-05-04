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

const render = (Component) => {
  hydrateRoot(
    document.getElementById("root"),
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary
          fallback={FallbackComponent}
          onError={(error, errorInfo) => console.log(error, errorInfo)}
        >
          <Component />
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  );
};

loadableReady(() => {
  render(App);
});

// 🔥 HMR support
if (import.meta.webpackHot || module.hot) {
  const hot = import.meta.webpackHot || module.hot;
  hot.accept("./App", () => {
    const NextApp = require("./App").default;
    render(NextApp);
  });
}
