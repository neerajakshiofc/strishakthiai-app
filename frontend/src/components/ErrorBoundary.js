import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={styles.errorContainer}>
          <h2>⚠️ Something went wrong!</h2>
          <p>Please try refreshing the page or check back later.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

// ✅ Styling for better UI
const styles = {
  errorContainer: {
    padding: "20px",
    backgroundColor: "#ffdddd",
    color: "#d9534f",
    borderRadius: "10px",
    textAlign: "center",
    margin: "20px",
  },
};

export default ErrorBoundary;

