@extends('layouts.mazerfaker')

@section('content')
<div class="full-screen-container">
    <div class="container h-100">
        @component('components.nastybutton')
        @endcomponent

        @component('components.big-fat-button')
        @endcomponent
    </div>
</div>
@endsection
