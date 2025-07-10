import { cn } from "@/lib/utils";
import { Session, useSessionStore } from "@/store/sessionStore";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";

interface AppointmentCardProps {
  session: Session;
}

export const AppointmentCard = ({ session }: AppointmentCardProps) => {
  const clearSession = useSessionStore((state) => state.clearSession);

  return (
    <div className="max-w-sm mx-auto flex border rounded-lg p-4 hover:shadow-lg transition-shadow bg-white">
      <div className="flex-1">
        <h4 className="text-xl font-semibold mb-2">
          {session.day} - {session.time}hs
        </h4>
        <p className="text-sm text-gray-800">{session.psycologist}</p>
        <span
          className={cn(
            "text-xs px-2 py-0.5 rounded-full capitalize",
            session.session_type === "online"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-800"
          )}
        >
          {session.session_type}
        </span>
      </div>
      <Button onClick={() => clearSession()} variant="outline">
        <Trash />
        <span className="sr-only">Cancelar sesión</span>
      </Button>
    </div>
  );
};
