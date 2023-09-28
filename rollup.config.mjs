import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import copy from 'rollup-plugin-copy';

export default {
  input: {
    index: 'index.js',
  },
  output: {
    dir: 'dist',
    format: 'es'
  },
  
  plugins: [
    copy({
      targets: [
      ],
    }),
    json(),
    commonjs(),
    nodeResolve({preferBuiltins: false, browser: true}),
  ],
};