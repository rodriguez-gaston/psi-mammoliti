import { AppointmentsList } from "@/components/global/appointments-list";

export default function Appointments() {
  return (
    <main className="flex flex-col items-center justify-center mt-10">
      <section className="px-4 text-center">
        <h2 className="text-2xl text-indigo-600 font-bold">Mis sesiones</h2>
      </section>

      <AppointmentsList />
    </main>
  );
}
