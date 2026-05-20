import { create } from "zustand";

import {
  devtools,
  persist,
  createJSONStorage,
} from "zustand/middleware";

import { immer } from "zustand/middleware/immer";

interface Collaborator {
  id: number;
  name: string;
  email: string;
}

interface HistoryEntry {
  noteId: string;
  action: string;
  timestamp: number;
}

interface AppState {
  userId: string;

  token: string;

  role: "admin" | "user";

  expiresAt: number;

  collaborators: Collaborator[];

  history: HistoryEntry[];

  setSession: (
    userId: string,
    token: string,
    expiresAt: number
  ) => void;

  setCollaborators: (
    collaborators: Collaborator[]
  ) => void;

  addHistoryEntry: (
    entry: HistoryEntry
  ) => void;

  clearHistory: () => void;
}

const logMiddleware =
  (config: any) =>
  (set: any, get: any, api: any) =>
    config(
      (args: any) => {
        console.log("Before:", get());

        set(args);

        console.log("After:", get());
      },
      get,
      api
    );

export const useAppStore =
  create<AppState>()(
    devtools(
      persist(
        immer(
          logMiddleware((set: any) => ({
            userId: "",

            token: "",

            role: "user",

            expiresAt: 0,

            collaborators: [],

            history: [],

            setSession: (
  userId: string,
  token: string,
  expiresAt: number
) =>
              set((state: AppState) => {
                state.userId = userId;

                state.token = token;

                state.expiresAt =
                  expiresAt;
              }),

          setCollaborators: (
  collaborators: Collaborator[]
) =>
              set((state: AppState) => {
                state.collaborators =
                  collaborators;
              }),

           addHistoryEntry: (
  entry: HistoryEntry
) =>
              set((state: AppState) => {
                state.history.push(
                  entry
                );
              }),

            clearHistory: () =>
              set((state: AppState) => {
                state.history = [];
              }),
          }))
        ),

        {
          name: "advanced-zustand-store",

          storage:
            createJSONStorage(
              () => localStorage
            ),

          partialize: (
            state
          ) => ({
            userId: state.userId,

            token: state.token,

            role: state.role,
          }),

          version: 2,

          migrate: (
            persistedState: any,
            version
          ) => {
            if (version < 2) {
              return {
                ...persistedState,

                role: "user",
              };
            }

            return persistedState;
          },
        }
      )
    )
  );