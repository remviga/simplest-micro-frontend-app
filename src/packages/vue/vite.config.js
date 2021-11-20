import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsDir: ".",
    rollupOptions: {
      output: {
        entryFileNames: `vue.bundle.js`,
        chunkFileNames: `[name].app.js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
  plugins: [vue()],
});
