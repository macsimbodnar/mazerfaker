@extends('layouts.mazerfaker')

@section('content')
    <div class="full-screen-container">
        <div class="container h-100">
            <div class="border-div">
                <div id="leslie-button" class="nasty-button">
                    <h2>{{ __('leslie.leslie_chow_tips') }}</h2>
                </div>
            </div>

            <br/>
            <br/>

            <h4 class="tip" id="tip">{{ $tip }}</h4>
        </div>
    </div>
@endsection

@push('scripts')
<script src="{{ asset('js/leslie/tips.js') }}"></script>
@endpush