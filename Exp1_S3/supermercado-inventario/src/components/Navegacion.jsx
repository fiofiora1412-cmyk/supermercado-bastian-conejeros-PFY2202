import { NavLink } from "react-router-dom";

export default function Navegacion({
  enlaces,
  tipo = "principal",
}) {
  const esPrincipal = tipo === "principal";

  return (
    <nav
      aria-label={
        esPrincipal
          ? "Navegación principal"
          : "Administración del inventario"
      }
      className={
        esPrincipal
          ? "fixed inset-x-0 bottom-0 z-50 border-t border-emerald-800 bg-emerald-950 shadow-lg"
          : "border-b border-emerald-100 bg-emerald-50"
      }
    >
      <div
        className={
          esPrincipal
            ? "mx-auto flex max-w-7xl items-center justify-center gap-2 overflow-x-auto px-3 py-3"
            : "mx-auto flex max-w-7xl flex-wrap justify-center gap-3 px-4 py-4"
        }
      >
        {enlaces.map(({ ruta, texto }) => (
          <NavLink
            key={ruta}
            to={ruta}
            end={ruta === "/"}
            className={({ isActive }) => {
              const base =
                "shrink-0 rounded-lg px-4 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 sm:text-base";

              if (esPrincipal) {
                return `${base} ${
                  isActive
                    ? "bg-white text-emerald-950"
                    : "text-white hover:bg-emerald-800"
                }`;
              }

              return `${base} ${
                isActive
                  ? "bg-emerald-950 text-white"
                  : "text-emerald-950 hover:bg-emerald-200"
              }`;
            }}
          >
            {texto}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}