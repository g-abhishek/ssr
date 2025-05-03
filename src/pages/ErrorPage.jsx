import React from "react";

const ErrorPage = ({ message = "Something went wrong." }) => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>⚠️ Error</h1>
      <p>{message}</p>
    </div>
  );
};

export default ErrorPage;
