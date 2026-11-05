
# SuperMarket Inventario

## Desarrollo Frontend II — PFY2202
### Experiencia 1 · Semana 3 · Evaluación sumativa

**Estudiante:** Bastián Conejeros  
**Institución:** Duoc UC

## Descripción

SuperMarket es una aplicación web de gestión de inventario de un supermercado, desarrollada con React, Vite, React Router y Tailwind CSS.

El proyecto continúa el trabajo de las semanas 1 y 2, incorporando en esta tercera etapa un filtro dinámico por categoría, páginas individuales de detalle y un carrito de compras sincronizado con el inventario.

## Tecnologías utilizadas

- React
- JavaScript y JSX
- Vite
- React Router DOM
- Context API y useReducer
- Hooks de React
- Tailwind CSS 4
- localStorage
- ESLint
- Git y GitHub
- GitHub Pages

## Funcionalidades

### Inventario

- Visualización de productos mediante tarjetas.
- Listado completo de artículos en una tabla.
- Información de nombre, marca, categoría, precio y stock.
- Registro de nuevos artículos con validaciones.
- Control de existencias sin permitir cantidades negativas.
- Indicadores de unidades, artículos y valor del inventario.

### Filtros y búsqueda

- Búsqueda por nombre, marca o categoría.
- Filtro dinámico por categoría.
- Combinación de búsqueda y filtro.
- Conservación de los productos originales al filtrar.

### Detalle de artículos

- Ruta dinámica para consultar cada artículo.
- Visualización de sus datos y disponibilidad.
- Incorporación de productos al carrito.
- Descuento automático de unidades disponibles.

### Carrito de compras

- Listado de artículos seleccionados.
- Aumento y disminución de cantidades.
- Actualización sincronizada del inventario.
- Eliminación de artículos con devolución de existencias.
- Cálculo de subtotales y total de la compra.
- Bloqueo de cantidades superiores al stock disponible.

### Otras funcionalidades

- Persistencia mediante localStorage.
- Páginas Quiénes somos y Preguntas frecuentes.
- Navegación SPA.
- Página 404 para rutas inexistentes.
- Diseño responsive con Tailwind CSS.
- Componentes reutilizables.

## Instalación y ejecución

### Requisitos

- Node.js
- npm

Desde la carpeta del proyecto:

```bash
npm ci
npm run dev
```

Abrir en el navegador la dirección local indicada por Vite.

## Comprobaciones de calidad

```bash
npm run lint
npm run build
```

## Rutas principales

| Ruta | Funcionalidad |
| --- | --- |
| `/` | Inventario principal |
| `/registrar` | Registro de artículos |
| `/articulos` | Tabla de inventario |
| `/articulos/:id` | Detalle de un artículo |
| `/carrito` | Carrito de compras |
| `/nosotros` | Quiénes somos |
| `/preguntas` | Preguntas frecuentes |
| `*` | Página no encontrada |

En la versión publicada con HashRouter, las rutas internas se muestran utilizando `#/`, por ejemplo `/#/carrito`.

## Arquitectura

La aplicación utiliza Context API y useReducer para compartir y modificar el estado del inventario y del carrito.

Las operaciones del carrito actualizan simultáneamente las cantidades seleccionadas y el stock disponible.

La información se almacena en localStorage y se recupera al recargar la aplicación.

### Organización del código

- `src/components/`: componentes reutilizables.
- `src/context/`: estado global y lógica del inventario.
- `src/data/`: datos y configuración de navegación.
- `src/hooks/`: hooks personalizados.
- `src/pages/`: vistas de la aplicación.
- `src/utils/`: funciones auxiliares.

## Pruebas funcionales

Se contempla comprobar:

1. Filtrar artículos por categoría sin perder registros.
2. Combinar búsqueda y filtro.
3. Abrir el detalle de un producto.
4. Agregar productos al carrito.
5. Aumentar y disminuir cantidades.
6. Verificar el descuento y devolución del stock.
7. Impedir agregar cantidades superiores al inventario.
8. Retirar artículos del carrito.
9. Recargar el navegador y comprobar la persistencia.
10. Verificar navegación y diseño responsive.

## Repositorio

https://github.com/fiofiora1412-cmyk/supermercado-bastian-conejeros-PFY2202

## Despliegue

El proyecto de la Semana 3 se publica mediante GitHub Actions y GitHub Pages.

https://fiofiora1412-cmyk.github.io/supermercado-bastian-conejeros-PFY2202/

## Continuidad académica

- **Semana 1:** React Router, páginas informativas y control de inventario.
- **Semana 2:** Context API, useReducer, registro de artículos, tabla y Tailwind CSS.
- **Semana 3:** filtros por categoría, rutas dinámicas, detalle de artículos y carrito sincronizado.


Proyecto desarrollado con fines académicos para Desarrollo Frontend II, Duoc UC.
