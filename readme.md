# Sustaina Host App

This is the **host application** for the **Sustaina platform**, responsible for integrating multiple Micro Frontends (MFEs) such as `masterdata`, `analytics`, etc., via **Webpack Module Federation**. Built with **React**, **TypeScript**, **Tailwind CSS**, and **DaisyUI**.

---

## 📦 Tech Stack

- **React 18** with TypeScript
- **Webpack 5** with Module Federation
- **Tailwind CSS** with DaisyUI
- **React Router v6**
- **Microfrontend Integration**
- **Local Development on Port `3000`**

---

## 📁 Folder Structure

```
sustaina-host-app/
├── public/                     # Static files (index.html)
├── src/
│   ├── components/             # Reusable UI (Layout, Sidebar, etc.)
│   ├── pages/                  # Host-owned pages
│   ├── routes/                 # Route definitions
│   ├── styles/                 # Tailwind & global styles
│   ├── types/                  # Module Federation declarations
│   ├── App.tsx                 # Main app layout
│   ├── main.tsx                # Entry point
├── webpack.config.js           # Webpack + Module Federation setup
├── postcss.config.js           # PostCSS config
├── tailwind.config.js          # Tailwind + DaisyUI config
├── .env.development            # Env variables (optional)
└── README.md
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the Host App

```bash
npm run dev
```

Make sure all remote MFEs (e.g., `susta_mfe_masterdata`) are running too.

---

## 🌐 Remote MFEs

This host app expects remote MFEs configured with **Webpack Module Federation**. Example config in `webpack.config.js`:

```js
remotes: {
  masterdata: 'susta_mfe_masterdata@http://localhost:3001/remoteEntry.js'
}
```

To import a remote page:

```tsx
const CollectionPeriodPage = React.lazy(() => import('masterdata/CollectionPeriodPage'))
```

---

## 🎨 Styling & UI

- **Tailwind CSS**: Utility-first styling.
- **DaisyUI**: Pre-built component design system.

Add DaisyUI components directly using Tailwind classes.

```bash
npm install -D tailwindcss postcss autoprefixer
npm install daisyui
```

Enable in `tailwind.config.js`:

```js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {} },
  plugins: [require('daisyui')],
};
```

---

## 📌 Notes

- This is a **shell application**; it owns layout, navigation, routing, and styling.
- It does **not** contain domain logic; all functionality comes from remote MFEs.
- Each MFE must expose components correctly and share compatible React versions.

---

## 🧪 Future Improvements

- Add CI/CD pipeline (GitLab)
- Add loading/error boundaries per route
- Add runtime config for dynamic remote loading
- Add unit tests with Vitest or Jest
- Add production-ready `webpack.prod.js` split

--- 

## 🧠 Authors

- Project Lead: Warut Wattanakijrungroj
- Part of **Sustaina Enterprise System**

---

## 📄 License

MIT — © 2025 Sustaina
