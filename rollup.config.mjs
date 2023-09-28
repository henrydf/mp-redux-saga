import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import copy from 'rollup-plugin-copy';

export default {
  input: {
    index: 'node_modules/redux-saga/dist/redux-saga-core.esmodules-browsers.min.js',
    effects: 'node_modules/redux-saga/dist/redux-saga-effects.esmodules-browsers.min.js',
  },
  output: {
    dir: 'dist',
    format: 'es'
  },
  
  plugins: [
    copy({
      targets: [
        { src: 'node_modules/redux-saga/index.d.ts', dest: '.' },
        { src: 'node_modules/redux-saga/effects.d.ts', dest: '.' },
      ],
    }),
    json(),
    commonjs(),
    nodeResolve({preferBuiltins: false, browser: true}),
  ],
};