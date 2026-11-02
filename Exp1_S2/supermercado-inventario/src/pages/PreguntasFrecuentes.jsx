import PreguntaItem from "../components/PreguntaItem";
import { preguntasFrecuentes } from "../data/preguntas";

export default function PreguntasFrecuentes() {
  return (
    <section className="mx-auto max-w-4xl space-y-7 pb-24">
      <div className="rounded-2xl bg-emerald-950 p-7 text-white sm:p-10">
        <p className="text-sm font-bold uppercase tracking-widest text-emerald-300">
          Centro de ayuda
        </p>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Preguntas frecuentes
        </h2>

        <p className="mt-4 leading-7 text-emerald-100">
          Encuentra respuestas sobre el registro de artículos,
          la consulta de productos, el control de stock y
          el funcionamiento de nuestro sistema de inventario.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-slate-900">
          Información y funcionamiento
        </h3>

        <p className="mt-2 text-slate-600">
          Selecciona una pregunta para consultar su respuesta.
        </p>
      </div>

      <div className="space-y-4">
        {preguntasFrecuentes.map((item) => (
          <PreguntaItem
            key={item.id}
            pregunta={item.pregunta}
            respuesta={item.respuesta}
          />
        ))}
      </div>

      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
        <h3 className="text-lg font-bold text-emerald-950">
          Información del proyecto
        </h3>

        <p className="mt-3 leading-7 text-slate-700">
          SuperMarket es una aplicación demostrativa desarrollada
          para la asignatura Desarrollo Frontend II (PFY2202).
          Sus datos y funcionalidades tienen fines académicos.
        </p>
      </div>
    </section>
  );
}
