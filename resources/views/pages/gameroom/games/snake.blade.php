@extends('layouts.gameframe')

@push('scripts')
    <script src="{{ asset('js/games/snake/snake.js') }}"></script>
@endpush
@push('styles')
    <link href="{{ asset('css/games/snake/snake.css') }}" rel="stylesheet" />
@endpush

@section('game-frame')

    <div id="snake-game" class="snake-game">
        <div class="pausa" id="pausa" hidden>
            <h4>{{ __('game.pause') }}</h4>
        </div>

        <canvas id="canvas" class="canvas"></canvas>

        <div id="reMenu" hidden>
            <h1 id="title">{{ $game->name }}</h1>
            <p id="game-over">{{ __('game.game-over') }}</p>

            <a href="javascript: void(0)" id="restart" class="restart" >
                {{ __('game.restart') }}
            </a>
        </div>

        <div id="game-menu">
            <h1 id="snake">{{ $game->name }}</h1>
            <button id="start" class="start">
                {{ __('game.start') }}
            </button>
            <p id="loading">{{ __('game.loading') }}...</p>
        </div>

        <!-- Audio -->
        <audio id="main-music" loop>
            <source src="{{ asset('sounds/games/snake/main.mp3') }}" type="audio/mp3" />
            <source src="{{ asset('sounds/games/snake/main.ogg') }}" type="audio/ogg"/>
        </audio>

        <audio id="game-over-music">
            <source src="{{ asset('sounds/games/snake/go.mp3') }}" type="audio/mp3" />
            <source src="{{ asset('sounds/games/snake/go.ogg') }}" type="audio/ogg"/>
        </audio>

        <audio id="food-music">
            <source src="{{ asset('sounds/nasty/nasty4.mp3') }}" type="audio/mp3" />
            <source src="{{ asset('sounds/games/snake/food.ogg') }}" type="audio/ogg"/>
        </audio>
    </div>

@endsection

@section('data-frame')
DATA
@endsection

@section('info-frame')
INFO
@endsection