<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();


/*
 * Site Home Route
 */
Route::get('/', 'HomeController@index')->name('index');

Route::get('home', function () {
    return redirect()->route('index');
});


/*
 * Game Room Routes
 */
Route::get('gameroom', 'GameRoomController@index')->name('gameroom');

Route::get('salagiochi', function() {
    return redirect()->route('gameroom');
});

Route::get('sala_giochi', function() {
    return redirect()->route('gameroom');
});

Route::get('game_room', function() {
    return redirect()->route('gameroom');
});

Route::get('game-room', function() {
    return redirect()->route('gameroom');
});

Route::get('sala-giochi', function() {
    return redirect()->route('gameroom');
});