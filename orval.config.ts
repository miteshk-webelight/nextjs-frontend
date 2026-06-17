import { defineConfig } from "orval";

export default defineConfig({
  ecommerce: {
    input: "./src/api/swagger.json",

    output: {
      target: "./src/api/generated",

      schemas: "./src/api/generated/models",

      client: "react-query",

      mode: "tags",

      override: {
        mutator: {
          path: "./src/api/http-client.ts",
          name: "customAxios",
        },
        transformer: "./orval-transformer.ts",
      },
    },
  },
});
