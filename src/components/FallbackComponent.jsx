import React from "react";

const FallbackComponent = ({ error, errorInfo }) => {
  return (
    <div>
      <h2>Oops! Something went wrong.</h2>
      <p>Please try again later.</p>
      {process.env.NODE_ENV === "development" && (
        <details>
          {error?.toString()}
          <br />
          {errorInfo?.componentStack}
        </details>
      )}
    </div>
  );
};

export default FallbackComponent;
