import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA(
      {
        registerType: 'prompt',

            // add this to cache all the imports
            workbox: {
              globPatterns: ["**/*"],
          },
          // add this to cache all the
          // static assets in the public folder
          includeAssets: [
              "**/*",
          ],
          
        manifest: {
          name: 'SunSTAT Application',
          short_name: 'SunSTAT',
          description: 'Weather forecasting and energy management system',
          start_url:'/',
          display: 'standalone',
          background_color: '#0F172A',
          theme_color: '#0F172A',
          icons: [
            {
              src: '/icons/icon-192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any maskable',
            },

            {
              src: '/icons/icon-512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',

            }
          ],

        },
      }
    ),
    react(),

  
  ],
})
