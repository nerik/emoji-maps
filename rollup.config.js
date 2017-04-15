import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'index.js',
  format: 'iife',
  dest: 'bundle.js',
  plugins: [
    resolve({
      jsnext: true
    }),
    commonjs({
      include: 'node_modules/fetch'
    })
  ]
};
