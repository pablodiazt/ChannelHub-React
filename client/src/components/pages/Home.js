// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// ---- COMPONENTS / LAYOUT:
import Header from "../layout/Header"
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
// ---- COMPONENTS / COMPONENT:
import SearchBar from "../component/SearchBar";
import Videos from "../component/Videos";


class Home extends Component {
    render() {
        return (
            <React.Fragment>



                <Router>
                    <Route exact path="/" component={Header} />
                    <Route exact path="/" component={Navbar} />
                    <Route exact path="/" component={SearchBar} />
                    <Route exact path="/" component={Videos} />
                    <Route exact path="/" component={Footer} />
                </Router>





                {/* ---------------------------------- COLLAPSE */}
                <div class="pos-f-t">
                    <div class="collapse" id="navbarToggleExternalContent">
                        <div class="bg-dark p-4">
                            <h4 class="text-white">Collapsed content</h4>
                            <span class="text-muted">Toggleable via the navbar brand.</span>
                        </div>
                    </div>
                    <nav class="navbar navbar-dark bg-dark">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </nav>
                </div>


                {/* ----------- */}
                <div>
                    {/* <!-- Footer --> */}
                    <footer class="page-footer font-small mdb-color pt-4">

                        {/* <!-- Footer Links --> */}
                        <div class="container text-center text-md-left">

                            {/* <!-- Footer links --> */}
                            <div class="row text-center text-md-left mt-3 pb-3">

                                {/* <!-- Grid column --> */}
                                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 class="text-uppercase mb-4 font-weight-bold">Company name</h6>
                                    <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                          consectetur adipisicing elit.</p>
                                </div>
                                {/* <!-- Grid column --> */}

                                <hr class="w-100 clearfix d-md-none"></hr>

                                {/* <!-- Grid column --> */}
                                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
                                    <p>
                                        <a href="#!">MDBootstrap</a>
                                    </p>
                                    <p>
                                        <a href="#!">MDWordPress</a>
                                    </p>
                                    <p>
                                        <a href="#!">BrandFlow</a>
                                    </p>
                                    <p>
                                        <a href="#!">Bootstrap Angular</a>
                                    </p>
                                </div>
                                {/* <!-- Grid column --> */}

                                <hr class="w-100 clearfix d-md-none"></hr>

                                {/* <!-- Grid column --> */}
                                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                                    <p>
                                        <a href="#!">Your Account</a>
                                    </p>
                                    <p>
                                        <a href="#!">Become an Affiliate</a>
                                    </p>
                                    <p>
                                        <a href="#!">Shipping Rates</a>
                                    </p>
                                    <p>
                                        <a href="#!">Help</a>
                                    </p>
                                </div>

                                {/* <!-- Grid column --> */}
                                <hr class="w-100 clearfix d-md-none"></hr>

                                {/* <!-- Grid column --> */}
                                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                    <p>
                                        <i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                                    <p>
                                        <i class="fas fa-envelope mr-3"></i> info@gmail.com</p>
                                    <p>
                                        <i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                    <p>
                                        <i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
                                </div>
                                {/* <!-- Grid column --> */}

                            </div>
                            {/* <!-- Footer links --> */}

                            <hr></hr>

                            {/* <!-- Grid row --> */}
                            <div class="row d-flex align-items-center">

                                {/* <!-- Grid column --> */}
                                <div class="col-md-7 col-lg-8">

                                    {/* <!--Copyright--> */}
                                    <p class="text-center text-md-left">© 20 Copyright:
                                            <a href="https://mdbootstrap.com/education/bootstrap/">
                                            <strong> MDBootstrap.com</strong>
                                        </a>
                                    </p>

                                </div>
                                {/* <!-- Grid column --> */}

                                {/* <!-- Grid column --> */}
                                <div class="col-md-5 col-lg-4 ml-lg-0">

                                    {/* <!-- Social buttons --> */}
                                    <div class="text-center text-md-right">
                                        <ul class="list-unstyled list-inline">
                                            <li class="list-inline-item">
                                                <a class="btn-floating btn-sm rgba-white-slight mx-1">
                                                    <i class="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a class="btn-floating btn-sm rgba-white-slight mx-1">
                                                    <i class="fab fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a class="btn-floating btn-sm rgba-white-slight mx-1">
                                                    <i class="fab fa-google-plus-g"></i>
                                                </a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a class="btn-floating btn-sm rgba-white-slight mx-1">
                                                    <i class="fab fa-linkedin-in"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                                {/* <!-- Grid column --> */}

                            </div>
                            {/* <!-- Grid row --> */}

                        </div>
                        {/* <!-- Footer Links --> */}

                    </footer>
                    {/* <!-- Footer --> */}
                </div>





            </React.Fragment>
        );
    }

}

export default Home;