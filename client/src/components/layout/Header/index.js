// dependencies:
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// ---- PAGES:
import Login from "../../pages/Login";
import SignUp from "../../pages/SignUp"
// ---- LAYOUT:
// ---- COMPONENTS / COMPONENT:
import SearchBar from "../../component/SearchBar";
import Logo from "../../component/Logo";
// ---- files:
import "./style.css";


class Header extends React.Component {
    render() {
        return (
            <React.Fragment>

                <nav class="navbar navbar-expand-sm py-0 my-0 mr-0 mr-sm-0 ml-5">

                    <Route path="/" component={Logo} />
                    <Route path="/" component={SearchBar} />


                    {/* ? */}
                    {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}


                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

                        {/* ---- LOGIN */}
                        <ul class="ml-5 mr-0 my-2 my-lg-0">
                            {/* <button class="btn btn-secondary btn-sm my-2 my-sm-0" type="button" >Login</button> */}
                            <Link class="btn btn-secondary btn-sm my-2 my-sm-0" to="/login">Login</Link>
                        </ul>


                        {/* ---- SIGNUP */}
                        <ul class="ml-0 my-2 my-lg-0">
                            {/* <button onClick={() => history.push('signup')} class="btn btn-secondary btn-sm my-2 my-sm-0" type="button"> SignUp</button> */}
                            <Link class="btn btn-secondary btn-sm my-2 my-sm-0" to="/signup">SignUp</Link>
                        </ul>

                    </div>
                </nav>

            </React.Fragment >
        );
    }
}


export default Header;
