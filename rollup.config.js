import { terser } from "rollup-plugin-terser";

const config = {
  input: 'src/js/component.js',
  output: {file: "build/js/component.min.js",
           format: "es"},
  plugins: [terser()]
};

export default config;
