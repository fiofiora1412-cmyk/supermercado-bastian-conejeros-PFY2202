
export default function PreguntaItem({ pregunta, respuesta }) {
  return (
    <details className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm open:border-emerald-300">
      <summary className="cursor-pointer rounded-md font-semibold text-emerald-950 marker:text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700">
        {pregunta}
      </summary>

      <p className="mt-4 border-t border-slate-100 pt-4 leading-7 text-slate-600">
        {respuesta}
      </p>
    </details>
  );
}
