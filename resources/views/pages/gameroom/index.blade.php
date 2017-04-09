@extends('layouts.mazerfaker')

@section('content')
    <div class="container">

        <div class="border-div">
            <div id="nasty" class="nasty-button">
                <h1>{{ strtoupper(__('game.games')) }}</h1>
            </div>
        </div>

        <div class="row">
            @foreach($games as $game)
                <div class="col-md-4">
                    <div class="card game-card nasty-card">
                        <img class="card-img-top" src="{{ asset('repo/games/' . $game->thumbnail) }}" alt="img">
                        <div class="card-block">
                            <h4 class="card-title">{{ $game->name }}</h4>
                            <p class="card-text">{{ $game->description }}</p>
                        </div>
                        <div class="card-footer">
                            <a href="{{ route('game' , ['name' => strtolower($game->name), 'version' => $game->version]) }}" class="btn btn-primary">
                                {{ __('game.play') }}
                            </a>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
@endsection