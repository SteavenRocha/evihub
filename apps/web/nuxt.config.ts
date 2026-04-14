import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4, // Esto activa la nueva estructura donde todo está en /app
  },
  workspaceDir: '../../',
  devtools: { enabled: true },
  ssr: false, // desactivar renderizado del lado del servidor -> SPA activado
  devServer: {
    host: 'localhost',
    port: Number(process.env.FRONTEND_PORT) || 4002,
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || 'http://localhost:3001/api/v2',
    }
  },
  typescript: {
    typeCheck: false, // por problemas con la version de nuxt y vite
    tsConfig: {
      extends: '../../../tsconfig.base.json', // Nuxt copies this string as-is to the `./.nuxt/tsconfig.json`, therefore it needs to be relative to that directory
    },
  },
  imports: {
    autoImport: true,
  },
  css: ['~/assets/css/main.css'],
  modules: ['@pinia/nuxt', 'shadcn-nuxt'],
  shadcn: {
    prefix: '',
    componentDir: './app/components/ui'
  },
  vite: {
    plugins: [
      nxViteTsPaths(),
      tailwindcss(),
    ],
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  },
});
