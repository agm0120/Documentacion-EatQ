# EatQ — Documentación Web

Página de documentación y landing page del proyecto **EatQ**, una app móvil de análisis nutricional mediante IA.

---

## Requisitos previos

Antes de empezar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) `v18` o superior
- [npm](https://www.npmjs.com/) `v11` o superior
- [Angular CLI](https://angular.dev/tools/cli) `v21`

Puedes verificarlo con:

```bash
node -v
npm -v
ng version
```

Si no tienes Angular CLI instalado:

```bash
npm install -g @angular/cli
```

---

## Instalación

Clona el repositorio e instala las dependencias:

```bash
git clone <url-del-repositorio>
cd documentacion-proyecto
npm install
```

---

## Desplegar en local

```bash
npm start
```

La web se abrirá automáticamente en `http://localhost:4200`.

> Cualquier cambio que hagas en los archivos se recarga automáticamente en el navegador.

---

## Comandos disponibles

| Comando | Descripción |
|---|---|
| `npm start` | Inicia el servidor de desarrollo |
| `npm run build` | Genera la build de producción en `/dist` |
| `npm run watch` | Build en modo desarrollo con recarga automática |
| `npm test` | Ejecuta los tests unitarios |

---

## Estructura del proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/       # Barra de navegación + modo oscuro + progreso
│   │   ├── hero/         # Sección principal con logo y eslogan
│   │   ├── features/     # Funcionalidades de la app
│   │   ├── guia/         # Guía de uso paso a paso
│   │   └── faqs/         # Preguntas frecuentes (acordeón)
│   ├── services/
│   │   └── theme.service # Gestión de modo oscuro/claro
│   ├── app.ts            # Componente raíz
│   └── app.css           # Estilos globales del componente
├── styles.css            # Estilos globales (Tailwind + DaisyUI)
└── index.html
```

---

## Stack tecnológico

- **Angular 21** — Framework principal
- **Tailwind CSS 4** — Utilidades de estilos
- **DaisyUI 5** — Componentes UI
- **TypeScript 5.9**

---

## Notas

- El proyecto está en desarrollo activo. Los datos que aparecen en la web son provisionales.
- El modo oscuro/claro se guarda automáticamente en `localStorage`.
