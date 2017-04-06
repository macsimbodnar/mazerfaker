@extends('layouts.mazerfaker')

@section('content')
<div class="container">
    <div class="" >
            <div class="">
                {{ __('auth.register') }}
            </div>
            <div class="">
                <form class="" role="form" method="POST" action="{{ route('register') }}">
                    {{ csrf_field() }}

                    {{--<div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">--}}
                    <div class="">
                        <label for="name" class="">
                            {{ __('user.name') }}
                        </label>

                        <div class="">
                            <input id="name" type="text" class="" name="name" value="{{ old('name') }}" required autofocus>

                            @if ($errors->has('name'))
                                <span class="">
                                    <strong>{{ $errors->first('name') }}</strong>
                                </span>
                            @endif
                        </div>
                    </div>

                    {{--<div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">--}}
                    <div class="">
                        <label for="email" class="">
                            {{ __('auth.email-adress') }}
                        </label>

                        <div class="">
                            <input id="email" type="email" class="" name="email" value="{{ old('email') }}" required>

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

                    <div class="form-group">
                        <label for="password-confirm" class="col control-label">
                            {{ __('auth.confirm-password') }}
                        </label>

                        <div class="">
                            <input id="password-confirm" type="password" class="" name="password_confirmation" required>
                        </div>
                    </div>

                    <div class="">
                        <div class="">
                            <button type="submit" class="btn btn-primary">
                                {{ __('auth.register') }}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection
