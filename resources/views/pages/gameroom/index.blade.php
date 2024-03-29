@extends('layouts.mazerfaker')

@section('content')
    <div class="container">

        <div class="border-div">
            <div id="nasty" class="nasty-button">
                <h1>{{ strtoupper(__('game.games')) }}</h1>
            </div>
        </div>

        <div class="container">
            <div class="row">
                @foreach($games as $game)
                    <div class="col">
                        <div class="card game-card mb-3 text-center">
                            <img class="card-img-top" height="257" src="{{ asset('images/games/' . $game->thumbnail) }}" alt="img">
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
                    </div>
                @endforeach
            </div>
        </div>
    </div>
@endsection