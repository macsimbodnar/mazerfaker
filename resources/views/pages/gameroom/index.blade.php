@extends('layouts.mazerfaker')

@section('content')
    <div class="container">

        <div class="border-div">
            <div id="nasty" class="nasty-button">
                <h1>{{ strtoupper(__('game.games')) }}</h1>
            </div>
        </div>

        @foreach($games as $game)
            <div class="card game-card nasty-card">
                <img class="card-img-top" src="{{ asset('images/games/' . $game->thumbnail) }}" alt="img">
                <div class="card-block">
                    <h4 class="card-title">{{ $game->name }}</h4>
                    <p class="card-text">{{ $game->description }}</p>
                </div>
                <div class="card-footer">
                    <a href="{{ route('games' , ['name' => strtolower($game->unic_name)]) }}" class="btn btn-primary">
                        {{ __('game.play') }}
                    </a>
                </div>
            </div>
        @endforeach
    </div>
@endsection