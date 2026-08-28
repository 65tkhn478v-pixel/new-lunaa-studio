import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5180,
    strictPort: true,
    // écoute sur toutes les interfaces réseau, pas seulement le loopback —
    // sinon le proxy de preview de l'environnement distant ne peut pas
    // atteindre le serveur même si celui-ci répond en local (curl
    // localhost fonctionne, mais rien d'externe n'y accède).
    host: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        mentionsLegales: resolve(__dirname, 'mentions-legales.html'),
      },
    },
  },
})
