@extends('layouts.mazerfaker')

@section('content')
    <div class="container">
        <div class="game-frame">
            @yield('game-frame')
            <div class="game-command-bar">
                @yield('game-command-bar')
            </div>
        </div>
        <div class="game-info-col">
            <div class="data-frame">
                @yield('data-frame')
            </div>
            <div class="info-frame">
                @yield('info-frame')
            </div>
        </div>
    </div>
@endsection
