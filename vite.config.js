import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    base: "weebquery",
    build: {
      outDir: "build",
    },
    plugins: [react()],
  };
});
