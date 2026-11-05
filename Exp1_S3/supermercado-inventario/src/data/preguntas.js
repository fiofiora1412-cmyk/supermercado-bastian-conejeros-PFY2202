
export const preguntasFrecuentes = [
  {
    id: "consultar-productos",
    pregunta: "¿Cómo puedo consultar los productos disponibles?",
    respuesta:
      "Ingresa a la sección Inventario para visualizar las tarjetas de los productos. Cada tarjeta muestra el nombre, la marca, el tipo de artículo, su precio en pesos chilenos y las unidades disponibles.",
  },
  {
    id: "tabla-inventario",
    pregunta: "¿Dónde puedo revisar el inventario completo?",
    respuesta:
      "En el menú de administración selecciona Tabla de inventario. Encontrarás un listado con todos los artículos registrados, su categoría, marca, precio, stock y estado de disponibilidad.",
  },
  {
    id: "registrar-articulo",
    pregunta: "¿Cómo se registra un nuevo artículo?",
    respuesta:
      "Selecciona Registrar artículo en el menú de administración. Completa el nombre, marca, tipo de producto, precio y stock inicial. Al guardar, el artículo se incorpora al inventario y aparece en la tabla.",
  },
  {
    id: "campos-obligatorios",
    pregunta: "¿Qué información debo ingresar al registrar un artículo?",
    respuesta:
      "Todos los campos del formulario son obligatorios. El precio debe ser un número válido no negativo y el stock debe corresponder a una cantidad entera igual o superior a cero.",
  },
  {
    id: "cambiar-stock",
    pregunta: "¿Cómo puedo actualizar las existencias de un producto?",
    respuesta:
      "Desde la página Inventario utiliza los botones Aumentar y Disminuir de cada tarjeta. La aplicación actualiza el estado compartido y el nuevo stock se refleja también en la tabla de artículos.",
  },
  {
    id: "sin-stock",
    pregunta: "¿Qué ocurre cuando un producto se queda sin stock?",
    respuesta:
      "El inventario indica que el producto está agotado. El botón para disminuir existencias queda deshabilitado y no se permiten cantidades negativas.",
  },
  {
    id: "guardar-datos",
    pregunta: "¿Los productos se conservan al cerrar el navegador?",
    respuesta:
      "Sí. Los artículos y sus existencias se guardan mediante localStorage. Al volver a abrir el sitio con el mismo navegador y perfil, la aplicación intenta recuperar la información almacenada.",
  },
  {
    id: "otros-dispositivos",
    pregunta: "¿Puedo consultar los mismos datos desde otro computador?",
    respuesta:
      "Por ahora no. Esta versión académica utiliza almacenamiento local, por lo que los datos no se sincronizan entre dispositivos ni se guardan en un servidor remoto.",
  },
  {
    id: "compras-online",
    pregunta: "¿Puedo comprar productos directamente desde el sitio?",
    respuesta:
      "Esta versión de SuperMarket está enfocada en la administración del inventario. No dispone de carrito de compras, pagos en línea ni procesamiento de pedidos.",
  },
  {
    id: "precios",
    pregunta: "¿En qué moneda aparecen los precios?",
    respuesta:
      "Los valores se muestran en pesos chilenos (CLP). Los precios y artículos forman parte de un proyecto académico y no constituyen una oferta comercial real.",
  },
];
