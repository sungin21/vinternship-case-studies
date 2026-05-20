import React from "react";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import Collaborators from "./components/Collaborators";

import { useAppStore } from "./store/useAppStore";

const queryClient =
  new QueryClient();

function Dashboard() {
  const setSession =
    useAppStore(
      (s) => s.setSession
    );

  const history =
    useAppStore(
      (s) => s.history
    );

  const addHistoryEntry =
    useAppStore(
      (s) =>
        s.addHistoryEntry
    );

  const clearHistory =
    useAppStore(
      (s) => s.clearHistory
    );

  const login = () => {
    setSession(
      "u1",
      "token123",
      Date.now() +
        3600000
    );

    addHistoryEntry({
      noteId: "n1",

      action: "LOGIN",

      timestamp:
        Date.now(),
    });
  };

  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <h1>
        CollabNotes Dashboard
      </h1>

      <button onClick={login}>
        Login
      </button>

      <button
        onClick={() =>
          addHistoryEntry({
            noteId: "n2",

            action:
              "NOTE_UPDATED",

            timestamp:
              Date.now(),
          })
        }
      >
        Add History
      </button>

      <button
        onClick={
          clearHistory
        }
      >
        Clear History
      </button>

      <hr />

      <h2>History Log</h2>

      <ul>
        {history.map(
          (
            entry,
            index
          ) => (
            <li key={index}>
              {entry.action}
            </li>
          )
        )}
      </ul>

      <hr />

      <Collaborators />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider
      client={queryClient}
    >
      <Dashboard />
    </QueryClientProvider>
  );
}

export default App;