<?php

namespace App\Http\Controllers;

use App\LeslieChowTip;
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
    public function leslieChowTipsEdit()
    {
        $user = Auth::user();

        if($user->hasRole('nasty') || $user->hasRole('super_nasty')) {
            return view('pages.lesliechow.edit', ['user' => $user]);
        } else {
            return redirect()->route('leslie.chow.tips');
        }
    }


    /**
     * Add new tips
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function leslieChowTipsAdd(Request $request)
    {
        $user = Auth::user();
        if($user->hasRole('nasty') || $user->hasRole('super_nasty')) {
            $tip = $request->input('tip');

            try {
                $leslieChowTip = new LeslieChowTip();
                $leslieChowTip->tip = $tip;
                $leslieChowTip->save();

                return redirect()->route('leslie.chow.tips');
            } catch (Exception $e) {
                return redirect()->route('leslie.chow.tips.edit');
            }
        } else {
            return redirect()->route('leslie.chow.tips');
        }
    }
}
