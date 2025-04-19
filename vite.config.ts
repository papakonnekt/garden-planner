import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // The default configuration is suitable for both development and production.
  // For specific production build options (e.g., code splitting strategies,
  // minification options) or development server options (e.g., proxy rules),
  // you can add 'build' or 'server' properties here.
  // build: {
  //   outDir: 'dist',
  //   minify: 'terser',
  //   sourcemap: true,
  // },
  // server: {
  //   port: 3000,
  //   open: true,
  // },
})
