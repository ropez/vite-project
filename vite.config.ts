import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),

    {
      name: 'dynamic-import-plugin',
      renderDynamicImport: () => ({
        left: 'import(PREFIX + ',
        right: ')',
      }),
    },
  ],
})
