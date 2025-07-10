"use client";
import { useSessionStore } from "@/store/sessionStore";
import { AppointmentCard } from "./appointment-card";
import { Button } from "../ui/button";
import Link from "next/link";

export const AppointmentsList = () => {
  const session = useSessionStore((state) => state.selectedSession);

  return (
    <section className="w-full px-4 mt-4">
      {session ? (
        <AppointmentCard session={session} />
      ) : (
        <div className="text-center space-y-4">
          <p>No tienes sesiones agendadas</p>
          <Button>
            <Link href="/">Buscar profesionales</Link>
          </Button>
        </div>
      )}
    </section>
  );
};
