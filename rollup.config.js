import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

const input = 'src/index.js'

const plugins = [resolve(), commonjs(), terser()]

// Add any external dependencies that shouldn't be bundled
const external = []

export default [
  {
    input,
    output: {
      file: 'dist/cjs/bundle.js',
      format: 'cjs'
    },
    plugins,
    external
  },
  {
    input,
    output: {
      file: 'dist/esm/bundle.js',
      format: 'esm'
    },
    plugins,
    external
  },
  {
    input,
    output: {
      file: 'dist/browser/bundle.js',
      format: 'umd',
      name: 'PXON'
    },
    plugins,
    external
  }
]
