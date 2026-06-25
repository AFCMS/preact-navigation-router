import { LocationProvider, Route, Router } from "preact-iso/router/navigation-api";

import "./app.css";
import { ErrorBoundary } from "preact-iso";

import { Home } from "./routes/home";
import { A } from "./routes/a";
import { B } from "./routes/b";
import { Header } from "./header";
import { Search } from "./routes/search";

export function App() {
  return (
    <LocationProvider>
      <ErrorBoundary>
        <Header />
        <Router>
          <Route path="/" component={Home} />
          <Route path="/a" component={A} />
          <Route path="/b" component={B} />
          <Route path="/search" component={Search} />
        </Router>
      </ErrorBoundary>
    </LocationProvider>
  );
}
