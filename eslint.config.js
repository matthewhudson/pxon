import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import jestPlugin from 'eslint-plugin-jest';
import prettierConfig from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

export default [
  // Base ESLint recommended rules
  eslint.configs.recommended,
  
  // TypeScript recommended rules
  ...tseslint.configs.recommended,
  
  // Prettier config (includes plugin and rules)
  prettierConfig,
  
  // Base configuration for all files
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: '.',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest
      }
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'jest': jestPlugin
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn'
    }
  },
  
  // Test file specific configuration
  {
    files: ['**/*.test.ts', '**/*.test.js'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
];
