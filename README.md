# Adrian Ferrandis Portfolio (Astro)

Portfolio personal construido con Astro, i18n (ES/EN), modo claro/oscuro y deploy en Firebase Hosting.

## Requisitos

- Node.js 20+
- npm

## Comandos

- `npm install`: instala dependencias.
- `npm run dev`: arranca entorno local.
- `npm run build`: genera estáticos en `dist/`.
- `npm run preview`: preview local del build.
- `npm run check`: chequeo de Astro (requiere instalar `@astrojs/check` cuando se solicite).
- `npm run firebase:deploy`: build + deploy a Firebase Hosting.
- `npm run firebase:preview`: build + deploy a canal preview de Firebase Hosting.

## Firebase

La configuración de Firebase está en:

- `.firebaserc`
- `firebase.json`
- `.github/workflows/firebase-hosting-merge.yml`
- `.github/workflows/firebase-hosting-pull-request.yml`

El proyecto configurado por defecto es `ferrandis-me`.

## Variables/Secrets en GitHub

Para que funcionen los workflows de deploy, el repositorio necesita este secret:

- `FIREBASE_SERVICE_ACCOUNT_FERRANDIS_ME`

