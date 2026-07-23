import { defineConfig } from 'vite'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  publicDir: 'public',
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        team: resolve(root, 'team.html'),
        support: resolve(root, 'support.html'),
        privacy: resolve(root, 'privacy.html'),
        terms: resolve(root, 'terms.html'),
        'no-ai-yet': resolve(root, 'no-ai-yet.html'),
        'hearth-login': resolve(root, 'hearth-login.html'),
      },
    },
  },
})
