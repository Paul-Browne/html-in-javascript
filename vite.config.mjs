import { defineConfig } from 'vite';
import htmlPages from 'vite-plugin-html-pages';

export default defineConfig({
  plugins: [
    htmlPages({
      pagesDir: 'src',
      cleanUrls: true,
      debug: true
    }),
  ],
  build: {
    emptyOutDir: true,
    outDir: 'docs',
  }
});
