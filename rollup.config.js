import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './a.js',
  plugins: [
    nodeResolve(),
    commonjs(),
  ]
}