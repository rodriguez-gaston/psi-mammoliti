"use client";

import { useState, useMemo } from "react";
import { psychologists } from "@/data/psychologists";
import { SessionType, Topic } from "@/types/types";

export function useFilteredPsychologists() {
  const [selectedTopics, setSelectedTopics] = useState<Topic[]>([]);
  const [selectedSessionType, setSelectedSessionType] = useState<
    SessionType | "todas"
  >("todas");

  const filteredPsychologists = useMemo(() => {
    return psychologists.filter((p) => {
      const matchesTopic =
        selectedTopics.length === 0 ||
        selectedTopics.some((topic) => p.topics.includes(topic));

      const matchesSessionType =
        selectedSessionType === "todas" ||
        p.session_type === selectedSessionType;

      return matchesTopic && matchesSessionType;
    });
  }, [selectedTopics, selectedSessionType]);

  return {
    selectedTopics,
    setSelectedTopics,
    selectedSessionType,
    setSelectedSessionType,
    filteredPsychologists,
  };
}
