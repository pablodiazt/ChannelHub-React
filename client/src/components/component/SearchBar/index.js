import React from "react";
import "./style.css";

const SearchBar = () => {
    return (
        <React.Fragment>


<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

{/* ------------------------- */}


{/* <!-- Footer --> */}
<footer class="page-footer font-small special-color-dark pt-4">

  {/* <!-- Footer Elements --> */}
  <div class="container">

    {/* <!--Grid row--> */}
    <div class="row">

      {/* <!--Grid column--> */}
      <div class="col-md-6 mb-4">

        {/* <!-- Form --> */}
        <form class="form-inline">
          <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
            aria-label="Search"></input>
          <i class="fas fa-search" aria-hidden="true"></i>
        </form>
        {/* <!-- Form --> */}

      </div>
      {/* <!--Grid column--> */}

      {/* <!--Grid column--> */}
      <div class="col-md-6 mb-4">

        <form class="input-group">
          <input type="text" class="form-control form-control-sm" placeholder="Your email"
            aria-label="Your email" aria-describedby="basic-addon2"></input>
          <div class="input-group-append">
            <button class="btn btn-sm btn-outline-white my-0" type="button">Sign up</button>
          </div>
        </form>

      </div>
      {/* <!--Grid column--> */}

    </div>
    {/* <!--Grid row--> */}

  </div>
  {/* <!-- Footer Elements --> */}

  {/* <!-- Copyright --> */}
  <div class="footer-copyright text-center py-3">© 2018 Copyright:
    <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
  </div>
  {/* <!-- Copyright --> */}

</footer>


        </React.Fragment>
    )
}


export default SearchBar;
