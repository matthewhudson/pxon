import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

// Shared TypeScript configuration for output bundles
const typescriptOptions = {
  tsconfig: './tsconfig.json',
  // Don't emit declarations - we'll handle that separately with dts
  declaration: false,
  // Don't use declarationDir from tsconfig
  declarationDir: undefined,
  // Don't output d.ts files via the TypeScript compiler
  emitDeclarationOnly: false
};

export default [
  // CommonJS build
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/cjs/pxon.js',
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript({
        ...typescriptOptions,
        outDir: 'dist/cjs',
      }),
    ],
  },
  // ESM build
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/esm/pxon.js',
      format: 'esm',
      sourcemap: true,
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript({
        ...typescriptOptions,
        outDir: 'dist/esm',
      }),
    ],
  },
  // Browser build (minified)
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/browser/pxon.min.js',
      format: 'iife',
      name: 'PXON',
      sourcemap: true,
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript({
        ...typescriptOptions,
        outDir: 'dist/browser',
      }),
      terser(),
    ],
  },
  // Unminified browser build (for debugging)
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/browser/pxon.js',
      format: 'iife',
      name: 'PXON',
      sourcemap: true,
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript({
        ...typescriptOptions,
        outDir: 'dist/browser',
      }),
    ],
  },
  // Type definitions (using dts plugin)
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/types/index.d.ts',
      format: 'esm',
    },
    plugins: [dts()],
  },
];
