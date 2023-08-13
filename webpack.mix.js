
let mix = require('laravel-mix');

mix.setPublicPath('dist')
    .js('src/js/app.js', 'dist/app.js')
    .sass('src/sass/index.scss', 'style.css')
    .browserSync({
        files: [
            "index.html",
            "src/sass/**/*.scss",
            "src/js/*.js"
        ],
        port: 8080,
        host: '127.0.0.1',
        server: '.',
        localOnly: true,
    });
