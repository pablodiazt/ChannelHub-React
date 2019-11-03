// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from "react-router-dom";
import jwt from 'jsonwebtoken';

// ---- PAGES:
import ChannelPlaylist from "./ChannelPlaylist";
// ---- LAYOUTS:
// ---- COMPONENTS:


// function Home() {
//     var token = localStorage.getItem("jsonwebtoken");
//     if(token !== null) {
//         var decodedToken = jwt.decode(token);
//         var username = decodedToken.username;
//         return (
//             <Redirect to="/" />
//             // <div>
//             //     <h1> home</h1>
//             //     <h3> Welcome, {username}!</h3>
//             // </div>
//         );
//     }
//     return (
//         <Redirect to="/" />
//         // <div>
//         //     <h1> home</h1>
//         //     <h3> Please login to continue.</h3>
//         // </div>
//     );
// }

// function Logout() {
//     localStorage.removeItem("jsonwebtoken");
//     return (
//         <Redirect to='/' />
//     );
// }

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>

                    <Route exact path="/" component={ChannelPlaylist} />

                </Router>
            </React.Fragment>
        );
    }
}

export default Home;