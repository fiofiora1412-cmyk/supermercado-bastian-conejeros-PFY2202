export const RUTAS = {
  inventario: "/",
  registrar: "/registrar",
  articulos: "/articulos",
  nosotros: "/nosotros",
  preguntas: "/preguntas",
  detalle: "/articulos/:id",
  carrito: "/carrito",
};

export const menuPrincipal = [
  { ruta: RUTAS.inventario, texto: "Inventario" },
  { ruta: RUTAS.nosotros, texto: "Quiénes somos" },
  { ruta: RUTAS.preguntas, texto: "Preguntas frecuentes" },
];

export const menuGestion = [
  { ruta: RUTAS.registrar, texto: "Registrar artículo" },
  { ruta: RUTAS.articulos, texto: "Tabla de inventario" },
  { ruta: RUTAS.carrito, texto: "Carrito de compras" },
];

export function rutaDetalleArticulo(id) {
  return `${RUTAS.articulos}/${encodeURIComponent(String(id))}`;
}