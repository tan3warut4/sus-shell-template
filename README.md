# Sustaina Host App

This repository contains the shell application for the **Sustaina** platform. It integrates multiple micro frontends using **Webpack Module Federation** and provides the main layout and routing for the platform.

## Features

- **React 18** with TypeScript
- **Webpack 5** configuration with Module Federation
- **Tailwind CSS** and **DaisyUI** for styling
- **React Router** for client side routing
- Development server on port `3000`

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Start the development server**
   ```bash
   npm run dev
   ```
   Ensure that your remote micro frontends are running so that module federation can load them.

## Linting

Run ESLint on the source directory:

```bash
npm run lint
```

## Building for Production

To create a production build, run:

```bash
npm run build
```

This outputs the compiled assets into the `dist` directory. Serve the contents of this folder with a static web server of your choice.

## Module Federation

Remote modules can be declared in `webpack.config.cjs` under the `remotes` section. Example:

```js
new ModuleFederationPlugin({
  name: 'host',
  remotes: {
    masterdata: 'susta_mfe_masterdata@http://localhost:3001/remoteEntry.js'
  },
});
```

A remote page can then be imported using `React.lazy`:

```tsx
const CollectionPeriodPage = React.lazy(() => import('masterdata/CollectionPeriodPage'));
```

## Directory Structure

```
public/          # Static files and index.html
src/
  components/    # Layout, navigation, etc.
  routes/        # Route definitions
  styles/        # Tailwind and DaisyUI setup
  types/         # Shared type declarations
  App.tsx        # Root component
  main.tsx       # Entry point
webpack.config.cjs
postcss.config.mjs
tailwind.config.mjs
```

## License

MIT © 2025 Sustaina
