import { create } from "zustand";

export interface Notification {
  id: string;
  message: string;
  type: "info" | "error" | "success";
  read: boolean;
}

interface NotificationStore {
  notifications: Notification[];

  addNotification: (
    message: string,
    type: "info" | "error" | "success"
  ) => void;

  markAsRead: (id: string) => void;

  clearNotifications: () => void;
}

const useNotificationStore =
  create<NotificationStore>((set) => ({
    notifications: [],

    addNotification: (message, type) =>
      set((state) => ({
        notifications: [
          ...state.notifications,
          {
            id: Date.now().toString(),
            message,
            type,
            read: false,
          },
        ],
      })),

    markAsRead: (id) =>
      set((state) => ({
        notifications: state.notifications.map(
          (notification) =>
            notification.id === id
              ? { ...notification, read: true }
              : notification
        ),
      })),

    clearNotifications: () =>
      set({ notifications: [] }),
  }));

export default useNotificationStore;