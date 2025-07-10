import { SessionType } from "@/types/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TypeSelectorProps {
  onChange: (selected: SessionType) => void;
  selectedSessionType: SessionType | "todas";
}

export const TypeSelector = ({
  onChange,
  selectedSessionType,
}: TypeSelectorProps) => {
  return (
    <div className="mb-4 px-4">
      <Select
        defaultValue={selectedSessionType}
        onValueChange={(value) => onChange(value as SessionType)}
      >
        <SelectTrigger className="w-60">
          <SelectValue placeholder="Modalidad de sesión" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todas">Todas las modalidades</SelectItem>
          <SelectItem value="online">Online</SelectItem>
          <SelectItem value="presencial">Presencial</SelectItem>
          <SelectItem value="mixto">Mixto</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
