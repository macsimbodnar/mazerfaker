@extends('layouts.mazerfaker')

@section('content')
    <div id="game-data" class="game-data" hidden>
        @if($user)
            <div id="user" data-userid="{{ $user->id }}" hidden ></div>
        @endif

        <div id="game-id" data-gameid="{{ $game->id }}" hidden ></div>
    </div>
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
