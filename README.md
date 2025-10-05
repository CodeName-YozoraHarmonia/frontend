# 🛒 e-comerce - Frontend

Bienvenido al frontend del proyecto **e-comerce**_(nombre provisional)_, una tienda online moderna construida con tecnologías de vanguardia para ofrecer la mejor experiencia de usuario.

---

## 🚀 Tecnologías Principales

| Tecnología                                        | Versión | Descripción                                    |
| ------------------------------------------------- | ------- | ---------------------------------------------- |
| [Next.js](https://nextjs.org/)                    | 15.x    | Framework React para SSR y SSG (App Router)    |
| [React](https://react.dev/)                       | 19.x    | Librería para interfaces de usuario            |
| [TypeScript](https://www.typescriptlang.org/)     | 5.x     | Tipado estático para JavaScript                |
| [Material UI](https://mui.com/)                   | 5.x     | Componentes UI modernos y personalizables      |
| [Tailwind CSS](https://tailwindcss.com/)          | 4.x     | Utilidades CSS para diseño rápido y responsivo |
| [Embla Carousel](https://www.embla-carousel.com/) | 8.x     | Carrusel ligero y flexible para React          |
| [eslint](https://eslint.org/)                     | 8.x     | Linter para mantener calidad de código         |
| [prettier](https://prettier.io/)                  | 3.x     | Formateador de código consistente              |

---

## 📁 Estructura del Proyecto

```
src/
├─ app/                # Rutas y páginas (Next.js App Router)
├─ components/         # Componentes reutilizables
├─ hooks/              # Custom React hooks
├─ theme.ts            # Configuración de tema (Material UI + Tailwind)
├─ utils/              # Funciones utilitarias
└─ styles/             # Archivos de estilos globales
```

---

## 🌐 Rutas Disponibles

- `/faq` — Preguntas frecuentes _(Client Component)_
- `/regret` — Página de arrepentimiento/gestión _(Server Component)_
- `/contact` — Contacto _(Server Component)_
- `/checkout` — Checkout _(Client Component)_
  - `/checkout/success` — Éxito de compra _(Client Component)_
- `/privacy` — Política de privacidad _(Server Component)_
- `/terms-conditions` — Términos y condiciones _(Server Component)_
- `/products` — Listado de productos _(Server Component)_
  - `/products/[slug]` — Detalle de producto _(Client Component)_

---

## 📦 Scripts Útiles

- `npm run dev` — Inicia el servidor de desarrollo
- `npm run build` — Compila el proyecto para producción
- `npm run start` — Ejecuta la app en modo producción

---

## 📊 Estado Actual

- 🛠️ Proyecto en fase de **maquetación**.
- Todas las páginas están estructuradas.
- **Lógica de negocio y conexión con API** pendiente.
- Diseño basado en **Material UI** + **TailwindCSS**.
- Carrusel de productos implementado con **Embla Carousel**.

---

## ⏭️ Próximos Pasos

1. Integrar **API de productos y carrito**.
2. Implementar **checkout funcional**.
3. Finalizar **estilos y componentes reutilizables**.
4. Configurar **autenticación de usuario**.
5. Mejorar la accesibilidad y SEO.

---

## 📝 Notas

- El proyecto está diseñado para escalar y adaptarse a un **e-commerce moderno**.
- Se utiliza el **App Router de Next.js** para optimizar SSR y Client Components donde corresponde.
- Se recomienda seguir las [buenas prácticas de Next.js](https://nextjs.org/docs) y [Material UI](https://mui.com/material-ui/getting-started/best-practices/).

---

## ℹ️ Información Adicional

- **Nombre del proyecto:** e-comerce _(nombre provisional)_
- **Copyright:** © 2025 Andrés Yozora. Todos los derechos reservados.
- **Uso del proyecto:** Este proyecto solo puede ser utilizado con permiso explícito del desarrollador.

---

## 📜 Historial de Versiones

### 0.1.0-alpha.0

- Proyecto inicial en fase de maquetación
- Estructura de páginas creada
- Estructura de navegacion basica creada
- Estado de Login, Carrito y Wishlist simulado
- Checkout simulado
- Diseño basado en Material UI + TailwindCSS

---
