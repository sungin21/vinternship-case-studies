import React from "react";

import NotificationsPanel from "./components/NotificationsPanel";

import { useDesignHubStore } from "./store/useDesignHubStore";

function App() {
  const setUser =
    useDesignHubStore(
      (s) => s.setUser
    );

  const user =
    useDesignHubStore(
      (s) => s.user
    );

  const addFile =
    useDesignHubStore(
      (s) => s.addFile
    );

  const files =
    useDesignHubStore(
      (s) => s.files
    );

  const addNotification =
    useDesignHubStore(
      (s) => s.addNotification
    );

  const handleLogin = () => {
    setUser({
      id: "u1",
      name: "Alex",
    });

    addNotification({
      id: Date.now().toString(),
      message: "User logged in",
      read: false,
    });
  };

  const handleAddFile = () => {
    addFile({
      id: Date.now().toString(),
      name: "Design File",
      content: "UI Design",
    });

    addNotification({
      id: Date.now().toString(),
      message: "File added",
      read: false,
    });
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>DesignHub Dashboard</h1>

      {!user ? (
        <button onClick={handleLogin}>
          Login
        </button>
      ) : (
        <h2>
          Welcome {user.name}
        </h2>
      )}

      <hr />

      <button onClick={handleAddFile}>
        Add File
      </button>

      <ul>
        {files.map((file) => (
          <li key={file.id}>
            {file.name}
          </li>
        ))}
      </ul>

      <hr />

      <NotificationsPanel />
    </div>
  );
}

export default App;