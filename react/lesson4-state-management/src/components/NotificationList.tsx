import React from "react";
import useNotificationStore from "../store/notificationStore";

const NotificationList: React.FC = () => {
  const notifications =
    useNotificationStore(
      (state) => state.notifications
    );

  const markAsRead =
    useNotificationStore(
      (state) => state.markAsRead
    );

  return (
    <div>
      <h2>Notifications</h2>

      {notifications.length === 0 ? (
        <p>No notifications</p>
      ) : (
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id}>
              <strong>
                [{notification.type.toUpperCase()}]
              </strong>{" "}
              {notification.message}

              {!notification.read && (
                <button
                  onClick={() =>
                    markAsRead(notification.id)
                  }
                  style={{ marginLeft: "10px" }}
                >
                  Mark as Read
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationList;