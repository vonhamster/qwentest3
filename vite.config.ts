import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    strictPort: true,
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'public/css/bootstrap.min.css',
          dest: 'css'
        },
        {
          src: 'public/js/bootstrap.bundle.min.js',
          dest: 'js'
        }
      ]
    })
  ]
});
