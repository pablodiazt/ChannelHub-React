import React from "react";
import "./style.css";

const SearchBar = () => {
    return (
        <React.Fragment>



{/* ------------------------- */}


{/* <!-- Footer --> */}
<footer class="page-footer font-small special-color-dark pt-4">

  {/* <!-- Footer Elements --> */}
  <div class="container">

    {/* <!--Grid row--> */}
    <div class="row">

      {/* <!--Grid column--> */}
      <div class="col-md-6 mb-2 ml-3">

        {/* <!-- Form --> */}
        <form class="form-inline text-center">
          <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
            aria-label="Search"></input>
          <i class="fas fa-search" aria-hidden="true"></i>
        </form>
        {/* <!-- Form --> */}

      </div>
      {/* <!--Grid column--> */}



    </div>
    {/* <!--Grid row--> */}

  </div>
  {/* <!-- Footer Elements --> */}


</footer>


        </React.Fragment>
    )
}


export default SearchBar;
