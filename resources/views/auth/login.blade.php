@extends('layouts.mazerfaker')

@section('content')
<div class="container">
    <div class="form-signin">

        <h1 class="form-signin-heading">{{ __('auth.login') }}</h1>

        <div class="">
            <form class="" role="form" method="POST" action="{{ route('login') }}">
                {{ csrf_field() }}

                {{--<div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">--}}
                <label for="email" class="sr-only">
                    {{ __('auth.email-adress') }}
                </label>

                <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required autofocus>

                @if ($errors->has('email'))
                    <span class="">
                        <strong>{{ $errors->first('email') }}</strong>
                    </span>
                @endif

                {{--<div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">--}}
                <label for="password" class="sr-only">
                    {{ __('auth.password') }}
                </label>

                <input id="password" type="password" class="form-control" name="password" required>

                @if ($errors->has('password'))
                    <span class="">
                        <strong>{{ $errors->first('password') }}</strong>
                    </span>
                @endif

                <div class="checkbox">
                    <label>
                        <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}>
                        {{ __('auth.remember-me') }}
                    </label>
                </div>

                <div class="">
                    <div class="">
                        <button type="submit" class="btn btn-lg btn-primary btn-block">
                            {{ __('auth.login') }}
                        </button>

                        <a class="btn btn-link btn-block" href="{{ route('password.request') }}">
                            {{ __('auth.forgot-password-q') }}
                        </a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
