import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/globals.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, message: error?.message || "Unknown render error" };
  }

  componentDidCatch(error) {
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-space px-6 text-center text-white">
          <div className="glass-card max-w-2xl p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-pinkGlow">Render Error</p>
            <h1 className="mt-4 font-display text-3xl">Интерфейс не смог загрузиться</h1>
            <p className="mt-4 text-slate-300">{this.state.message}</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

window.setTimeout(() => {
  const bootStatus = document.getElementById("boot-status");
  if (bootStatus) {
    bootStatus.style.display = "none";
  }
}, 150);
