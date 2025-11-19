# Guía de Linting - Next.js 16 Portfolio

## Descripción General

Este proyecto utiliza una configuración completa de ESLint optimizada para Next.js 16, React 19 y TypeScript, siguiendo las mejores prácticas recomendadas por Vercel y la comunidad.

## Configuración de ESLint

### Plugins Incluidos

- **eslint-config-next/core-web-vitals**: Reglas de Next.js enfocadas en Core Web Vitals
- **eslint-config-next/typescript**: Reglas específicas para TypeScript en Next.js
- **eslint-config-prettier**: Integración con Prettier para evitar conflictos

### Categorías de Reglas

#### 1. Reglas de React (Best Practices)
- `react/jsx-no-target-blank`: Previene vulnerabilidades de seguridad con enlaces externos
- `react/jsx-key`: Requiere keys en elementos de listas
- `react/jsx-no-duplicate-props`: Evita props duplicadas
- `react/no-children-prop`: Previene el uso incorrecto de children como prop
- `react/self-closing-comp`: Fuerza el uso de auto-cierre para componentes sin children

#### 2. Reglas de React Hooks
- `react-hooks/rules-of-hooks`: Asegura el uso correcto de Hooks
- `react-hooks/exhaustive-deps`: Advierte sobre dependencias faltantes en useEffect

#### 3. Reglas Específicas de Next.js
- `@next/next/no-html-link-for-pages`: Requiere usar Link de Next.js
- `@next/next/no-img-element`: Requiere usar Image de next/image
- `@next/next/no-sync-scripts`: Previene scripts síncronos que bloquean el rendering
- `@next/next/no-head-element`: Requiere usar Head de next/head

#### 4. Reglas de TypeScript
- `@typescript-eslint/no-unused-vars`: Advierte sobre variables no utilizadas
- `@typescript-eslint/no-explicit-any`: Desalienta el uso de `any`
- `@typescript-eslint/consistent-type-imports`: Fuerza el uso de `import type`
- `@typescript-eslint/no-non-null-assertion`: Advierte sobre el uso de `!`

#### 5. Reglas Generales de JavaScript/TypeScript
- `no-console`: Solo permite `console.warn` y `console.error`
- `no-var`: Requiere usar `let` o `const`
- `prefer-const`: Sugiere usar `const` cuando sea posible
- `prefer-template`: Sugiere usar template strings
- `eqeqeq`: Requiere comparaciones estrictas (`===`)

#### 6. Reglas de Accesibilidad (a11y)
- `jsx-a11y/alt-text`: Requiere texto alternativo en imágenes
- `jsx-a11y/anchor-is-valid`: Valida el uso correcto de enlaces
- `jsx-a11y/html-has-lang`: Requiere atributo lang en HTML
- `jsx-a11y/iframe-has-title`: Requiere títulos en iframes

## Comandos Disponibles

### Linting
```bash
# Ejecutar linter
npm run lint

# Ejecutar linter y auto-corregir problemas
npm run lint:fix

# Ejecutar linter en modo estricto (sin warnings)
npm run lint:strict
```

### Type Checking
```bash
# Verificar tipos de TypeScript
npm run type-check
```

### Formateo con Prettier
```bash
# Verificar formato de código
npm run format:check

# Formatear código automáticamente
npm run format:write
```

## Integración con Git Hooks

Se recomienda usar **husky** y **lint-staged** para ejecutar linting automático antes de commits:

### Instalación
```bash
npm install -D husky lint-staged
npx husky init
```

### Configuración de lint-staged

Crea un archivo `.lintstagedrc.js`:

```javascript
const path = require('path')

const buildEslintCommand = (filenames) =>
  `eslint --fix ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' ')}`

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '*.{js,jsx,ts,tsx,json,css,md}': ['prettier --write'],
}
```

### Configuración de Husky

Edita `.husky/pre-commit`:

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```

## Configuración de Editor

### VS Code

Crea o actualiza `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

### Extensiones Recomendadas para VS Code
- ESLint (dbaeumer.vscode-eslint)
- Prettier (esbenp.prettier-vscode)
- Tailwind CSS IntelliSense (bradlc.vscode-tailwindcss)

## Archivos de Configuración

### eslint.config.mjs
Archivo principal de configuración de ESLint con todas las reglas.

### .prettierrc
Configuración de formato de código:
- Semi-colons: Sí
- Comillas: Dobles
- Tab width: 2 espacios
- Print width: 80 caracteres

### tsconfig.json
Configuración de TypeScript con modo estricto habilitado.

## Buenas Prácticas

1. **Ejecuta el linter antes de hacer commit**: `npm run lint`
2. **Usa type checking regularmente**: `npm run type-check`
3. **Mantén el código formateado**: `npm run format:write`
4. **No ignores warnings sin justificación**: Los warnings están ahí por una razón
5. **Usa `import type` para importaciones de tipos**: Mejora el tree-shaking
6. **Evita `any`**: Usa tipos específicos o `unknown` cuando sea necesario
7. **Prefiere `const` sobre `let`**: Inmutabilidad por defecto

## CI/CD

Se recomienda agregar estos comandos a tu pipeline de CI/CD:

```yaml
# GitHub Actions ejemplo
- name: Run linting
  run: npm run lint:strict

- name: Run type checking
  run: npm run type-check

- name: Check formatting
  run: npm run format:check
```

## Problemas Comunes

### "Cannot find module" en archivos .next/
Estos archivos son generados automáticamente. Ya están excluidos del type checking.

### Conflictos entre ESLint y Prettier
Ya están configurados para trabajar juntos con `eslint-config-prettier`.

### Warnings de unused variables
Puedes prefijar variables no utilizadas con `_` para suprimirlos: `const _unused = value`

## Actualizaciones

Para mantener las reglas actualizadas:

```bash
npm update eslint eslint-config-next @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

## Recursos Adicionales

- [Next.js ESLint Documentation](https://nextjs.org/docs/app/api-reference/config/eslint)
- [TypeScript ESLint](https://typescript-eslint.io/)
- [Prettier Documentation](https://prettier.io/docs/en/)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [jsx-a11y Rules](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
