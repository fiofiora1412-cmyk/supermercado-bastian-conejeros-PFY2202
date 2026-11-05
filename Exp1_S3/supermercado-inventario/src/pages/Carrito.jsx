
import { Link } from "react-router-dom";
import { useInventario } from "../hooks/useInventario";
import { formatearPrecio } from "../utils/formatoPrecio";
import {
  RUTAS,
  rutaDetalleArticulo,
} from "../data/navegacion";

export default function Carrito() {
  const {
    productos,
    carrito,
    agregarAlCarrito,
    disminuirCarrito,
    quitarDelCarrito,
  } = useInventario();

  // Relacionar cada artículo del carrito con sus datos
  const articulosCarrito = carrito.flatMap((item) => {
    const producto = productos.find(
      (producto) => producto.id === item.id
    );

    return producto
      ? [{ ...producto, cantidad: item.cantidad }]
      : [];
  });

  // Calcular cantidades y totales sin modificar el estado
  const totalUnidades = articulosCarrito.reduce(
    (total, articulo) => total + articulo.cantidad,
    0
  );

  const totalCompra = articulosCarrito.reduce(
    (total, articulo) =>
      total + articulo.precio * articulo.cantidad,
    0
  );

  return (
    <section className="space-y-8 pb-24">
      {/* Encabezado */}
      <div>
        <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
          SuperMarket
        </p>

        <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
          Carrito de compras
        </h2>

        <p className="mt-3 text-slate-600">
          Administra los artículos seleccionados.
          Los cambios de cantidad actualizan
          automáticamente el inventario disponible.
        </p>
      </div>

      {/* Carrito vacío */}
      {articulosCarrito.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
          <h3 className="text-2xl font-bold text-emerald-950">
            Tu carrito está vacío
          </h3>

          <p className="mt-3 text-slate-600">
            Selecciona un artículo desde la tabla de
            inventario para comenzar a agregar productos.
          </p>

          <Link
            to={RUTAS.articulos}
            className="mt-6 inline-block rounded-xl bg-emerald-900 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
          >
            Explorar artículos
          </Link>
        </div>
      ) : (
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          {/* Productos seleccionados */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">
              Artículos seleccionados
            </h3>

            <ul className="space-y-4">
              {articulosCarrito.map((articulo) => (
                <li
                  key={articulo.id}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <span className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                        {articulo.tipo}
                      </span>

                      <h4 className="mt-3 text-xl font-bold">
                        <Link
                          to={rutaDetalleArticulo(articulo.id)}
                          className="text-slate-900 hover:text-emerald-800 hover:underline"
                        >
                          {articulo.nombre}
                        </Link>
                      </h4>

                      <p className="mt-1 text-sm text-slate-500">
                        Marca: {articulo.marca}
                      </p>

                      <p className="mt-3 text-sm text-slate-600">
                        Precio unitario:{" "}
                        {formatearPrecio(articulo.precio)}
                      </p>
                    </div>

                    <div className="text-left sm:text-right">
                      <p className="text-sm text-slate-500">
                        Subtotal
                      </p>

                      <p className="mt-1 text-2xl font-bold text-emerald-900">
                        {formatearPrecio(
                          articulo.precio * articulo.cantidad
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5">
                    <div>
                      <p className="mb-2 text-sm font-semibold text-slate-700">
                        Cantidad en el carrito
                      </p>

                      <div className="inline-flex items-center overflow-hidden rounded-xl border border-slate-300">
                        <button
                          type="button"
                          onClick={() =>
                            disminuirCarrito(articulo.id)
                          }
                          aria-label={`Disminuir cantidad de ${articulo.nombre}`}
                          className="cursor-pointer px-4 py-3 font-bold text-slate-800 transition hover:bg-slate-100"
                        >
                          −
                        </button>

                        <output
                          aria-label={`Cantidad de ${articulo.nombre} en el carrito`}
                          className="min-w-12 border-x border-slate-300 px-3 py-3 text-center font-bold"
                        >
                          {articulo.cantidad}
                        </output>

                        <button
                          type="button"
                          onClick={() =>
                            agregarAlCarrito(articulo.id)
                          }
                          disabled={articulo.stock === 0}
                          aria-label={`Aumentar cantidad de ${articulo.nombre}`}
                          className="cursor-pointer px-4 py-3 font-bold text-emerald-900 transition hover:bg-emerald-50 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 sm:items-end">
                      <p className="text-sm text-slate-500">
                        Disponibles en inventario:{" "}
                        <strong>{articulo.stock}</strong>
                      </p>

                      <button
                        type="button"
                        onClick={() =>
                          quitarDelCarrito(articulo.id)
                        }
                        className="cursor-pointer rounded-lg px-3 py-2 font-semibold text-red-700 transition hover:bg-red-50"
                      >
                        Quitar del carrito
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Resumen */}
          <aside className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm lg:sticky lg:top-6">
            <h3 className="text-xl font-bold text-emerald-950">
              Resumen del carrito
            </h3>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between gap-3 text-slate-600">
                <span>Artículos diferentes</span>
                <strong className="text-slate-900">
                  {articulosCarrito.length}
                </strong>
              </div>

              <div className="flex justify-between gap-3 text-slate-600">
                <span>Unidades seleccionadas</span>
                <strong className="text-slate-900">
                  {totalUnidades}
                </strong>
              </div>

              <div className="border-t border-slate-200 pt-5">
                <p className="text-sm font-medium text-slate-500">
                  Total del carrito
                </p>

                <p
                  className="mt-2 text-3xl font-bold text-emerald-900"
                  aria-live="polite"
                >
                  {formatearPrecio(totalCompra)}
                </p>
              </div>
            </div>

            <Link
              to={RUTAS.articulos}
              className="mt-6 block rounded-xl bg-emerald-900 px-4 py-3 text-center font-bold text-white transition hover:bg-emerald-800"
            >
              Seguir agregando artículos
            </Link>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              Este carrito corresponde a una simulación
              académica. No procesa pagos ni pedidos reales.
            </p>
          </aside>
        </div>
      )}
    </section>
  );
}
