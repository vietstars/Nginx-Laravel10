import react from '@vitejs/plugin-react'

export default ({ command }) => ({
    base: command === 'serve' ? '' : '/build/',
    publicDir: 'fake_dir_so_nothing_gets_copied',
    build: {
        manifest: true,
        outDir: 'public/build',
        rollupOptions: {
            input: [
                'resources/css/app.scss',
                'resources/js/app.js',
            ],
            output:{
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                }
            }
        },
    },
    plugins: [
        react(),
    ],
    resolve: {
        alias: [
            { find: "@", replacement: "/resources/js/" },
            { find: "@css", replacement: "/resources/css/" },
            { find: "@img", replacement: "/resources/img/" },
            { find: "@page", replacement: "/resources/js/scenes/" },
            { find: "@layout", replacement: "/resources/js/layouts/" },
            { find: "@route", replacement: "/resources/js/routes" },
            { find: "@widget", replacement: "/resources/js/widgets" },
            { find: "@context", replacement: "/resources/js/contexts" },
        ],
    },
});