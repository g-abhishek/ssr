import React from "react";
import "./App.css";

import AppRoutes from "./routes";

const App = ({ initialData }) => {
  return (
    <div>
      <div className="header-wrapper">Blog App</div>
      <AppRoutes initialData={initialData} />
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
