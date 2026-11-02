export default function Header() {
  return (
    <header className="bg-emerald-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 text-center sm:px-6">
        <p className="text-sm font-bold uppercase tracking-widest text-emerald-300">
          SuperMarket
        </p>

        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
          Control de inventario
        </h1>

        <p className="mt-3 text-emerald-100">
          Administración de productos, existencias y artículos
          del supermercado.
        </p>
      </div>
    </header>
  );
}