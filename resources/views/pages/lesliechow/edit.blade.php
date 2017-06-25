@extends('layouts.mazerfaker')

@section('content')
    <div class="full-screen-container">
        <div class="container h-100">
            <div class="border-div">
                <div id="nasty" class="nasty-button">
                    <h1>{{ strtoupper('prova') }}</h1>
                </div>
            </div>

            <form method="post" action="{{ route('leslie.chow.tips.add') }}">
                {!! csrf_field() !!}
                <div class="form-group">
                    <label for="tip">{{ __('leslie.tip') }}</label>
                    <textarea name="tip" class="form-control" id="tip" rows="3"></textarea>
                </div>
                <br><br>
                <button type="submit" class="btn btn-primary">{{ __('form.submit') }}</button>
            </form>

        </div>
    </div>
@endsection