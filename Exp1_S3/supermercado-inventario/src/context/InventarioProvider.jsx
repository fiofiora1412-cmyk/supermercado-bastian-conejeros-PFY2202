
import { useEffect, useReducer } from "react";
import { InventarioContext } from "./InventarioContext";
import { productosIniciales } from "../data/productosIniciales";

const STORAGE_KEY = "supermarket-exp1-s3";
const STORAGE_KEY_ANTERIOR = "supermarket-productos";

function normalizarProductos(datos) {
  if (!Array.isArray(datos)) return productosIniciales;

  return datos
    .filter(
      (item) =>
        item &&
        (typeof item.id === "number" ||
          typeof item.id === "string") &&
        typeof item.nombre === "string" &&
        item.nombre.trim()
    )
    .map((item) => {
      const original = productosIniciales.find(
        (producto) => producto.id === item.id
      );

      const precio = Number(item.precio);
      const stock = Number(item.stock);

      return {
        ...original,
        ...item,
        nombre: item.nombre.trim(),
        marca: item.marca || original?.marca || "Sin marca",
        tipo: item.tipo || original?.tipo || "Otros",
        precio: Number.isFinite(precio)
          ? Math.max(0, precio)
          : (original?.precio ?? 0),
        stock: Number.isFinite(stock)
          ? Math.max(0, Math.trunc(stock))
          : (original?.stock ?? 0),
      };
    });
}

function inicializarEstado() {
  try {
    const guardado = localStorage.getItem(STORAGE_KEY);

    if (guardado) {
      const datos = JSON.parse(guardado);

      if (
        Array.isArray(datos.productos) &&
        Array.isArray(datos.carrito)
      ) {
        const productos = normalizarProductos(datos.productos);

        const carrito = datos.carrito.filter(
          (item) =>
            item &&
            Number.isSafeInteger(item.cantidad) &&
            item.cantidad > 0 &&
            productos.some((producto) => producto.id === item.id)
        );

        return { productos, carrito };
      }
    }

    // Copiar los datos de la Semana 2 solo la primera vez
    const anteriores = localStorage.getItem(STORAGE_KEY_ANTERIOR);

    return {
      productos: anteriores
        ? normalizarProductos(JSON.parse(anteriores))
        : productosIniciales,
      carrito: [],
    };
  } catch {
    return {
      productos: productosIniciales,
      carrito: [],
    };
  }
}

function inventarioReducer(estado, accion) {
  switch (accion.type) {
    case "AGREGAR_PRODUCTO":
      return {
        ...estado,
        productos: [...estado.productos, accion.payload],
      };

    case "CAMBIAR_STOCK": {
      const { id, cantidad } = accion.payload;

      if (!Number.isSafeInteger(cantidad)) return estado;

      return {
        ...estado,
        productos: estado.productos.map((producto) =>
          producto.id === id
            ? {
                ...producto,
                stock: Math.max(0, producto.stock + cantidad),
              }
            : producto
        ),
      };
    }

    case "AGREGAR_AL_CARRITO": {
      const { id } = accion.payload;

      const producto = estado.productos.find(
        (item) => item.id === id
      );

      if (!producto || producto.stock < 1) {
        return estado;
      }

      const existe = estado.carrito.some(
        (item) => item.id === id
      );

      const carrito = existe
        ? estado.carrito.map((item) =>
            item.id === id
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          )
        : [...estado.carrito, { id, cantidad: 1 }];

      return {
        productos: estado.productos.map((item) =>
          item.id === id
            ? { ...item, stock: item.stock - 1 }
            : item
        ),
        carrito,
      };
    }

    case "DISMINUIR_CARRITO": {
      const { id } = accion.payload;

      const articulo = estado.carrito.find(
        (item) => item.id === id
      );

      if (!articulo) return estado;

      return {
        productos: estado.productos.map((producto) =>
          producto.id === id
            ? { ...producto, stock: producto.stock + 1 }
            : producto
        ),
        carrito: estado.carrito
          .map((item) =>
            item.id === id
              ? { ...item, cantidad: item.cantidad - 1 }
              : item
          )
          .filter((item) => item.cantidad > 0),
      };
    }

    case "QUITAR_DEL_CARRITO": {
      const { id } = accion.payload;

      const articulo = estado.carrito.find(
        (item) => item.id === id
      );

      if (!articulo) return estado;

      return {
        productos: estado.productos.map((producto) =>
          producto.id === id
            ? {
                ...producto,
                stock: producto.stock + articulo.cantidad,
              }
            : producto
        ),
        carrito: estado.carrito.filter(
          (item) => item.id !== id
        ),
      };
    }

    default:
      return estado;
  }
}

export default function InventarioProvider({ children }) {
  const [estado, dispatch] = useReducer(
    inventarioReducer,
    undefined,
    inicializarEstado
  );

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
    } catch {
      console.warn("No se pudo guardar el inventario localmente.");
    }
  }, [estado]);

  const agregarProducto = (producto) => {
    dispatch({
      type: "AGREGAR_PRODUCTO",
      payload: {
        ...producto,
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

  const agregarAlCarrito = (id) => {
    dispatch({
      type: "AGREGAR_AL_CARRITO",
      payload: { id },
    });
  };

  const disminuirCarrito = (id) => {
    dispatch({
      type: "DISMINUIR_CARRITO",
      payload: { id },
    });
  };

  const quitarDelCarrito = (id) => {
    dispatch({
      type: "QUITAR_DEL_CARRITO",
      payload: { id },
    });
  };

  return (
    <InventarioContext.Provider
      value={{
        productos: estado.productos,
        carrito: estado.carrito,
        agregarProducto,
        cambiarStock,
        agregarAlCarrito,
        disminuirCarrito,
        quitarDelCarrito,
      }}
    >
      {children}
    </InventarioContext.Provider>
  );
}
