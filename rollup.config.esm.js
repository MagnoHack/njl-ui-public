import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.ts", // Modifica l'ingresso da .js a .ts
  output: {
    file: "dist/index.esm.js",
    format: "esm",
    exports: "named",
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfigOverride: {
        exclude: ["**/*.test.tsx", "**/*.test.ts"],
      },
    }),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: ["@babel/preset-env"],
    }),
    terser(),
  ],
  external: ["react", "react-dom"],
};
