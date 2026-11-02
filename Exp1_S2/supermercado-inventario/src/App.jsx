import { Link, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Navegacion from "./components/Navegacion";

import Inventario from "./pages/Inventario";
import Nosotros from "./pages/Nosotros";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes";
import RegistrarArticulo from "./pages/RegistrarArticulo";
import TablaInventario from "./pages/TablaInventario";

import {
  RUTAS,
  menuGestion,
  menuPrincipal,
} from "./data/navegacion";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100 text-slate-900">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-3"
      >
        Ir al contenido principal
      </a>

      <Header />

      <Navegacion
        enlaces={menuGestion}
        tipo="gestion"
      />

      <main
        id="contenido"
        className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6"
      >
        <Routes>
          <Route
            path={RUTAS.inventario}
            element={<Inventario />}
          />

          <Route
            path={RUTAS.registrar}
            element={<RegistrarArticulo />}
          />

          <Route
            path={RUTAS.articulos}
            element={<TablaInventario />}
          />

          <Route
            path={RUTAS.nosotros}
            element={<Nosotros />}
          />

          <Route
            path={RUTAS.preguntas}
            element={<PreguntasFrecuentes />}
          />

          <Route
            path="*"
            element={
              <section className="rounded-2xl bg-white p-8 text-center shadow-sm">
                <h2 className="text-3xl font-bold text-emerald-950">
                  Error 404
                </h2>

                <p className="mt-4 text-slate-600">
                  La página solicitada no existe.
                </p>

                <Link
                  to={RUTAS.inventario}
                  className="mt-6 inline-block rounded-lg bg-emerald-900 px-5 py-3 font-semibold text-white hover:bg-emerald-800"
                >
                  Volver al inventario
                </Link>
              </section>
            }
          />
        </Routes>
      </main>

      <Footer />

      <Navegacion enlaces={menuPrincipal} />
    </div>
  );
}

export default App;