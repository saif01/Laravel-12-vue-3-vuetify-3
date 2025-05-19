import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: [

                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
            // compilerOptions: {
            //     compatConfig: {
            //         MODE: 2
            //     },
            //     isCustomElement: tag => tag === 'lottie-player'
            // },
        }),
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
        },
    },
     css: {
        preprocessorOptions: {
        scss: {
                // Disable deprecation warnings
                quietDeps: true,
                sassOptions: {
                    quiet: true
                }
            }
        }
    }
});
