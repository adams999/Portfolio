# Portfolio - Personal Developer Portfolio

Portfolio web profesional desarrollado con Next.js 16, React 19, TypeScript y Tailwind CSS 4. Incluye soporte multiidioma (español/inglés) y diseño responsive optimizado para todos los dispositivos.

## Tabla de Contenidos

- [Características](#características)
- [Stack Tecnológico](#stack-tecnológico)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Prerequisitos](#prerequisitos)
- [Instalación](#instalación)
- [Scripts Disponibles](#scripts-disponibles)
- [Configuración](#configuración)
- [Internacionalización (i18n)](#internacionalización-i18n)
- [Desarrollo](#desarrollo)
- [Build y Despliegue](#build-y-despliegue)
- [Arquitectura de Componentes](#arquitectura-de-componentes)
- [Calidad de Código](#calidad-de-código)

## Características

- **Diseño Responsive**: Adaptado para móviles, tablets y escritorio
- **Multiidioma**: Soporte para inglés y español con next-intl
- **Animaciones Profesionales**: Animaciones fluidas y dinámicas con GSAP
- **Elementos 3D Interactivos**: Gráficos WebGL con Three.js y OGL
- **Optimización de Rendimiento**: Server-side rendering y optimización de imágenes
- **TypeScript**: Tipado estático para mayor seguridad y mantenibilidad
- **Tailwind CSS 4**: Estilos modernos con la última versión
- **SEO Optimizado**: Metadata configurada para mejores resultados de búsqueda
- **Componentes Modulares**: Arquitectura escalable y reutilizable con CVA
- **Iconos con Lucide React**: Biblioteca de iconos moderna y ligera
- **Calidad de Código**: ESLint y Prettier configurados para mantener estándares

## Stack Tecnológico

### Core

- **[Next.js 16.0.3](https://nextjs.org/)** - Framework React con App Router
- **[React 19.2.0](https://react.dev/)** - Biblioteca UI de última generación
- **[TypeScript 5](https://www.typescriptlang.org/)** - Superset tipado de JavaScript

### Estilos

- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework de utilidades CSS
- **[clsx 2.1.1](https://github.com/lukeed/clsx)** - Utilidad para clases condicionales
- **[tailwind-merge 3.4.0](https://github.com/dcastil/tailwind-merge)** - Merge inteligente de clases Tailwind

### Internacionalización

- **[next-intl 4.5.5](https://next-intl-docs.vercel.app/)** - Solución i18n para Next.js

### UI Components & Animaciones

- **[lucide-react 0.554.0](https://lucide.dev/)** - Iconos SVG modernos
- **[GSAP 3.13.0](https://gsap.com/)** - Biblioteca de animaciones profesional
- **[Three.js 0.181.2](https://threejs.org/)** - Biblioteca 3D para WebGL
- **[OGL 1.0.11](https://github.com/oframe/ogl)** - Biblioteca WebGL ligera y rápida

### Utilidades de Estilos

- **[class-variance-authority 0.7.1](https://cva.style/docs)** - CVA para variantes de componentes

### Herramientas de Desarrollo

- **[ESLint 9](https://eslint.org/)** - Linter de código JavaScript/TypeScript
- **[Prettier 3.6.2](https://prettier.io/)** - Formateador de código
- **[PostCSS](https://postcss.org/)** - Procesador de CSS
- **[tw-animate-css 1.4.0](https://github.com/bentatum/tw-animate-css)** - Animaciones CSS para Tailwind

## Estructura del Proyecto

```
portfolio/
├── src/
│   ├── app/
│   │   └── [locale]/              # App Router con soporte i18n
│   │       ├── layout.tsx         # Layout principal
│   │       └── page.tsx           # Página de inicio
│   │
│   ├── components/
│   │   ├── layout/                # Componentes de layout
│   │   │   ├── Header.tsx         # Barra de navegación
│   │   │   ├── Footer.tsx         # Pie de página
│   │   │   ├── Section.tsx        # Wrapper de sección
│   │   │   └── LanguageToggle.tsx # Selector de idioma
│   │   │
│   │   └── sections/              # Secciones de la página
│   │       ├── about/             # Sección "Sobre mí"
│   │       ├── contact/           # Sección de contacto
│   │       ├── presentation/      # Sección hero/presentación
│   │       ├── projects/          # Sección de proyectos
│   │       └── skills/            # Sección de habilidades
│   │
│   ├── data/                      # Datos estáticos
│   │   ├── contact.ts             # Información de contacto
│   │   ├── projects.ts            # Datos de proyectos
│   │   ├── skills.ts              # Habilidades técnicas
│   │   └── topnav.ts              # Items de navegación
│   │
│   ├── i18n/                      # Configuración i18n
│   │   ├── config.ts              # Configuración de locales
│   │   ├── request.ts             # Request configuration
│   │   └── routing.ts             # Routing i18n
│   │
│   ├── lib/
│   │   └── utils.ts               # Utilidades (cn helper)
│   │
│   ├── types/                     # Definiciones TypeScript
│   │   ├── contact.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── topnav.ts
│   │
│   └── middleware.ts              # Middleware Next.js (i18n routing)
│
├── messages/                      # Traducciones
│   ├── en.json                    # Inglés
│   └── es.json                    # Español
│
├── public/                        # Archivos estáticos
│   ├── file.svg
│   ├── globe.svg
│   └── window.svg
│
├── eslint.config.mjs              # Configuración ESLint
├── next.config.ts                 # Configuración Next.js
├── postcss.config.mjs             # Configuración PostCSS
├── tailwind.config.ts             # Configuración Tailwind CSS
├── tsconfig.json                  # Configuración TypeScript
└── package.json                   # Dependencias y scripts
```

## Prerequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js**: versión 20.x o superior
- **npm**: versión 10.x o superior (incluido con Node.js)
- **Git**: para clonar el repositorio

## Instalación

1. **Clonar el repositorio**

```bash
git clone <repository-url>
cd portfolio
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Verificar instalación**

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo en http://localhost:3000

# Producción
npm run build        # Genera build optimizado para producción
npm run start        # Inicia servidor de producción (requiere build previo)

# Calidad de código
npm run lint         # Ejecuta ESLint para verificar el código
npm run lint:fix     # Ejecuta ESLint y corrige automáticamente los errores
npm run lint:strict  # Ejecuta ESLint sin permitir warnings (max-warnings 0)
npm run type-check   # Verifica tipos de TypeScript sin generar archivos

# Formateo de código
npm run format:check # Verifica el formato del código con Prettier
npm run format:write # Formatea automáticamente el código con Prettier
```

## Configuración

### TypeScript

El proyecto usa TypeScript con configuración estricta. Path aliases configurados:

```json
{
  "@/*": ["./src/*"]
}
```

Uso en imports:

```typescript
import { Component } from "@/components/Component";
import { utils } from "@/lib/utils";
```

### Tailwind CSS

Tailwind CSS 4 está configurado con PostCSS. Para personalizar:

- **Configuración**: Ver `tailwind.config.ts`
- **Estilos globales**: Ver `src/app/globals.css`

Utilidad `cn()` disponible en `src/lib/utils.ts` para merge de clases:

```typescript
import { cn } from "@/lib/utils";

const className = cn(
  "base-class",
  condition && "conditional-class",
  "more-classes"
);
```

### Next.js

Configuración en `next.config.ts`:

- **Plugin next-intl**: Integración automática de i18n
- **App Router**: Usando directorio `app/` con routing basado en archivos
- **Server Components**: Por defecto, usar `'use client'` solo cuando sea necesario

## Internacionalización (i18n)

### Idiomas Soportados

- **Inglés** (en) - Idioma por defecto
- **Español** (es)

### Estructura

```
messages/
├── en.json    # Traducciones en inglés
└── es.json    # Traducciones en español
```

### Configuración

Locales definidos en `src/i18n/config.ts`:

```typescript
export type Locale = "en" | "es";
export const locales: Locale[] = ["en", "es"];
export const defaultLocale: Locale = "en";
```

### Uso en Componentes

```typescript
import { useTranslations } from 'next-intl';

export default function Component() {
  const t = useTranslations('namespace');

  return <h1>{t('key')}</h1>;
}
```

### Routing

Las URLs incluyen el locale automáticamente:

- `/en` - Versión en inglés
- `/es` - Versión en español

El middleware en `src/middleware.ts` maneja el routing automáticamente.

### Agregar Nuevo Idioma

1. Agregar locale en `src/i18n/config.ts`
2. Crear archivo `messages/{locale}.json`
3. Agregar traducciones en el nuevo archivo

## Desarrollo

### Agregar Nueva Sección

1. **Crear componente de sección**

```typescript
// src/components/sections/nueva-seccion/NuevaSeccion.tsx
export default function NuevaSeccion() {
  return (
    <section>
      {/* Contenido */}
    </section>
  );
}
```

2. **Importar en página principal**

```typescript
// src/app/[locale]/page.tsx
import NuevaSeccion from '@/components/sections/nueva-seccion/NuevaSeccion';

export default function Home() {
  return (
    <>
      {/* Otras secciones */}
      <NuevaSeccion />
    </>
  );
}
```

3. **Agregar traducciones**

```json
// messages/en.json
{
  "nuevaSeccion": {
    "title": "New Section",
    "description": "Description"
  }
}
```

### Agregar Datos Estáticos

1. **Crear tipo en `src/types/`**

```typescript
// src/types/nuevo-dato.ts
export interface NuevoDato {
  id: string;
  titulo: string;
  descripcion: string;
}
```

2. **Crear archivo de datos en `src/data/`**

```typescript
// src/data/nuevo-dato.ts
import type { NuevoDato } from "@/types/nuevo-dato";

export const nuevosDatos: NuevoDato[] = [
  {
    id: "1",
    titulo: "Título",
    descripcion: "Descripción",
  },
];
```

### Componentes Client vs Server

Por defecto, todos los componentes son **Server Components**. Usar `'use client'` solo cuando se necesite:

- Event handlers (onClick, onChange, etc.)
- React hooks (useState, useEffect, etc.)
- Browser APIs
- Contextos de React

```typescript
"use client";

import { useState } from "react";

export default function ClientComponent() {
  const [state, setState] = useState(0);
  // ...
}
```

## Build y Despliegue

### Build Local

```bash
npm run build
npm run start
```

El build genera:

- `.next/` - Archivos optimizados de producción
- Optimización automática de imágenes
- Minificación de CSS y JavaScript
- Tree-shaking de dependencias no usadas

### Despliegue en Vercel (Recomendado)

1. **Conectar repositorio a Vercel**
   - Visita [vercel.com/new](https://vercel.com/new)
   - Importa tu repositorio Git

2. **Configuración automática**

   Vercel detecta Next.js automáticamente y configura:
   - Build command: `npm run build`
   - Output directory: `.next`
   - Install command: `npm install`

3. **Variables de entorno** (si es necesario)

   Configura en el dashboard de Vercel

4. **Deploy**

   Cada push a `main` despliega automáticamente

### Otras Plataformas

#### Netlify

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

#### Docker

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
RUN npm ci --only=production

EXPOSE 3000
CMD ["npm", "start"]
```

## Arquitectura de Componentes

### Principios de Diseño

1. **Componentes Pequeños y Reutilizables**: Cada componente tiene una responsabilidad única
2. **Composición sobre Herencia**: Los componentes se componen de otros componentes
3. **Props Tipadas**: Todas las props tienen tipos TypeScript definidos
4. **Server Components por Defecto**: Solo usar Client Components cuando sea necesario

### Jerarquía de Componentes

```
App
├── Layout
│   ├── Header
│   │   ├── Navigation
│   │   └── LanguageToggle
│   ├── Main Content
│   │   ├── PresentationSection
│   │   ├── AboutSection
│   │   ├── SkillsSection
│   │   ├── ProjectsSection
│   │   └── ContactSection
│   └── Footer
```

### Convenciones de Código

- **Nombres de archivos**: PascalCase para componentes (`Header.tsx`)
- **Nombres de carpetas**: kebab-case para secciones (`presentation-section/`)
- **Exports**: Default export para componentes principales
- **Imports**: Usar path aliases (`@/`) para imports absolutos

## Calidad de Código

### ESLint

Configuración en `eslint.config.mjs` con reglas de Next.js y Prettier.

**Ejecutar linter:**

```bash
npm run lint
```

**Auto-fix:**

```bash
npm run lint:fix
```

**Modo estricto (sin warnings):**

```bash
npm run lint:strict
```

### Prettier

Configuración en `.prettierrc` para formateo consistente.

**Verificar formato:**

```bash
npm run format:check
```

**Formatear código:**

```bash
npm run format:write
```

### TypeScript

Type checking estricto habilitado:

```bash
npm run type-check
# o directamente
npx tsc --noEmit
```

### Workflow Recomendado

Antes de hacer commit:

```bash
npm run format:write  # Formatear código
npm run lint:fix      # Corregir errores de linting
npm run type-check    # Verificar tipos
npm run build         # Verificar que el build funciona
```

### Mejores Prácticas

1. **Siempre definir tipos para props y estados**
2. **Usar hooks de forma apropiada** (solo en Client Components)
3. **Evitar lógica compleja en JSX** (extraer a funciones o componentes)
4. **Mantener componentes pequeños** (< 200 líneas)
5. **Usar Server Components cuando sea posible** (mejor rendimiento)
6. **Optimizar imágenes** (usar `next/image`)
7. **Formatear código antes de commit** (usar Prettier)
8. **Usar CVA para variantes de componentes** (mejor que clases condicionales complejas)

## Troubleshooting

### Error: Module not found

Verificar:

- Path aliases en `tsconfig.json`
- Imports correctos usando `@/`
- Archivos existen en las rutas especificadas

### Error: Hydration mismatch

Causas comunes:

- HTML diferente entre servidor y cliente
- Usar `window` o `document` en Server Components
- Extensiones de navegador modificando el DOM

Solución: Usar `'use client'` y hooks de React apropiadamente

### Build falla

1. Limpiar cache: `rm -rf .next`
2. Reinstalar dependencias: `rm -rf node_modules && npm install`
3. Verificar errores de TypeScript: `npx tsc --noEmit`

## Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto es privado y está destinado para uso personal.

## Contacto

Para más información sobre el proyecto, consulta la sección de contacto en el portfolio.

---

**Versión Node.js requerida:** 20.x o superior  
**Última actualización:** 20 de Noviembre, 2025  
**Framework:** Next.js 16.0.3  
**React:** 19.2.0
