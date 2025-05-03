import React, { Suspense } from "react";
import "./App.css";
import Logo from "./assets/logo.png";

import routesConfig from "./routes";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <div>
      <div className="header-wrapper">
        <img src={Logo} alt="loading image..." />
        <div>Blog App</div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routesConfig.map((r, idx) => (
            <Route key={idx} path={r?.path} element={<r.element />} />
          ))}
        </Routes>
      </Suspense>
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
