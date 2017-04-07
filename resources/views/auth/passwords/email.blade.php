@extends('layouts.mazerfaker')

@section('content')
<div class="container">
    <div class="form-signin">

        <h1 class="form-signin-heading">{{ __('auth.reset-password') }}</h1>

        @if (session('status'))
            <div class="form-error-message">
                {{ session('status') }}
            </div>
        @endif

        <form class="" role="form" method="POST" action="{{ route('password.email') }}">
            {{ csrf_field() }}

            {{--<div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">--}}
            <label for="email" class="">
                {{ __('auth.email-adress') }}
            </label>

            <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required>

            @if ($errors->has('email'))
                <span class="form-error-message">
                    <strong>{{ $errors->first('email') }}</strong>
                </span>
            @endif

            <div class="form-register-button">
                <button type="submit" class="btn btn-lg btn-primary btn-block">
                    {{ __('auth.send-reset-link') }}
                </button>
            </div>
        </form>
    </div>
</div>
@endsection
