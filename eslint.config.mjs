import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import noRelativeImports from "eslint-plugin-no-relative-import-paths";
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    files: ["src/**/*.{js,jsx,ts,tsx}", "app/**/*.{js,jsx,ts,tsx}"],
    ignores: ["src/api/**"],
    // Register the plugin
    plugins: {
      "no-relative-import-paths": noRelativeImports,
    },
    rules: {
      "no-relative-import-paths/no-relative-import-paths": [
        "error",
        {
          allowSameFolder: true,
          rootDir: "src",
          prefix: "@",
        },
      ],

      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
      eqeqeq: ["error", "always"],
      "prefer-const": "error",
      "eol-last": ["warn", "always"],
      "no-unused-expressions": ["warn"],
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "no-trailing-spaces": ["warn"],
      indent: ["warn", 2],
      semi: ["warn", "always"],
    },
  },

  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
