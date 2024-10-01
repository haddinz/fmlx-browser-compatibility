import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import stylelint from "vite-plugin-stylelint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    stylelint({
      fix: true,
      include: ["src/**/*.{css,scss,sass,less,styl,vue,svelte}"],
    }),
    react(),
  ],
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
});
