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

        return view('pages.gameroom.index', ['games' => Game::all()]);
    }

    public function game(Request $request, $name, $id) {
        return view('pages.gameroom.games.' . $name);
    }
}
