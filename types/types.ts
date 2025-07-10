export type Topic =
  | "ansiedad"
  | "depresión"
  | "autoestima"
  | "relaciones de pareja"
  | "relaciones familiares"
  | "fobias"
  | "estrés laboral"
  | "burnout"
  | "duelo"
  | "ataques de pánico"
  | "trastornos del sueño"
  | "identidad de género"
  | "sexualidad"
  | "manejo de la ira"
  | "trastornos alimenticios"
  | "crecimiento personal";

export type SessionType = "online" | "presencial" | "mixto";

export type AvailabilityBase = {
  day: "Lunes" | "Martes" | "Miércoles" | "Jueves" | "Viernes";
  time: string;
};

export type SingleAvailability = AvailabilityBase[];

export type MixedAvailability = (AvailabilityBase & {
  mode: "online" | "presencial";
})[];

export type BasePsychologist = {
  id: string;
  name: string;
  timezone: string;
  title: string;
  description: string;
  topics: Topic[];
};

export type PsychologistAvailability =
  | {
      availability: SingleAvailability;
      session_type: "online" | "presencial";
    }
  | {
      availability: MixedAvailability;
      session_type: "mixto";
    };

export type Psychologist = BasePsychologist & PsychologistAvailability;
