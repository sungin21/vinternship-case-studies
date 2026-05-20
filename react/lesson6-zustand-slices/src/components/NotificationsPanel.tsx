import React from "react";

import { useDesignHubStore } from "../store/useDesignHubStore";

const NotificationsPanel: React.FC = () => {
  const notifications =
    useDesignHubStore(
      (s) => s.notifications
    );

  const markAsRead =
    useDesignHubStore(
      (s) => s.markAsRead
    );

  const clearNotifications =
    useDesignHubStore(
      (s) => s.clearNotifications
    );

  return (
    <div>
      <h2>Notifications</h2>

      <button
        onClick={clearNotifications}
      >
        Clear All
      </button>

      <ul>
        {notifications.map((n) => (
          <li key={n.id}>
            {n.message}

            {!n.read && (
              <button
                onClick={() =>
                  markAsRead(n.id)
                }
              >
                Mark Read
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsPanel;