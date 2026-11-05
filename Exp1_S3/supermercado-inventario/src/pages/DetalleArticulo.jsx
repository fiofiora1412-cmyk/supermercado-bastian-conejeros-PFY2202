
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useInventario } from "../hooks/useInventario";
import { formatearPrecio } from "../utils/formatoPrecio";
import { RUTAS } from "../data/navegacion";

export default function DetalleArticulo() {
  const { id } = useParams();
  const { productos, agregarAlCarrito } = useInventario();
  const [mensaje, setMensaje] = useState("");

  const producto = productos.find(
    (item) => String(item.id) === id
  );

  if (!producto) {
    return (
      <section className="rounded-2xl bg-white p-8 text-center shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">
          Artículo no encontrado
        </h2>

        <p className="mt-3 text-slate-600">
          El artículo solicitado no existe en el inventario.
        </p>

        <Link
          to={RUTAS.articulos}
          className="mt-6 inline-block font-semibold text-emerald-800 underline"
        >
          Volver a la tabla
        </Link>
      </section>
    );
  }

  const sinStock = producto.stock === 0;

  function manejarAgregar() {
    if (sinStock) return;

    agregarAlCarrito(producto.id);
    setMensaje("Se agregó una unidad al carrito.");
  }

  return (
    <section className="mx-auto max-w-4xl space-y-6 pb-24">
      <Link
        to={RUTAS.articulos}
        className="inline-flex font-semibold text-emerald-800 hover:underline"
      >
        ← Volver a la tabla de inventario
      </Link>

      <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="bg-emerald-950 p-8 text-white sm:p-10">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-300">
            Detalle de artículo
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            {producto.nombre}
          </h2>

          <p className="mt-3 text-emerald-100">
            {producto.marca}
          </p>
        </div>

        <div className="space-y-7 p-6 sm:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">
                Categoría
              </p>
              <p className="mt-2 text-lg font-semibold">
                {producto.tipo}
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">
                Stock disponible
              </p>
              <p className="mt-2 text-lg font-semibold">
                {producto.stock} unidades
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-slate-500">
              Precio por unidad
            </p>

            <p className="mt-2 text-4xl font-bold text-emerald-900">
              {formatearPrecio(producto.precio)}
            </p>
          </div>

          {sinStock && (
            <p className="rounded-xl bg-red-50 p-4 font-semibold text-red-700">
              Este artículo se encuentra agotado.
            </p>
          )}

          <button
            type="button"
            disabled={sinStock}
            onClick={manejarAgregar}
            className="w-full cursor-pointer rounded-xl bg-emerald-900 px-6 py-4 font-bold text-white transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            Agregar una unidad al carrito
          </button>

          <Link
            to={RUTAS.carrito}
            className="block rounded-xl border border-emerald-700 px-6 py-4 text-center font-bold text-emerald-900 transition hover:bg-emerald-50"
            >
            Ver carrito de compras
          </Link>

          {mensaje && (
            <p
              role="status"
              className="rounded-xl bg-emerald-50 p-4 font-semibold text-emerald-800"
            >
              {mensaje}
            </p>
          )}
        </div>
      </article>
    </section>
  );
}
