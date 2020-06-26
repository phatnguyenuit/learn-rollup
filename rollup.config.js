import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: {
    file: "dist/index.min.js",
    format: 'iife',
    name: 'bundle',
    globals: {
      'lodash': '_',
    }
  },
  external: ['lodash'],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    nodeResolve(),
    commonjs(),
    terser()
  ]
};
