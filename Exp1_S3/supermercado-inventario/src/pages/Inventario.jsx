
import ProductoCard from "../components/ProductoCard";
import { useInventario } from "../hooks/useInventario";

export default function Inventario() {
  const { productos, cambiarStock } = useInventario();

  const totalUnidades = productos.reduce(
    (total, producto) => total + producto.stock,
    0
  );

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 pb-28 sm:px-6">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
            Panel de control
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Inventario de productos
          </h2>

          <p className="mt-2 text-slate-600">
            Consulta los artículos y administra sus existencias.
          </p>
        </div>

        <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-3 text-emerald-950">
          <p className="text-sm font-medium">
            {productos.length} artículos registrados
          </p>

          <p className="text-lg font-bold">
            {totalUnidades} unidades disponibles
          </p>
        </div>
      </div>

      {productos.length === 0 ? (
        <p className="rounded-xl bg-white p-8 text-center text-slate-600">
          No hay productos registrados en el inventario.
        </p>
      ) : (
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {productos.map((producto) => (
            <ProductoCard
              key={producto.id}
              producto={producto}
              cambiarStock={cambiarStock}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
