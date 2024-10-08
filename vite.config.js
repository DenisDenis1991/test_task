import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'node:path';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/test_task',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    css: {
        modules: {
            localsConvention: 'camelCase',
            generateScopedName: '[path][name]__[local]--[hash:base64:5]',
        },
    },
});
