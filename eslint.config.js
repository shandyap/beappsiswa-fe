import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginImport from 'eslint-plugin-import';
import pluginJSXA11y from 'eslint-plugin-jsx-a11y';
import airbnb from 'eslint-config-airbnb';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [
  ...compat.extends('airbnb'),
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: js.configs.recommended.languageOptions.globals,
    },
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      import: pluginImport,
      'jsx-a11y': pluginJSXA11y,
    },
    rules: {
      // override jika perlu
      'react/react-in-jsx-scope': 'off', // karena tidak dibutuhkan di React 17+
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    },
  },
];
