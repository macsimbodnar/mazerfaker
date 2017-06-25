<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LeslieChowTipsAuthController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('auth');
    }


    /**
     * Show the Leshlie Chow aka [Matteo] tips to eat in the Lambrazzers area
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function leslieChowTipsEdit(Request $request) {
        $user = Auth::user();

        if($user->hasRole('nasty') || $user->hasRole('super_nasty')) {
            return view('pages.lesliechow.edit');
        } else {
            return view('pages.lesliechow.lesliechow');
        }
    }
}
