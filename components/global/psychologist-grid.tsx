"use client";
import { Filter } from "@/components/global/filter";
import { TypeSelector } from "@/components/global/type-selector";
import { useFilteredPsychologists } from "@/hooks/useFilteredPsychologists";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PsychologistCard } from "./card";

export const PsychologistGrid = () => {
  const {
    setSelectedTopics,
    filteredPsychologists,
    setSelectedSessionType,
    selectedTopics,
    selectedSessionType,
  } = useFilteredPsychologists();

  return (
    <section className="w-full">
      <div className="h-px bg-gray-200 mx-4" />
      <Accordion type="single" collapsible>
        <AccordionItem value="1">
          <AccordionTrigger className="px-4">Filtrar</AccordionTrigger>
          <AccordionContent>
            <TypeSelector
              onChange={setSelectedSessionType}
              selectedSessionType={selectedSessionType}
            />
            <Filter
              onChange={setSelectedTopics}
              selectedTopics={selectedTopics}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="h-px bg-gray-200 mx-4 mb-4" />
      <div className="grid gap-6 mt-6 px-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
        {filteredPsychologists.map((p) => (
          <PsychologistCard psychologist={p} key={p.id} />
        ))}
      </div>
    </section>
  );
};
