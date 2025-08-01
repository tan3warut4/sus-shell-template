// eslint.config.js
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintRecommended from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  // A base configuration for all files and global settings
  {
    // Ignore files that should not be linted
    ignores: ['dist', 'node_modules'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
  },

  // 1. Core ESLint Recommended Rules
  // This provides a base set of rules for JavaScript and TypeScript.
  eslintRecommended.configs.recommended,

  // 2. Configurations for TypeScript files
  // These are the recommended and stylistic rules from typescript-eslint.
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  {
    // Configure the TypeScript parser for all .ts, .tsx, .js, and .jsx files
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        // To enable type-aware linting, uncomment this line and ensure a tsconfig.json exists.
        // project: './tsconfig.json',
      },
    },
  },

  // 3. Configurations for React and Accessibility
  // This section applies only to files that contain React components.
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      'jsx-a11y': eslintPluginJsxA11y,
    },
    rules: {
      // These rules are loaded from the recommended configs of the plugins
      ...eslintPluginReact.configs.recommended.rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      ...eslintPluginJsxA11y.configs.recommended.rules,

      // These rules are for the old JSX transform and are no longer needed
      // with modern bundlers that automatically import JSX runtime.
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the installed React version
      },
    },
  },

  // 4. Prettier Integration
  // This must be the last configuration in the array to ensure it overrides other configs.
  // It disables all ESLint rules that conflict with Prettier and adds the Prettier formatting rule.
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      // Disable rules that conflict with Prettier
      ...prettierConfig.rules,
      // Add the prettier rule to report formatting errors
      'prettier/prettier': 'error',
    },
  },
];
