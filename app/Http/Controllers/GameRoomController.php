<?php

namespace App\Http\Controllers;

use App\Game;
use App\Role;
use App\Score;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class GameRoomController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
        //$this->middleware('auth');
    }


    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request) {
//        $user = Auth::user();
//        $id = Auth::id();
//        $role = $user->role;

//        d($request->header('User-Agent'));
        return view('pages.gameroom.index', ['games' => Game::all()]);
    }


    public function games(Request $request, $name) {

        return view('pages.gameroom.games.' . $name, ['user' => Auth::user(), 'game' => Game::where('unic_name', $name)->first()]);
    }



    //
    // TEST METHODS TODO da togliere
    //

//    public function testview(Request $request) {
//        return view('pages.test.button');
//    }

//    public function test(Request $request) {
//        $games = Game::all();
//        $users = User::all();
//
//        foreach ($games as $game) {
//            foreach ($users as $user) {
//                $score = new Score();
//                $score->score = rand();
//                $score->game_id = $game->id;
//                $score->user_id = $user->id;
//                $score->save();
//            }
//        }
//
//        return 'ok';
//    }
//
//
//    public function getTest() {
//        $games = Game::all();
//        $users = User::all();
//        $scores = Score::all();
//
//        echo 'GAME<br/>';
//        foreach ($games as $game) {
//            echo $game->scores;
//            echo '<br/>';
//        }
//
//        echo '<br/><br/><br/>';
//        echo 'USER<br/>';
//        foreach ($users as $user) {
//            echo $user->scores;
//            echo '<br/>';
//        }
//
//        echo '<br/><br/><br/>';
//        echo 'SCORE<br/>';
//        foreach ($scores as $score) {
//            echo $score->user->name . ' -> ' . $score->game->name . ' -> ' . $score->score;
//            echo '<br/>';
//        }
//
//    }
}
