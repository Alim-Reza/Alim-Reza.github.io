import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // Output directory for built files
    emptyOutDir: true, // Clear output directory before building
    // Uncomment and set `base` if your app needs a subfolder
    // base: '/your-subfolder-name/',
  },
});