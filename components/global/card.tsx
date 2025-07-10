import { Badge } from "@/components/ui/badge";
import { Psychologist } from "@/types/types";
import { AvailabilityModal } from "./availability-modal";

interface PsychologistCardProps {
  psychologist: Psychologist;
}

export const PsychologistCard = ({ psychologist }: PsychologistCardProps) => {
  return (
    <div className="relative flex flex-col border rounded-lg p-4 hover:shadow-lg transition-shadow bg-white">
      {psychologist.availability.length < 4 && (
        <div className="absolute -top-4 right-3 bg-white px-2 py-0.5 border rounded-full">
          <span className="text-xs">🔥 Últimos cupos</span>
        </div>
      )}
      <div className="flex-1 flex flex-col">
        <div className="text-center mb-4 flex-1 space-y-1">
          <h4 className="text-xl font-semibold text-gray-900">
            {psychologist.name}
          </h4>
          <p className="text-gray-600 text-xs">{psychologist.title}</p>
          <Badge className="bg-indigo-200 text-indigo-700 text-[10px]">
            Modalidad {psychologist.session_type}
          </Badge>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {psychologist.topics.slice(0, 2).map((topic) => (
            <Badge
              key={topic}
              variant="secondary"
              className="text-[10px] capitalize"
            >
              {topic}
            </Badge>
          ))}
          {psychologist.topics.length > 2 && (
            <Badge variant="outline" className="text-[10px]">
              +{psychologist.topics.length - 2} más
            </Badge>
          )}
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {psychologist.description}
        </p>
      </div>

      <AvailabilityModal psychologist={psychologist} />
    </div>
  );
};
