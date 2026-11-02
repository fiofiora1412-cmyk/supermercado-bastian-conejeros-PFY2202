
import hero from "../assets/hero.png";

const valores = [
  {
    titulo: "Transparencia",
    descripcion:
      "Presentamos la información de precios, categorías y existencias de manera clara y accesible.",
  },
  {
    titulo: "Organización",
    descripcion:
      "Mantenemos un inventario estructurado para facilitar la administración y consulta de artículos.",
  },
  {
    titulo: "Cercanía",
    descripcion:
      "Buscamos una experiencia sencilla y comprensible para quienes utilizan nuestro supermercado.",
  },
  {
    titulo: "Responsabilidad",
    descripcion:
      "Promovemos el control de existencias y el registro ordenado de productos.",
  },
];

export default function Nosotros() {
  return (
    <section className="space-y-8 pb-24">
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-center p-6 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              Conoce nuestro supermercado
            </p>

            <h2 className="mt-3 text-3xl font-bold text-emerald-950 sm:text-4xl">
              Quiénes somos
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              SuperMarket es un proyecto de supermercado que
              integra la gestión de productos y existencias
              mediante una aplicación web desarrollada con React.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Nuestro objetivo es ofrecer una plataforma clara
              para consultar artículos, revisar sus precios,
              conocer su disponibilidad y administrar el inventario
              desde una interfaz intuitiva.
            </p>
          </div>

          <img
            src={hero}
            alt="Imagen de presentación del proyecto SuperMarket"
            className="h-64 w-full object-cover lg:h-full"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <article className="rounded-2xl border border-emerald-100 bg-emerald-50 p-7">
          <h3 className="text-2xl font-bold text-emerald-950">
            Nuestra misión
          </h3>

          <p className="mt-4 leading-7 text-slate-700">
            Facilitar una administración eficiente y transparente
            de los productos del supermercado, proporcionando
            información actualizada de precios, categorías y stock.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-7">
          <h3 className="text-2xl font-bold text-emerald-950">
            Nuestra visión
          </h3>

          <p className="mt-4 leading-7 text-slate-700">
            Convertir SuperMarket en una plataforma digital
            organizada y escalable, capaz de incorporar nuevas
            funcionalidades y mejorar continuamente la experiencia
            de administración de inventario.
          </p>
        </article>
      </div>

      <section aria-labelledby="titulo-valores">
        <div className="mb-5">
          <h3
            id="titulo-valores"
            className="text-2xl font-bold text-emerald-950"
          >
            Nuestros valores
          </h3>

          <p className="mt-2 text-slate-600">
            Los principios que orientan nuestra propuesta.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {valores.map((valor) => (
            <article
              key={valor.titulo}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h4 className="text-lg font-bold text-emerald-900">
                {valor.titulo}
              </h4>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {valor.descripcion}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
        <h3 className="text-2xl font-bold text-emerald-950">
          Nuestras tiendas
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Como parte del proyecto académico, presentamos dos
          modelos referenciales de atención. Estas sucursales
          son ilustrativas y no representan establecimientos
          comerciales reales.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="rounded-xl bg-slate-50 p-5">
            <h4 className="text-lg font-bold text-emerald-900">
              SuperMarket Centro
            </h4>

            <p className="mt-2 leading-6 text-slate-600">
              Tienda referencial orientada al abastecimiento
              general, con productos de alimentación,
              lácteos, abarrotes y artículos de uso cotidiano.
            </p>
          </article>

          <article className="rounded-xl bg-slate-50 p-5">
            <h4 className="text-lg font-bold text-emerald-900">
              SuperMarket Barrio
            </h4>

            <p className="mt-2 leading-6 text-slate-600">
              Tienda referencial enfocada en compras rápidas
              y productos esenciales, con énfasis en la
              disponibilidad y facilidad de consulta.
            </p>
          </article>
        </div>
      </section>

      <aside className="rounded-2xl bg-emerald-950 p-7 text-white">
        <h3 className="text-xl font-bold">
          Tecnología al servicio del inventario
        </h3>

        <p className="mt-3 leading-7 text-emerald-100">
          La aplicación utiliza React, React Router y gestión
          global de estado para compartir la información del
          inventario entre sus distintas páginas. Los registros
          se conservan en el almacenamiento local del navegador.
        </p>
      </aside>
    </section>
  );
}
