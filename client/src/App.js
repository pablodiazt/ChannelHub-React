import React, { Component } from "react";
// import { ToastContainer } from "react-toastify";
// import { Route, Redirect, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import SearchBar from "./components/component/SearchBar";
import Videos from "./components/component/Videos";
import Footer from "./components/layout/Footer";
// import Footer from "./components/layout/Footer/Footer";    
// import Header from "./components/layout/Footer/Header"; 

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    {/* <Header /> */}
                    <h2>Welcome to Your Time!</h2>
                    {/* <NavBar /> */}
                </div>






                {/* ----------------------------- NAVBAR */}


                <Router>
                    <Route exact path="/" component={Navbar} />
                    <Route exact path="/" component={SearchBar} />
                    <Route exact path="/" component={Videos} />
                    <Route exact path="/" component={Footer} />
                </Router>


                {/* --------------------------------- VIDEOS */}
                <div class="embed-responsive embed-responsive-1by1 w-25 p-3">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                </div>

                <div class="embed-responsive embed-responsive-1by1 w-25 p-3">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                </div>


                <footer class="page-footer font-small mdb-color darken-3 pt-4">

                    {/* <!-- Footer Elements --> */}
                    <div class="container">

                        {/* <!--Grid row--> */}
                        <div class="row d-flex justify-content-center">

                            {/* <!--Grid column--> */}
                            <div class="col-md-6">

                                {/* <!-- Video --> */}
                                <div class="embed-responsive embed-responsive-16by9 mb-4">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM"
                                        allowfullscreen></iframe>
                                </div>

                            </div>
                            {/* <!--Grid column--> */}

                        </div>
                        {/* <!--Grid row--> */}

                    </div>

                </footer>


                {/* --------------------- */}



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



            </div>


        );
    }
}

export default App;