export default [
  {
    files: ['src/**/*.{ts,js}'],
    ignores: ['node_modules/**', 'dist/**'], // Ignore node_modules and dist
    languageOptions: {
      parser: '@typescript-eslint/parser',
    },
    plugins: {
      '@typescript-eslint': '@typescript-eslint/eslint-plugin',
    },
    rules: {
      // Add your rules here
      'no-unused-vars': 'error',
      'no-unused-expressions': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
    },
  },
];
