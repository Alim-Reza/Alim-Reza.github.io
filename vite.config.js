import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Adjust if needed for subdirectories
  build: {
    outDir: 'dist', // Output directory for built files
    emptyOutDir: true, // Clear output directory before building
    // Uncomment and set `base` if your app needs a subfolder
    // base: '/your-subfolder-name/',
  },
  resolve: {
    alias: {
      // Add an alias for `aos` if necessary
      'aos': 'node_modules/aos/dist/aos.js',
    },
  },
});