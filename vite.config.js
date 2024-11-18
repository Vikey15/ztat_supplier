import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// const config = require('./webconfig');

// console.log('VITE_SERVER:', process.env.VITE_SERVER);
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/ecommerce-api/bo': {
        target: 'http://192.168.0.124:9000', 
        changeOrigin: true, 
        rewrite: (path) => path.replace(/^\/ecommerce-api\/bo/, '/ecommerce-api/bo'), 
      },
    },
  },
  // build: {
  //   rollupOptions: {
  //     input: './src/main.js', // Entry point for your app
  //     output: {
  //       dir: 'dist', // Output directory
  //     },
  //   },
  // }
});
