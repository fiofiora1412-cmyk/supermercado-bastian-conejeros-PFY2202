
import { formatearPrecio } from "../utils/formatoPrecio";

export default function ProductoCard({ producto, cambiarStock }) {
  const sinStock = producto.stock === 0;

  return (
    <li className="flex flex-col justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div>
        <span className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
          {producto.tipo}
        </span>

        <h3 className="mt-3 text-xl font-bold text-slate-900">
          {producto.nombre}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {producto.marca}
        </p>

        <p className="mt-5 text-2xl font-bold text-emerald-900">
          {formatearPrecio(producto.precio)}
        </p>

        <div className="mt-4 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
          <span className="text-sm font-medium text-slate-600">
            Stock disponible
          </span>

          <span
            aria-live="polite"
            className={`text-lg font-bold ${
              sinStock ? "text-red-600" : "text-emerald-800"
            }`}
          >
            {producto.stock}
          </span>
        </div>

        {sinStock && (
          <p className="mt-2 text-sm font-semibold text-red-600">
            Producto agotado
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => cambiarStock(producto.id, -1)}
          disabled={sinStock}
          aria-label={`Disminuir stock de ${producto.nombre}`}
          className="rounded-lg border border-slate-300 bg-white px-3 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          − Disminuir
        </button>

        <button
          type="button"
          onClick={() => cambiarStock(producto.id, 1)}
          aria-label={`Aumentar stock de ${producto.nombre}`}
          className="rounded-lg bg-emerald-900 px-3 py-3 font-semibold text-white transition hover:bg-emerald-800"
        >
          + Aumentar
        </button>
      </div>
    </li>
  );
}
