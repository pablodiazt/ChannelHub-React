import React from "react";
import "./style.css";

function Header() {
    return (
        <React.Fragment>
            {/* <header class=""> */}


            <nav class="navbar navbar-expand-lg navbar-light bg-light">

                <a class="navbar-brand" href="#"><h4>CustomTUBE</h4></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>



                {/* <!--Grid column      --- SEARCH BAR --> */}
                <div class="col-md-7 mb-2 mt-2 ml-0 mr-0 aaa">
                    {/* <!-- Form --> */}
                    <form class="form-inline text-center">
                        <input class="form-control form-control-sm ml-0 mr-0 w-75" type="text" placeholder="Search"
                            aria-label="Search"></input>
                        <i class="fas fa-search" aria-hidden="true"></i>
                    </form>
                    {/* <!-- Form --> */}
                </div>
                {/* <!--Grid column    --- SEARCH BAR --> */}



                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

                    {/* <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                <p></p>
                            </li>
                            <li class="nav-item">
                                <p></p>
                            </li>
                            <li class="nav-item">
                                <p></p>
                            </li>
                        </ul> */}

                    <ul class="  my-2 my-lg-0">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
                    </ul>

                    <ul class="  my-2 my-lg-0">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">SignUp</button>
                    </ul>
                </div>
            </nav>

            {/* </header> */}
            <br></br><br></br>
        </React.Fragment>
    );
}

export default Header;