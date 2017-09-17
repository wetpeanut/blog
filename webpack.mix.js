let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.autoload({
   'jquery': ['window.$', 'window.jQuery'],
   'popper.js/dist/umd/popper.js': ['Popper'],
    tether: ['Tether', 'window.Tether']
});	



mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
   	.js('resources/assets/js/crud.js','public/js');


mix.browserSync({
    proxy: 'localhost:8000'
});


mix.js('node_modules/jquery/dist/jquery.min.js','public/js')
    .js('node_modules/bootstrap/dist/js/bootstrap.js','public/js')
    .js('node_modules/bootstrap/dist/js/bootstrap.min.js','public/js')
    .js('node_modules/popper.js/dist/umd/popper.min.js','public/js')
    .js('node_modules/tether/dist/js/tether.min.js','public/js')
    .js('node_modules/jquery/dist/jquery.js','public/js')
    .js('node_modules/jquery/dist/jquery.slim.min.js','public/js');
    

