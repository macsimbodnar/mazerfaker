@extends('layouts.mazerfaker')

@section('content')
    <div class="container">
        <div class="row">
            <div class="game-frame col-8">
                @yield('game-frame')
            </div>
            <div class="data-frame col-4">
                @yield('data-frame')
            </div>
            <div class="info-frame col-12">
                @yield('info-frame')
            </div>
        </div>
    </div>
@endsection
