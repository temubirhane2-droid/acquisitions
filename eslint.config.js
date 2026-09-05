import js from '@eslint/js';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  {
    ignores: ['node_modules/**', '.idea/**', 'src/eslint.config.js'],
  },
  js.configs.recommended,
  {
    files: ['src/**/*.js'],
    languageOptions: {
      globals: {
        console: 'readonly',
        process: 'readonly',
      },
    },
  },
  prettierRecommended,
  {
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },
];
