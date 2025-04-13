import path from "path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "https://gyulakadar1983.github.io/mindbox-todo-list",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
