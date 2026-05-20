import React from "react";

import {
  ThemeProvider,
  useTheme,
} from "./context/ThemeContext";

import NotificationList from "./components/NotificationList";

import useNotificationStore from "./store/notificationStore";

const Dashboard: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const addNotification =
    useNotificationStore(
      (state) => state.addNotification
    );

  const clearNotifications =
    useNotificationStore(
      (state) => state.clearNotifications
    );

  return (
    <div
      style={{
        padding: "20px",
        background:
          theme === "light" ? "#ffffff" : "#222222",
        color:
          theme === "light" ? "#000000" : "#ffffff",
        minHeight: "100vh",
      }}
    >
      <h1>TaskFlow Dashboard</h1>

      <button onClick={toggleTheme}>
        Switch Theme
      </button>

      <hr />

      <button
        onClick={() =>
          addNotification(
            "Task completed successfully",
            "success"
          )
        }
      >
        Add Success Notification
      </button>

      <button
        onClick={() =>
          addNotification(
            "Something went wrong",
            "error"
          )
        }
        style={{ marginLeft: "10px" }}
      >
        Add Error Notification
      </button>

      <button
        onClick={clearNotifications}
        style={{ marginLeft: "10px" }}
      >
        Clear Notifications
      </button>

      <hr />

      <NotificationList />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;