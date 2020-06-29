import { RollupOptions } from 'rollup';
import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

/**
 * @type RollupOptions
 */
const options = {
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
export default options;
