"use client";
import {
  Availability,
  cn,
  convertToUserTimezone,
  groupAvailabilityByDay,
} from "@/lib/utils";
import { SessionType } from "@/types/types";

export type Day = "Lunes" | "Martes" | "Miércoles" | "Jueves" | "Viernes";

interface HourSelectorProps {
  availability: Availability[];
  selected?: Availability | null;
  onChange: (value: Availability | null) => void;
  sessionType: SessionType;
  timezone: string;
}

export const HourSelector = ({
  availability,
  selected,
  onChange,
  sessionType,
  timezone,
}: HourSelectorProps) => {
  const grouped = groupAvailabilityByDay(availability);
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <div className="space-y-4">
      {Object.entries(grouped).map(([day, slots]) => (
        <div key={day}>
          <p className="font-medium mb-2 text-sm">{day}:</p>
          <div className="flex flex-wrap gap-2">
            {slots.map(({ time, mode }) => {
              const userTime = convertToUserTimezone({
                day: day,
                time: time,
                fromTimezone: timezone,
                toTimezone: userTimezone,
              });
              const isSelected =
                selected?.day === day &&
                selected?.time === userTime.toFormat("HH:mm");

              return (
                <button
                  key={`${day}-${time}`}
                  onClick={() =>
                    onChange(
                      isSelected
                        ? null
                        : {
                            day: day as Day,
                            time: userTime.toFormat("HH:mm"),
                            mode,
                          }
                    )
                  }
                  className={`px-3 py-1 rounded-full border text-sm transition flex items-center gap-1 ${
                    isSelected
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  <span>{userTime.toFormat("HH:mm")}</span>
                  <span
                    className={cn(
                      "text-xs px-2 py-0.5 rounded-full capitalize",
                      mode === "online"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-800"
                    )}
                  >
                    {mode || sessionType}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
