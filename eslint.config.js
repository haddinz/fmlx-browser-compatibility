import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import compat from "eslint-plugin-compat";
import babelParser from "@babel/eslint-parser";

export default tseslint.config(
  {
    ignores: ["dist"],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: babelParser,
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        myCustomGlobal: "readonly",
      },
      parserOptions: {
        requireConfigFile: true,
        babelOptions: {
          presets: ["@babel/preset-env"],
        },
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      compat: compat,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "compat/compat": "error",
    },
    settings: {
      polyfills: ["fetch"],
      lintAllEsApis: true,
      browsers: ["chrome 72"],
      ignores: ["dist", "node_modules", "build"],
    },
  }
);
