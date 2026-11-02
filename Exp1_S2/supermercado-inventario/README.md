
# SuperMarket Inventario

## Desarrollo Frontend II — PFY2202
**Experiencia 1, Semana 2 — Evaluación Formativa 2**

**Estudiante:** Bastián Conejeros

### Descripción

Aplicación web desarrollada con React para gestionar el inventario de un supermercado. Esta versión continúa el proyecto de la Semana 1 e incorpora gestión de estado global, registro de artículos, tabla de inventario y Tailwind CSS.

## Tecnologías

- React y Vite
- JavaScript y JSX
- React Router DOM
- Context API y useReducer
- Tailwind CSS
- localStorage
- ESLint
- Git y GitHub

## Funcionalidades

- Navegación SPA mediante React Router.
- Página principal con tarjetas de productos.
- Registro de nuevos artículos mediante formulario.
- Campos de nombre, marca, tipo, precio y stock.
- Validación de campos obligatorios y valores numéricos.
- Tabla con todos los artículos registrados.
- Búsqueda por nombre, marca o categoría.
- Indicadores de artículos, unidades y valor del inventario.
- Actualización de stock sin permitir cantidades negativas.
- Estado global compartido entre las páginas.
- Persistencia de información en localStorage.
- Páginas Quiénes somos y Preguntas frecuentes.
- Gestión de rutas inexistentes mediante página 404.
- Diseño adaptable utilizando Tailwind CSS.

## Instalación

Requisitos: Node.js y npm.

Desde la carpeta del proyecto:

```bash
npm ci
npm run dev
```

Abrir la dirección local indicada por Vite.

## Verificación

```bash
npm run lint
npm run build
```

## Rutas

| Ruta | Descripción |
| --- | --- |
| `/` | Inventario principal |
| `/registrar` | Formulario de registro |
| `/articulos` | Tabla de inventario |
| `/nosotros` | Información del supermercado |
| `/preguntas` | Preguntas frecuentes |
| Cualquier otra ruta | Página 404 |

## Gestión de estado

El inventario utiliza Context API y useReducer para compartir y actualizar la lista de productos.

Las modificaciones se guardan en localStorage, por lo que persisten al actualizar la página en el mismo navegador.

No se utiliza una base de datos remota. La información no se sincroniza entre dispositivos.

## Organización del proyecto

- `src/components/`: componentes reutilizables.
- `src/context/`: proveedor y contexto del inventario.
- `src/data/`: productos iniciales y datos compartidos.
- `src/hooks/`: hooks personalizados.
- `src/pages/`: páginas de la aplicación.
- `src/utils/`: funciones auxiliares.

## Continuidad del proyecto

- **Semana 1:** inventario, control de stock y tres páginas con React Router.
- **Semana 2:** estado global, registro de artículos, tabla, framework CSS y mejoras de arquitectura.

Proyecto desarrollado con fines académicos para Duoc UC.
