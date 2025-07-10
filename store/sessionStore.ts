import { Day } from "@/components/global/hour-selector";
import { SessionType } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Session = {
  session_type: SessionType;
  day: Day;
  time: string;
  psycologist: string;
};

type SessionStore = {
  selectedSession: Session | null;
  setSession: (session: Session) => void;
  clearSession: () => void;
};

export const useSessionStore = create<SessionStore>()(
  persist(
    (set) => ({
      selectedSession: null,
      setSession: (session) => set({ selectedSession: session }),
      clearSession: () => set({ selectedSession: null }),
    }),
    {
      name: "scheduled-session",
    }
  )
);
