// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // Other config options...
  css: {
    preprocessorOptions: {
      // Set this to empty for loading css files directly
      // without any preprocessors
      sass: {},
      scss: {},
      less: {},
      stylus: {}
    }
  }
});
