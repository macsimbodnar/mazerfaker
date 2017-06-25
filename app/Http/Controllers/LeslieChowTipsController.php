<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LeslieChowTipsController extends Controller
{
    /**
     * Show the Leshlie Chow aka [Matteo] tips to eat in the Lambrazzers area
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function leslieChowTips() {

        return view('pages.lesliechow.lesliechow');
    }


//        private function readFile() {
//        $file = fopen("/home/max/ws/mazerfaker/public/f.txt","r");
//
//        while(! feof($file))
//        {
//            $leslieChowTip = new LeslieChowTip();
//            $leslieChowTip->tip = fgets($file);
//            $leslieChowTip->save();
//        }
//
//        fclose($file);
//    }
}
