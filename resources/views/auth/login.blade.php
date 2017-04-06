@extends('layouts.mazerfaker')

@section('content')
<div class="container">

    <div class="">
        {{ __('auth.login') }}
    </div>

    <div class="">
        <form class="" role="form" method="POST" action="{{ route('login') }}">
            {{ csrf_field() }}

            {{--<div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">--}}
            <div class="">
                <label for="email" class="">
                    {{ __('auth.email-adress') }}
                </label>

                <div class="">
                    <input id="email" type="email" class="" name="email" value="{{ old('email') }}" required autofocus>

                    @if ($errors->has('email'))
                        <span class="">
                            <strong>{{ $errors->first('email') }}</strong>
                        </span>
                    @endif
                </div>
            </div>

            {{--<div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">--}}
            <div class="">
                <label for="password" class="">
                    {{ __('auth.password') }}
                </label>

                <div class="">
                    <input id="password" type="password" class="" name="password" required>

                    @if ($errors->has('password'))
                        <span class="">
                            <strong>{{ $errors->first('password') }}</strong>
                        </span>
                    @endif
                </div>
            </div>

            <div class="">
                <div class="">
                    <div class="">
                        <label>
                            <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}>
                            {{ __('auth.remember-me') }}
                        </label>
                    </div>
                </div>
            </div>

            <div class="">
                <div class="">
                    <button type="submit" class="btn btn-primary">
                        {{ __('auth.login') }}
                    </button>

                    <a class="btn btn-link" href="{{ route('password.request') }}">
                        {{ __('auth.forgot-password-q') }}
                    </a>
                </div>
            </div>
        </form>
    </div>
</div>
@endsection
