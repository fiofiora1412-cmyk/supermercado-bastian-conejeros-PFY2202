
const formatoCLP = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0,
});

export function formatearPrecio(precio) {
  return formatoCLP.format(precio);
}
