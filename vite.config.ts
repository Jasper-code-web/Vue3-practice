const path = require('path')
import { UserConfigExport, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import vueJsx from '@vitejs/plugin-vue-jsx'


export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [vue(), vueJsx(), viteMockServe({
      // default
      mockPath: 'mock',
      localEnabled: command === 'serve',
    })],
    define: {
      'process.env': {

      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    server: {
      host: '0.0.0.0',
      port: 9000,
      strictPort: true
    }
  }
}

