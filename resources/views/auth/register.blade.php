@extends('layouts.mazerfaker')

@section('content')
<div class="container">
    <div class="form-signin" >

        <h1 class="form-signin-heading">{{ __('auth.register') }}</h1>

        <form class="" role="form" method="POST" action="{{ route('register') }}">
            {{ csrf_field() }}

            {{--<div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">--}}
            <label for="name" class="">
                {{ __('user.name') }}
            </label>

            <input id="name" type="text" class="form-control" name="name" value="{{ old('name') }}" required autofocus>

            @if ($errors->has('name'))
                <span class="form-error-message">
                    <strong>{{ $errors->first('name') }}</strong>
                </span>
            @endif

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

            <label for="password-confirm" class="">
                {{ __('auth.confirm-password') }}
            </label>

            <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>

            <div class="form-register-button">
                <button type="submit" class="btn btn-lg btn-primary btn-block">
                    {{ __('auth.register') }}
                </button>
            </div>
        </form>
    </div>
</div>
@endsection
