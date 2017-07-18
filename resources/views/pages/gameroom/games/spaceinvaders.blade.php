@extends('layouts.gameframe')

@push('scripts')
<script src="{{ asset('js/games/spaceinvaders/spaceinvaders.js') }}"></script>
@endpush
@push('styles')
<link href="{{ asset('css/games/spaceinvaders/spaceinvaders.css') }}" rel="stylesheet" />
@endpush

@section('game-frame')

    <div id="spaceinvaders-game" class="spaceinvaders-game">

        <canvas id="canvas" class="canvas" width="640" height="640"></canvas>

    </div>

@endsection
