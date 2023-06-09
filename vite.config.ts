import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'components': path.resolve(__dirname, 'src/components/index.ts'),
      // 'config': path.resolve(__dirname, 'src/config/index.ts'),
      'constants': path.resolve(__dirname, 'src/constants/index.ts'),
      'mocks': path.resolve(__dirname, 'src/mocks/index.ts'),
      'hooks': path.resolve(__dirname, 'src/hooks/index.ts'),
      'store': path.resolve(__dirname, 'src/store/index.ts'),
      // 'services': path.resolve(__dirname, 'src/services/index.ts'),
      // 'shared': path.resolve(__dirname, 'src/shared/index.ts'),
      'utils': path.resolve(__dirname, 'src/utils/index.ts'),
      'assets': path.resolve(__dirname, 'src/assets/index.ts'),
      'client': path.resolve(__dirname, 'src/client/index.ts'),
      'routes': path.resolve(__dirname, 'src/routes/index.ts'),
      'interfaces': path.resolve(__dirname, 'src/interfaces/index.ts'),
    },
  },
})