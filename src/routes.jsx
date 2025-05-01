import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";

const AppRoutes = ({ initialData }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/post/:id"
        element={<Post initialData={initialData?.post} />}
      />
    </Routes>
  );
};

export default AppRoutes;
