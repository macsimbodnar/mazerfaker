@extends('layouts.gameframe')

@push('scripts')
    <script src="{{ asset('js/games/snake/snake.js') }}"></script>
@endpush
@push('styles')
    <link href="{{ asset('css/games/snake/snake.css') }}" rel="stylesheet" />
@endpush

@section('game-frame')

    <div id="snake-game" class="snake-game">

        <canvas id="canvas" class="canvas"></canvas>

        <div class="score-in-canvas">
            <h6 class="" id="score-in-canvas">0</h6>
        </div>

        <div class="menu-container">
            <div class="pausa" id="pause" >
                <h4>{{ __('game.pause') }}</h4>
            </div>

            <div id="restart-menu" class="restart-menu">
                <h1 id="title">{{ $game->name }}</h1>
                <p id="game-over">{{ __('game.game-over') }}</p>

                <button id="restart" class="btn btn-primary" >
                    {{ __('game.restart') }}
                </button>
            </div>

            <div id="game-menu">
                <h1 id="snake">{{ $game->name }}</h1>
                {{--<p id="loading">{{ __('game.loading') }}...</p>--}}
                <button id="start" class="start btn btn-primary">
                    {{ __('game.start') }}
                </button>
            </div>
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
    <div class="game-info-row d-flex justify-content-between">
        <h6 class="">{{ __('game.score') }}</h6>
        <h6 class="" id="score">0</h6>
    </div>
    <div class="game-info-row d-flex justify-content-between">
        <h6>{{ __('game.speed') }}</h6>
        <h6 id="speed">0</h6>
    </div>
@endsection

@section('info-frame')
    <div class="d-flex justify-content-between">
        <label for="wall-collision" class="">
            <h6>{{ __('game.wall-collision') }}</h6>
        </label>
        <input type="checkbox" id="wall-collision" />
    </div>

    <div class="instructions-row game-info-row">
        <h6>{{ __('game.help-pause') }} - ESC</h6>
        <h6>{{ __('game.mute-sound') }} - S</h6>
        <h6>{{ __('game.mute-music') }} - M</h6>
    </div>
@endsection

@section('game-command-bar')
    <div class="game-command-bar-inner">
        <button id="pause-button" class="btn btn-primary">
            {{ __('game.pause') }}
        </button>
        <button id="mute-button" class="btn btn-primary">
            {{ __('game.mute') }}
        </button>
        <label for="wall-collision" class="">
            <h6>{{ __('game.wall') }}</h6>
        </label>
        <input type="checkbox" id="wall-collision-command-bar" />
    </div>

@endsection