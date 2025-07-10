"use client";

import { ALL_TOPICS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Topic } from "@/types/types";
import { useState } from "react";

type Props = {
  onChange: (selected: Topic[]) => void;
  selectedTopics: Topic[];
};

export const Filter = ({ onChange, selectedTopics }: Props) => {
  const [selected, setSelected] = useState<Topic[]>(selectedTopics);

  const toggleTopic = (topic: Topic) => {
    const updated = selected.includes(topic)
      ? selected.filter((t) => t !== topic)
      : [...selected, topic];

    setSelected(updated);
    onChange(updated);
  };

  return (
    <div>
      <p className="text-xs md:text-sm text-gray-500 px-4">
        Elige un tema de consulta para filtrar la búsqueda
      </p>
      <div className="flex overflow-x-scroll gap-2 w-full no-scrollbar py-2">
        {ALL_TOPICS.map((topic) => {
          const isSelected = selected.includes(topic);
          return (
            <button
              key={topic}
              onClick={() => toggleTopic(topic)}
              className={cn(
                "px-3 py-2 rounded-full border text-xs whitespace-nowrap capitalize first:ml-4 last:mr-4",
                isSelected
                  ? "bg-gradient-to-r from-indigo-100 to-white text-indigo-800 border-indigo-600"
                  : "bg-gray-200 text-gray-700 border-gray-200"
              )}
            >
              {topic}
            </button>
          );
        })}
      </div>
    </div>
  );
};
