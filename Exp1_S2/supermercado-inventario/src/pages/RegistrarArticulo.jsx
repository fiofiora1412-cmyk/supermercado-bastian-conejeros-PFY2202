
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInventario } from "../hooks/useInventario";
import { RUTAS } from "../data/navegacion";

const formularioInicial = {
  nombre: "",
  marca: "",
  tipo: "",
  precio: "",
  stock: "",
};

const categorias = [
  "Abarrotes",
  "Lácteos",
  "Panadería",
  "Pastas",
  "Bebidas",
  "Limpieza",
  "Otros",
];

const estiloCampo =
  "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100";

export default function RegistrarArticulo() {
  const { agregarProducto } = useInventario();
  const navigate = useNavigate();

  const [formulario, setFormulario] = useState(formularioInicial);
  const [error, setError] = useState("");

  function manejarCambio(evento) {
    const { name, value } = evento.target;

    setFormulario((anterior) => ({
      ...anterior,
      [name]: value,
    }));

    if (error) setError("");
  }

  function manejarEnvio(evento) {
    evento.preventDefault();

    const nombre = formulario.nombre.trim();
    const marca = formulario.marca.trim();
    const tipo = formulario.tipo;
    const precio = Number(formulario.precio);
    const stock = Number(formulario.stock);

    if (!nombre || !marca || !categorias.includes(tipo)) {
      setError("Completa correctamente todos los campos.");
      return;
    }

    if (
      formulario.precio === "" ||
      formulario.stock === "" ||
      !Number.isSafeInteger(precio) ||
      precio < 0 ||
      !Number.isSafeInteger(stock) ||
      stock < 0
    ) {
      setError(
        "El precio y el stock deben ser números enteros no negativos."
      );
      return;
    }

    agregarProducto({
      nombre,
      marca,
      tipo,
      precio,
      stock,
    });

    setFormulario(formularioInicial);
    setError("");

    navigate(RUTAS.articulos);
  }

  return (
    <section className="mx-auto max-w-3xl pb-24">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
          Administración del inventario
        </p>

        <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
          Registrar nuevo artículo
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          Ingresa los datos de un nuevo producto para incorporarlo
          al inventario general del supermercado.
        </p>
      </div>

      <form
        onSubmit={manejarEnvio}
        className="space-y-7 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9"
      >
        <div>
          <h3 className="text-xl font-bold text-emerald-950">
            Información del producto
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Todos los campos son obligatorios.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="nombre"
              className="block font-semibold text-slate-800"
            >
              Nombre del artículo
            </label>

            <input
              id="nombre"
              name="nombre"
              type="text"
              value={formulario.nombre}
              onChange={manejarCambio}
              placeholder="Ejemplo: Café"
              maxLength={80}
              className={estiloCampo}
              required
            />
          </div>

          <div>
            <label
              htmlFor="marca"
              className="block font-semibold text-slate-800"
            >
              Marca
            </label>

            <input
              id="marca"
              name="marca"
              type="text"
              value={formulario.marca}
              onChange={manejarCambio}
              placeholder="Ejemplo: Nescafé"
              maxLength={80}
              className={estiloCampo}
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="tipo"
            className="block font-semibold text-slate-800"
          >
            Tipo de producto
          </label>

          <select
            id="tipo"
            name="tipo"
            value={formulario.tipo}
            onChange={manejarCambio}
            className={estiloCampo}
            required
          >
            <option value="">Selecciona una categoría</option>

            {categorias.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="precio"
              className="block font-semibold text-slate-800"
            >
              Precio (CLP)
            </label>

            <input
              id="precio"
              name="precio"
              type="number"
              min="0"
              step="1"
              value={formulario.precio}
              onChange={manejarCambio}
              placeholder="Ejemplo: 4990"
              className={estiloCampo}
              required
            />
          </div>

          <div>
            <label
              htmlFor="stock"
              className="block font-semibold text-slate-800"
            >
              Stock inicial
            </label>

            <input
              id="stock"
              name="stock"
              type="number"
              min="0"
              step="1"
              value={formulario.stock}
              onChange={manejarCambio}
              placeholder="Ejemplo: 20"
              className={estiloCampo}
              required
            />
          </div>
        </div>

        {error && (
          <p
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 p-4 font-medium text-red-700"
          >
            {error}
          </p>
        )}

        <div className="border-t border-slate-100 pt-6">
          <button
            type="submit"
            className="w-full cursor-pointer rounded-xl bg-emerald-900 px-6 py-4 font-bold text-white transition hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
          >
            Guardar artículo
          </button>

          <p className="mt-4 text-center text-sm text-slate-500">
            Los datos se conservarán en el almacenamiento
            local del navegador.
          </p>
        </div>
      </form>
    </section>
  );
}
