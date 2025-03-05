import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/Graph.ts'),
            name: 'Graph',
            // the proper extensions will be added
            // fileName: 'graph',
        },
        rollupOptions: {},
    },
})