<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
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
    public function index() {
        return view('pages.index');
    }


    /**
     * Show the Leshlie Chow aka [Matteo] tips to eat in the Lambrazzers area
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function leslieChowTips() {
        return view('pages.lesliechow');
    }

}
