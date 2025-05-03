import React from "react";
import "./App.css";

import routesConfig from "./routes";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <div>
      <div className="header-wrapper">Blog App</div>
      <Routes>
        {routesConfig.map((r) => (
          <Route path={r?.path} element={<r.element />} />
        ))}
        <Route path="*" element={<ErrorPage message="Page not found." />} />
      </Routes>
    </div>
  );
};

export default App;

/**
 * BrowserRouter ********
 *
 * Client (Browser): Must use <BrowserRouter> to manage navigation with the browser’s history API.
 * If you don’t use BrowserRouter on the client, React hydration may fail or routing won’t work correctly
 */
