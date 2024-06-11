module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'no-console': 'error', // Disallow console logs
    semi: ['error', 'always'], // Enforce semi-colons
    quotes: ['error', 'single'], // Enforce single quotes
    indent: ['error', 2], // Enforce 2-space indentation
    'comma-spacing': 'error', // Enforce spacing after commas
    'comma-style': 'error', // Enforce comma placement style
    'object-curly-spacing': ['error', 'always'], // Enforce spacing in object literals
    // 'array-bracket-spacing': ['error', 'always'], // Enforce spacing in array literals
    'key-spacing': 'error', // Enforce spacing in object literals keys
    'keyword-spacing': 'error', // Enforce spacing around keywords
    'space-before-blocks': 'error', // Enforce spacing before blocks
    'space-before-function-paren': ['error', 'never'], // Enforce spacing before function parentheses
    'space-in-parens': 'error', // Enforce spacing in parentheses
    'arrow-spacing': 'error', // Enforce spacing around arrow functions
    // 'object-curly-newline': ['error', { multiline: true }], // Enforce new line in object literals
    'array-bracket-newline': ['error', { multiline: true }], // Enforce new line in array literals
    '@typescript-eslint/no-explicit-any': 'off', // Allow explicit 'any' types
  },
};
