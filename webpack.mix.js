let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.react('src/index.js', 'dist/js/editor.blocks.js')
    // .sass('src/card/editor.sass', 'dist/css/editor.blocks.css')
    .sass('src/card/frontend.sass', 'dist/css/frontend.blocks.css')
    .sourceMaps();
