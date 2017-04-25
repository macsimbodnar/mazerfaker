@extends('layouts.mazerfaker')

@section('content')
    <div class="container">
        <div class="row">
            <div class="game-frame col-8">
                @yield('game-frame')
            </div>
            <div class="game-info-col col-4">
                <div class="data-frame">
                    @yield('data-frame')
                </div>
                <div class="info-frame">
                    @yield('info-frame')
                </div>
            </div>
        </div>
    </div>
@endsection
