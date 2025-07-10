import { PsychologistGrid } from "@/components/global/psychologist-grid";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center my-10 gap-4">
      <section className="px-4 text-center">
        <h2 className="text-2xl text-indigo-600 font-bold">
          Da el primer paso hacia tu bienestar
        </h2>
        <h3 className="text-slate-600 font-medium">
          Agenda tu sesión de terapia online con profesionales
        </h3>
      </section>

      <PsychologistGrid />
    </main>
  );
}
