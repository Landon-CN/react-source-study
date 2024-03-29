import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'
import createExternal from 'vite-plugin-external';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), createExternal({
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    }
  })],
  resolve: {
    alias: [
      // { find: 'react', replacement: path.resolve(__dirname, './src/packages/react') },
      // { find: 'react-dom', replacement: path.resolve(__dirname, './src/packages/react-dom') },
      { find: 'scheduler', replacement: path.resolve(__dirname, './src/packages/scheduler') },
      { find: 'react-cache', replacement: path.resolve(__dirname, './src/packages/react-cache') },
      { find: 'log', replacement: path.resolve(__dirname, './src/packages/log') }
    ]
  },
  optimizeDeps: {
    include: [
      'react', 'react-dom', 'scheduler', 'react-cache', 'log'
    ]
  }
})
