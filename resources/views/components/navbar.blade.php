<nav class="navbar navbar-toggleable-md navbar-light bg-faded">

    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <a id="navbar-main-brand" class="navbar-brand" href="{{ url('/') }}">
        {{ config('app.name', 'MazerFaker') }}
    </a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <!-- Authentication Links -->
        <ul class="navbar-nav ml-auto">
            @if (Auth::guest())
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('login') }}">
                        {{ __('auth.login') }}
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('register') }}">
                        {{ __('auth.register') }}
                    </a>
                </li>
            @else
                <li class="nav-item dropdown">

                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{ Auth::user()->name }}
                    </a>


                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item"
                           href="{{ route('logout') }}"
                           onclick="
                                event.preventDefault();
                                document.getElementById('logout-form').submit();
                            ">

                                Logout

                            </a>

                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                {{ csrf_field() }}
                            </form>
                    </div>
                </li>
            @endif
        </ul>
    </div>
</nav>