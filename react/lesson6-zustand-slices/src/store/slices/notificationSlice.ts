export interface Notification {
  id: string;
  message: string;
  read: boolean;
}

export interface NotificationSlice {
  notifications: Notification[];

  addNotification: (
    notification: Notification
  ) => void;

  markAsRead: (id: string) => void;

  clearNotifications: () => void;
}

export const createNotificationSlice = (
  set: any
) => ({
  notifications: [],

  addNotification: (
    notification: Notification
  ) =>
    set((state: any) => ({
      notifications: [
        ...state.notifications,
        notification,
      ],
    })),

  markAsRead: (id: string) =>
    set((state: any) => ({
      notifications:
        state.notifications.map((n: Notification) =>
          n.id === id
            ? { ...n, read: true }
            : n
        ),
    })),

  clearNotifications: () =>
    set({ notifications: [] }),
});