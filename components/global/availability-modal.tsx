import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Availability } from "@/lib/utils";
import { Calendar } from "lucide-react";
import { useState } from "react";
import { HourSelector } from "./hour-selector";
import { Psychologist } from "@/types/types";
import { Button } from "../ui/button";
import { useSessionStore } from "@/store/sessionStore";
import { useRouter } from "next/navigation";

interface AvailabilityModalProps {
  psychologist: Psychologist;
}

export const AvailabilityModal = ({ psychologist }: AvailabilityModalProps) => {
  const [step, setStep] = useState<"seleccion" | "confirmacion">("seleccion");
  const [selected, setSelected] = useState<Availability | null>(null);
  const setSession = useSessionStore((state) => state.setSession);
  const router = useRouter();

  const handleAgendar = () => {
    if (!selected) return;
    setStep("confirmacion");
  };

  const handleConfirmar = () => {
    if (selected) {
      setSession({
        session_type: selected?.mode || psychologist.session_type,
        day: selected.day,
        time: selected.time,
        psycologist: psychologist.name,
      });
    }
    router.push("/appointments");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-full flex gap-2 items-center justify-center py-2 px-4 text-indigo-800 border border-indigo-500 rounded-md cursor-pointer">
          <Calendar size={16} />
          <span className="text-sm font-semibold">Ver disponibilidad</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {step === "seleccion"
              ? `Agendá con ${psychologist.name}`
              : `Confirmá tu sesión`}
          </DialogTitle>
          <DialogDescription>
            {step === "seleccion"
              ? "📅 Disponibilidad semanal:"
              : "Estás por confirmar la siguiente sesión:"}
          </DialogDescription>
        </DialogHeader>
        {step === "seleccion" && (
          <>
            <HourSelector
              availability={psychologist.availability}
              selected={selected}
              onChange={setSelected}
              sessionType={psychologist.session_type}
              timezone={psychologist.timezone}
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancelar</Button>
              </DialogClose>
              <Button disabled={selected === null} onClick={handleAgendar}>
                Agendar
              </Button>
            </DialogFooter>
          </>
        )}

        {step === "confirmacion" && selected && (
          <>
            <div className="py-2">
              <ul className="text-sm text-gray-900 space-y-1">
                <li>
                  <strong>Día:</strong> {selected.day}
                </li>
                <li>
                  <strong>Hora:</strong> {selected.time}
                </li>
                <li>
                  <strong>Modalidad:</strong> {selected.mode}
                </li>
                <li>
                  <strong>Psicóloga:</strong> {psychologist.name}
                </li>
              </ul>
            </div>
            <DialogFooter className="mt-4">
              <Button variant="outline" onClick={() => setStep("seleccion")}>
                Volver
              </Button>
              <Button onClick={handleConfirmar}>Confirmar sesión</Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
