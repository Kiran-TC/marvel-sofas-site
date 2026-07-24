import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Marvel Sofa's UI error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen bg-ivory px-6 py-24 text-forest-950">
          <div className="luxury-shell">
            <p className="eyebrow">Something needs attention</p>
            <h1 className="mt-4 font-display text-5xl">This section could not load.</h1>
            <p className="mt-4 max-w-2xl text-forest-900/70">
              Please refresh the page. If the issue continues, the component can be reviewed without affecting the catalogue data.
            </p>
          </div>
        </main>
      );
    }
    return this.props.children;
  }
}
