const { mix } = require('laravel-mix');

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

/**
 * MAIN
 */
mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');


/**
 * UTIL
 */
mix.js('resources/assets/js/util/nasty-button.js', 'public/js/util/nasty-button.js');


/**
 * GAMES
 */

// Snake
mix.js('resources/assets/js/games/snake/snake.js', 'public/js/games/snake/snake.js')
   .sass('resources/assets/sass/games/snake/snake.scss', 'public/css/games/snake/snake.css');

// Space Invaders
mix.js('resources/assets/js/games/spaceinvaders/spaceinvaders.js', 'public/js/games/spaceinvaders/spaceinvaders.js')
    .sass('resources/assets/sass/games/spaceinvaders/spaceinvaders.scss', 'public/css/games/spaceinvaders/spaceinvaders.css');


// Leslie Chow Tips
mix.js('resources/assets/js/leslie/tips.js', 'public/js/leslie/tips.js');

/**
 * TEST
 */
mix.js('resources/assets/js/test/test.js', 'public/js/test/test.js');