
import { useState } from "react";
import { useInventario } from "../hooks/useInventario";
import { formatearPrecio } from "../utils/formatoPrecio";
import { Link } from "react-router-dom";
import { rutaDetalleArticulo } from "../data/navegacion";

export default function TablaInventario() {
  const { productos } = useInventario();

  // Estados locales para buscar y filtrar productos
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");

  // Obtener las categorías disponibles sin duplicados
  const categorias = [
    ...new Set(
      productos.map((producto) => producto.tipo).filter(Boolean)
    ),
  ].sort((a, b) => a.localeCompare(b, "es"));

  // Estadísticas generales del inventario
  const totalUnidades = productos.reduce(
    (total, producto) => total + producto.stock,
    0
  );

  const valorInventario = productos.reduce(
    (total, producto) =>
      total + producto.precio * producto.stock,
    0
  );

  // Filtrar sin modificar los productos originales
  const productosFiltrados = productos.filter((producto) => {
    const termino = busqueda.trim().toLocaleLowerCase("es");

    const coincideBusqueda = [
      producto.nombre,
      producto.marca,
      producto.tipo,
    ].some((valor) =>
      String(valor).toLocaleLowerCase("es").includes(termino)
    );

    const coincideCategoria =
      categoria === "Todas" || producto.tipo === categoria;

    return coincideBusqueda && coincideCategoria;
  });

  return (
    <section className="space-y-8 pb-24">
      {/* Encabezado */}
      <div>
        <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
          Administración del inventario
        </p>

        <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
          Tabla de inventario
        </h2>

        <p className="mt-3 text-slate-600">
          Consulta los artículos disponibles y sus existencias
          actualizadas.
        </p>
      </div>

      {/* Tarjetas con estadísticas */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Artículos registrados
          </p>

          <p className="mt-2 text-3xl font-bold text-emerald-950">
            {productos.length}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Unidades disponibles
          </p>

          <p className="mt-2 text-3xl font-bold text-emerald-950">
            {totalUnidades}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Valor del inventario
          </p>

          <p className="mt-2 text-2xl font-bold text-emerald-950">
            {formatearPrecio(valorInventario)}
          </p>
        </div>
      </div>

      {/* Listado de artículos */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {/* Encabezado, buscador y filtro */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 p-5 sm:p-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Listado de artículos
            </h3>

            <p
              className="mt-1 text-sm text-slate-500"
              aria-live="polite"
            >
              {productosFiltrados.length} resultados
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            {/* Buscador */}
            <div className="w-full sm:w-60">
              <label
                htmlFor="buscar-articulo"
                className="sr-only"
              >
                Buscar artículo
              </label>

              <input
                id="buscar-articulo"
                type="search"
                value={busqueda}
                onChange={(evento) =>
                  setBusqueda(evento.target.value)
                }
                placeholder="Buscar artículo..."
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
              />
            </div>

            {/* Filtro dinámico por categoría */}
            <div className="w-full sm:w-56">
              <label
                htmlFor="filtrar-categoria"
                className="sr-only"
              >
                Filtrar artículos por categoría
              </label>

              <select
                id="filtrar-categoria"
                value={categoria}
                onChange={(evento) =>
                  setCategoria(evento.target.value)
                }
                className="w-full cursor-pointer rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
              >
                <option value="Todas">
                  Todas las categorías
                </option>

                {categorias.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Tabla de inventario */}
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[780px] border-collapse text-left">
            <caption className="sr-only">
              Inventario actualizado de artículos del supermercado
            </caption>

            <thead className="bg-emerald-950 text-white">
              <tr>
                <th scope="col" className="px-5 py-4">
                  ID
                </th>

                <th scope="col" className="px-5 py-4">
                  Nombre
                </th>

                <th scope="col" className="px-5 py-4">
                  Marca
                </th>

                <th scope="col" className="px-5 py-4">
                  Tipo
                </th>

                <th scope="col" className="px-5 py-4">
                  Precio
                </th>

                <th scope="col" className="px-5 py-4">
                  Stock
                </th>

                <th scope="col" className="px-5 py-4">
                  Estado
                </th>
              </tr>
            </thead>

            <tbody>
              {productosFiltrados.map((producto) => (
                <tr
                  key={producto.id}
                  className="border-b border-slate-100 even:bg-slate-50 hover:bg-emerald-50"
                >
                  <td
                    className="px-5 py-4 text-sm text-slate-500"
                    title={String(producto.id)}
                  >
                    {String(producto.id).slice(0, 8)}
                  </td>

                  <td className="px-5 py-4 font-semibold">
                    <Link
                      to={rutaDetalleArticulo(producto.id)}
                      className="text-emerald-900 underline-offset-4 hover:underline focus-visible:underline"
                      aria-label={`Ver detalle de ${producto.nombre}`}
                    >
                      {producto.nombre}
                    </Link>
                  </td>

                  <td className="px-5 py-4 text-slate-600">
                    {producto.marca}
                  </td>

                  <td className="px-5 py-4 text-slate-600">
                    {producto.tipo}
                  </td>

                  <td className="px-5 py-4 font-semibold text-slate-900">
                    {formatearPrecio(producto.precio)}
                  </td>

                  <td className="px-5 py-4 font-semibold text-slate-900">
                    {producto.stock}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${
                        producto.stock > 0
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {producto.stock > 0
                        ? "Disponible"
                        : "Sin stock"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mensaje cuando no existen coincidencias */}
          {productosFiltrados.length === 0 && (
            <p className="p-8 text-center text-slate-500">
              No se encontraron artículos para la búsqueda
              o categoría seleccionada.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
