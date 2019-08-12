import React from "react";
import "./style.css";

function Header() {
    return (
        <React.Fragment>
            <header class="title">


                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">CustomTub</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                <p></p>
                            </li>
                            <li class="nav-item">
                                <p></p>
                            </li>
                            <li class="nav-item">
                                <p></p>
                            </li>

                        </ul>

                        <h2>Welcome to Your Time!</h2>

                        <ul class="  my-2 my-lg-0">
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
                        </ul>
                    </div>
                </nav>

            </header>
        </React.Fragment>
    );
}

export default Header;