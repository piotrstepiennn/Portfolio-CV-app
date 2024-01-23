/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  preview: {
    port: 5173,
    strictPort: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
    setupFiles: "./src/test/setup.ts",
  },
  // server: {
  //   port: 5173,
  //   strictPort: true,
  //   host: true,
  //   origin: "http://0.0.0.0:5173",
  // },
});
