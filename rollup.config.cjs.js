import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.ts", // Modifica l'ingresso da .js a .ts
  output: {
    file: "dist/index.cjs.js",
    format: "cjs",
    exports: "named",
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfigOverride: {
        exclude: ["**/*.test.tsx", "**/*.test.ts"], // Escludi i file di test
      },
    }),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: ["@babel/preset-env"],
    }),
    terser(), // Minimizzazione opzionale
  ],
  external: ["react", "react-dom"],
};
