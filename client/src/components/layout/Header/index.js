import React from "react";
import "./style.css";


function Header() {
    return (
        <React.Fragment>


            <nav class="navbar navbar-expand-sm py-0 my-0 mr-0 mr-sm-0 ml-5">

                <a class="navbar-brand" href="#">
                    <h2 class="logo-PrtOne">Channel</h2><h2 class="logo-PrtTwo">Hub</h2>
                </a>

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

                    <ul class="ml-5 mr-0 my-2 my-lg-0">
                        <button class="btn btn-secondary btn-sm my-2 my-sm-0" type="button" >Login</button>
                    </ul>

                    <ul class="ml-0 my-2 my-lg-0">
                        <button class="btn btn-secondary btn-sm my-2 my-sm-0" type="button" >SignUp</button>
                    </ul>
                </div>
            </nav>



        </React.Fragment>
    );
}

export default Header;