import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    allowedHosts: true,
    proxy: {
      '/api/v1/gpt': {
        target: 'https://inscode-api.csdn.net',
        changeOrigin: true,
        secure: false,
        // 不重写路径，保持和后端一致
        // rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [vue()],
  define: {
    'process.env': {
      INSCODE_API_KEY: process.env.INSCODE_API_KEY
    }
  }
})
