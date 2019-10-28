// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// ---- PAGES:
import Login from "./Login"
import SignUp from "./SignUp";
// ---- LAYOUTS:

import VideoPlaylist from "../layout/VideoPlaylist";
// ---- COMPONENTS:


class Home extends Component {

    render() {
        // var token = localStorage.getItem("jsonwebtoken");
        // if(token !== null) {
        //     var decodedToken = jwt.decode(token);
        //     var username = decodedToken.username;
        //     return (
        //         <div>
        //             <h1> home</h1>
        //             <h3> Welcome, {username}!</h3>
        //         </div>
        //     );
        // }
        // return (
        //     <div>
        //         <h1> home</h1>
        //         <h3> Please login to continue.</h3>
        //     </div>
        // );


        return (
            <React.Fragment>

                <Router>
                    <Route exact path="/" component={VideoPlaylist} />
                </Router>

            </React.Fragment>
        );
    }
}


export default Home;