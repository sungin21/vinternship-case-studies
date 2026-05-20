import React, {
  Suspense,
  lazy,
  useState,
} from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import ErrorBoundary from "./ErrorBoundary";

const Home = lazy(() =>
  import("./Home")
);

const AdminPanel = lazy(() =>
  import("./AdminPanel")
);

const ProfileSettings = lazy(() =>
  import("./ProfileSettings")
);

function App() {
  const [showSettings, setShowSettings] =
    useState(false);

  return (
    <BrowserRouter>
      <div style={{ padding: "30px" }}>
        <h1>
          EduStream Dashboard
        </h1>

        <nav>
          <Link to="/">
            Home
          </Link>

          {" | "}

          <Link to="/admin">
            Admin
          </Link>
        </nav>

        <br />

        <button
          onClick={() =>
            setShowSettings(true)
          }
        >
          Load Settings
        </button>

        <hr />

        <ErrorBoundary>
          <Suspense
            fallback={
              <h2>Loading...</h2>
            }
          >
            {showSettings && (
              <ProfileSettings />
            )}

            <Routes>
              <Route
                path="/"
                element={<Home />}
              />

              <Route
                path="/admin"
                element={
                  <AdminPanel />
                }
              />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  );
}

export default App;