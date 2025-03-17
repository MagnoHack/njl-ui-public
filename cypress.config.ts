import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1024,
  viewportHeight: 768,

  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "http://localhost:6006",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
