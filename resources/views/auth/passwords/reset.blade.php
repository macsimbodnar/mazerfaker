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

        <form class="" role="form" method="POST" action="{{ route('password.request') }}">

            {{ csrf_field() }}

            <input type="hidden" name="token" value="{{ $token }}">

            {{--<div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">--}}
            <label for="email" class="">
                {{ __('auth.email-adress') }}
            </label>

            <input id="email" type="email" class="form-control" name="email" value="{{ $email or old('email') }}" required autofocus>

            @if ($errors->has('email'))
                <span class="form-error-message">
                    <strong>{{ $errors->first('email') }}</strong>
                </span>
            @endif

            {{--<div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">--}}
            <label for="password" class="">
                {{ __('auth.password') }}
            </label>

            <input id="password" type="password" class="form-control" name="password" required>

            @if ($errors->has('password'))
                <span class="form-error-message">
                    <strong>{{ $errors->first('password') }}</strong>
                </span>
            @endif

            {{--<div class="form-group{{ $errors->has('password_confirmation') ? ' has-error' : '' }}">--}}
            <label for="password-confirm" class="">
                {{ __('auth.confirm-password') }}
            </label>

            <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>

            @if ($errors->has('password_confirmation'))
                <span class="form-error-message">
                    <strong>{{ $errors->first('password_confirmation') }}</strong>
                </span>
            @endif

            <div class="form-register-button">
                <button type="submit" class="btn btn-lg btn-primary btn-block">
                    {{ __('auth.reset-password') }}
                </button>
            </div>
        </form>
    </div>
</div>
@endsection
