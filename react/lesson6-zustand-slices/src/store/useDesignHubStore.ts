import { create } from "zustand";

import {
  createUserSlice,
  UserSlice,
} from "./slices/userSlice";

import {
  createFileSlice,
  FileSlice,
} from "./slices/fileSlice";

import {
  createNotificationSlice,
  NotificationSlice,
} from "./slices/notificationSlice";

type DesignHubStore =
  UserSlice &
  FileSlice &
  NotificationSlice;

export const useDesignHubStore =
  create<DesignHubStore>()((set, get) => ({
    ...createUserSlice(set),

    ...createFileSlice(set),

    ...createNotificationSlice(set),
  }));