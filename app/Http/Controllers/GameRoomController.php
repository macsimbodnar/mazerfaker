<?php

namespace App\Http\Controllers;

use App\Game;
use App\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class GameRoomController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
//        $user = Auth::user();
//        $id = Auth::id();
//        $role = $user->role;

//        d($request->header('User-Agent'));
        return view('pages.gameroom.index', ['games' => Game::all()]);
    }

    public function games(Request $request, $name) {

        return view('pages.gameroom.games.' . $name, ['game' => Game::where('unic_name', $name)->first()]);
    }
}
