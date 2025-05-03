import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state to show fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can log error info to a monitoring service here
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({ errorInfo });

    // Optional: Send to monitoring service
    this.props.onError(error, errorInfo);
    
  }

  render() {
    const { hasError, error, errorInfo } = this.state;
    const { fallback: FallbackComponent } = this.props;

    if (hasError) {
      if (FallbackComponent) {
        return <FallbackComponent error={error} errorInfo={errorInfo} />;
      }

      return (
        <div>
          <h1>Something went wrong.</h1>
          {process.env.NODE_ENV === "development" && error && (
            <details style={{ whiteSpace: "pre-wrap" }}>
              {error.toString()}
              <br />
              {errorInfo?.componentStack}
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

/**
 * In React, an Error Boundary is a component that catches JavaScript errors anywhere in its child component tree, logs them, and displays a fallback UI instead of crashing the entire app.
 * React introduced this feature to handle unexpected runtime errors during rendering, lifecycle methods, or constructors of child components.
 *
 * This defines a class component called ErrorBoundary, which extends React.Component
 * Only class components can be error boundaries — React does not currently support them in function components without extra libraries.
 */

/**
 * constructor(props) {
 *      super(props);
 *      this.state = { hasError: false };
 * }
 *
 * Initializes the component state with hasError: false.
 * If an error occurs later, we set this to true to show the fallback UI.
 */

/**
 * static getDerivedStateFromError(error) {
 *      return { hasError: true };
 * }
 *
 * A special static lifecycle method React calls when an error is thrown in a child component.
 * This sets the state (hasError) to true, triggering a re-render with fallback UI.
 * You cannot access this here because it's static.
 */

/**
 * componentDidCatch(error, errorInfo) {
 *      console.error("Error caught by ErrorBoundary:", error, errorInfo);
 * }
 *
 * This method is used to log the error (e.g., to an error reporting service like Sentry or Datadog).
 * error: the actual error object
 * errorInfo: extra info like stack trace, component name, etc.
 */


/**
 * Fallback
 * Instead of hardcoding the fallback message, allow it to accept a custom React component via props.
 * 
 */
