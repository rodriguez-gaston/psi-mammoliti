import { Calendar, Search } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-200">
      <h1 className="md:text-xl font-bold">Psi Mammoliti</h1>
      <nav>
        <ul className="flex items-center gap-4 md:gap-8">
          <li>
            <Link href="/" className="flex items-center gap-2">
              <Search size={16} />
              <span className="text-xs md:text-sm font-medium">Buscar</span>
            </Link>
          </li>
          <li>
            <Link href="/appointments" className="flex items-center gap-2">
              <Calendar size={16} />
              <span className="text-xs md:text-sm font-medium">
                Mis sesiones
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
