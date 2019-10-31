// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import jwt from 'jsonwebtoken';

import 'bootstrap/dist/css/bootstrap.min.css';

// ---- PAGES:
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import UserProfile from "./components/pages/UserProfile";
// import Logout from "./components/pages/Logout";
import NotFound from "./components/pages/NotFound";
// ---- LAYOUTS:
import Header from "./components/layout/Header"
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
// files:
import './App.css';


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

function Logout() {
    localStorage.removeItem("jsonwebtoken");
    return (
        <Redirect to='/' />
    );
}

function App() {
    return (

        <Router>
            {/* <Switch> */}

            <Route path="/" component={Header} />
            <Route path="/" component={Navbar} />

            <Route exact path="/" component={Home} />
            {/* <Route exact path="/home" component={Home} /> */}

            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/profile" component={UserProfile} />

            <Route exact path="/404" component={NotFound} />
            {/* <Redirect to="/404" /> */}

            <Route path="/" component={Footer} />

            {/* </Switch> */}
        </Router>

    );
}

export default App;