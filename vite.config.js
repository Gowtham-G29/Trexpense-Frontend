import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa';



// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
     VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Trexpense App',
        short_name: 'Trexpense',
        start_url: '.',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#FFA500',
        icons: [
          { 
            src: 'Logo.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    }),

  ],
})
