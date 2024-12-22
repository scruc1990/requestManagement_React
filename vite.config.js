import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@services': `${path.resolve('./src/services')}/`,
      '@components': `${path.resolve(`./src/components`)}/`,
      '@hooks': `${path.resolve('./src/hooks')}/`,
      '@pages': `${path.resolve('./src/pages')}/`,
      '@utils': `${path.resolve('./src/utils')}/`,
      '@wrappers': `${path.resolve('./src/wrappers')}/`,
      '@containers': `${path.resolve(`./src/containers`)}/`,
      '@router': `${path.resolve(`./src/router`)}/`,
      '@assets': `${path.resolve('./src/assets')}/`
    }
  },
  base: '/aplication/app/',
  build: {
    outDir: 'app',
    rollupOptions: {
        output: {
          entryFileNames: 'main.js',
          chunkFileNames: 'chunk-[name].js',
          assetFileNames: 'asset-[name].[ext]'
        }
    }
  }
})
