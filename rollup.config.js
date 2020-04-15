import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import { terser } from 'rollup-plugin-terser'
import meta from './src/replaceGoogleCdn/meta'

export default {
  input: 'src/replaceGoogleCdn/index.js',
  output: {
    name: 'replaceGoogleCdn',
    file: 'dist/replaceGoogleCdn.js',
    format: 'iife'
  },
  plugins: [
    resolve(),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.VUE_ENV': JSON.stringify('browser')
    }),
    terser({
      output: {
        beautify: true,
        preamble: meta
      }
    })
  ]
}
