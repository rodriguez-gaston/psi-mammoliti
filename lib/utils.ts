import {
  AvailabilityBase,
  MixedAvailability,
  SessionType,
  SingleAvailability,
} from "@/types/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { DateTime } from "luxon";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Availability = AvailabilityBase & {
  mode?: SessionType; // opcional para unificar ambos tipos
};

export function groupAvailabilityByDay(
  slots: SingleAvailability | MixedAvailability
): Record<string, Availability[]> {
  return slots.reduce<Record<string, Availability[]>>((acc, slot) => {
    const { day } = slot;
    if (!acc[day]) acc[day] = [];
    acc[day].push(slot);
    return acc;
  }, {});
}

export function convertToUserTimezone({
  day,
  time,
  fromTimezone,
  toTimezone,
}: {
  day: string;
  time: string;
  fromTimezone: string;
  toTimezone: string;
}) {
  const dayMap: Record<string, number> = {
    Lunes: 1,
    Martes: 2,
    Miércoles: 3,
    Jueves: 4,
    Viernes: 5,
  };

  const today = DateTime.local().setZone(toTimezone);
  const targetWeekday = dayMap[day];
  const baseDate = today.startOf("week").plus({ days: targetWeekday });

  const [hour, minute] = time.split(":").map(Number);

  const psychologistTime = DateTime.fromObject(
    {
      year: baseDate.year,
      month: baseDate.month,
      day: baseDate.day,
      hour,
      minute,
    },
    { zone: fromTimezone }
  );

  const userTime = psychologistTime.setZone(toTimezone);

  return userTime;
}
