
import { useEffect, useReducer } from "react";
import { InventarioContext } from "./InventarioContext";
import { productosIniciales } from "../data/productosIniciales";

const STORAGE_KEY = "supermarket-productos";

function inicializarProductos() {
  try {
    const guardados = localStorage.getItem(STORAGE_KEY);

    if (!guardados) return productosIniciales;

    const datos = JSON.parse(guardados);

    if (!Array.isArray(datos)) return productosIniciales;

    return datos
      .filter(
        (item) =>
          item &&
          (typeof item.id === "number" ||
            typeof item.id === "string") &&
          typeof item.nombre === "string"
      )
      .map((item) => {
        const base = productosIniciales.find(
          (producto) => producto.id === item.id
        );

        return {
          ...base,
          ...item,
          marca: item.marca || base?.marca || "Sin marca",
          tipo: item.tipo || base?.tipo || "Otros",
          precio: Number.isFinite(Number(item.precio))
            ? Math.max(0, Number(item.precio))
            : (base?.precio ?? 0),
          stock: Number.isFinite(Number(item.stock))
            ? Math.max(0, Math.trunc(Number(item.stock)))
            : (base?.stock ?? 0),
        };
      });
  } catch {
    return productosIniciales;
  }
}

function inventarioReducer(estado, accion) {
  switch (accion.type) {
    case "AGREGAR_PRODUCTO":
      return [...estado, accion.payload];

    case "CAMBIAR_STOCK":
      return estado.map((producto) =>
        producto.id === accion.payload.id
          ? {
              ...producto,
              stock: Math.max(
                0,
                producto.stock + accion.payload.cantidad
              ),
            }
          : producto
      );

    default:
      return estado;
  }
}

export default function InventarioProvider({ children }) {
  const [productos, dispatch] = useReducer(
    inventarioReducer,
    undefined,
    inicializarProductos
  );

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(productos)
    );
  }, [productos]);

  const agregarProducto = (nuevoProducto) => {
    dispatch({
      type: "AGREGAR_PRODUCTO",
      payload: {
        ...nuevoProducto,
        id: crypto.randomUUID(),
      },
    });
  };

  const cambiarStock = (id, cantidad) => {
    dispatch({
      type: "CAMBIAR_STOCK",
      payload: { id, cantidad },
    });
  };

  return (
    <InventarioContext.Provider
      value={{ productos, agregarProducto, cambiarStock }}
    >
      {children}
    </InventarioContext.Provider>
  );
}
