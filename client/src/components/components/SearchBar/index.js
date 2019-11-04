import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import "./style.css";

const SearchBar = () => {
    return (
        <React.Fragment>



            <div class="col-md-7 mb-2 mt-2 ml-0 mr-0">
                {/* <!-- Form --> */}
                <form class="form-inline text-center">
                    <input class="form-control form-control-sm ml-0 mr-0 w-75" type="text" placeholder="Search"
                        aria-label="Search"></input>
                    <i class="fas fa-search" aria-hidden="true"></i>
                </form>
                {/* <!-- Form --> */}
            </div>




            {/* <!-- Footer Elements --> */}
            {/* <div class="container"> */}

            {/* <!--Grid row--> */}
            {/* <div class="row"> */}

            {/* <!--Grid column--> */}
            {/* <div class="col-md-10 mb-2 mt-2 ml-0 mr-0 aaa"> */}
            {/* <!-- Form --> */}
            {/* <form class="form-inline text-center">
                                <input class="form-control form-control-sm ml-0 mr-0 w-75" type="text" placeholder="Search"
                                    aria-label="Search"></input>
                                <i class="fas fa-search" aria-hidden="true"></i>
                            </form> */}
            {/* <!-- Form --> */}
            {/* </div> */}
            {/* <!--Grid column--> */}


            {/* </div> */}
            {/* <!--Grid row--> */}

            {/* </div> */}
            {/* <!-- Footer Elements --> */}



        </React.Fragment>
    )
}


export default SearchBar;
