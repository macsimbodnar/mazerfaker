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



/*****************************
 * Site Home Route           *
 *****************************/

Route::get('/', 'HomeController@index')->name('index');

Route::get('home', function () {
    return redirect()->route('index');
});



/*****************************
 * Leslie Chow Routes        *
 *****************************/

// Tips
Route::get('leslie.chow.tips', 'LeslieChowTipsController@leslieChowTips')->name('leslie.chow.tips');

Route::get('leslie', function () {
    return redirect()->route('leslie.chow.tips');
});

Route::get('chow', function () {
    return redirect()->route('leslie.chow.tips');
});

Route::get('tips', function () {
    return redirect()->route('leslie.chow.tips');
});

// Edit
Route::get('leslie.chow.tips/edit', 'LeslieChowTipsAuthController@leslieChowTipsEdit')->name('leslie.chow.tips.edit');

Route::get('leslie/edit', function () {
    return redirect()->route('leslie.chow.tips');
});

Route::get('chow/edit', function () {
    return redirect()->route('leslie.chow.tips');
});

Route::get('tips/edit', function () {
    return redirect()->route('leslie.chow.tips');
});

// Add
Route::post('leslie.chow.tips/edit/add', 'LeslieChowTipsAuthController@leslieChowTipsAdd')->name('leslie.chow.tips.add');

// Get tips
Route::get('leslie.chow.tips/get', 'LeslieChowTipsController@get');




/*****************************
 * Game Room Routes          *
 *****************************/

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

Route::get('games', function () {
    return redirect()->route('gameroom');
});

Route::get('games/{name}', 'GameRoomController@games')->name('games');



/*****************************
 * Score Routes              *
 *****************************/

Route::resource('scores', 'ScoreController');



/*****************************
 * Test routes               *
 *****************************/

//Route::get('test', 'GameRoomController@test');
//Route::get('testview', 'GameRoomController@testview');
//Route::get('gettest', 'GameRoomController@getTest');
