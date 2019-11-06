// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import jwt from 'jsonwebtoken';
import 'bootstrap/dist/css/bootstrap.min.css';

// ---- PAGES:
import SignUp from "./components/pages/other/SignUp";
import Login from "./components/pages/other/Login";
// import Logout from "./Logout";
import Home from "./components/pages/Home";
import UserProfile from "./components/pages/other/UserProfile";
import NotFound from "./components/pages/other/NotFound";
// ---- LAYOUTS:
import Header from "./components/layouts/Header";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
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

// function Logout() {
//     localStorage.removeItem("jsonwebtoken");
//     return (
//         <Redirect to='/' />
//     );
// }


function App() {
    return (
        <Router>


            <Route path="/" component={Header} />
            <Route exact path="/" component={Navbar} />

            <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route path="/home" component={Home} /> */}

                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/login" component={Login} />
                {/* <Route exact path="/logout" component={Logout} /> */}

                <Route exact path="/profile" component={UserProfile} />

                <Route component={NotFound} />
                {/* <Redirect to="/404" /> */}
            </Switch>

            <Route path="/" component={Footer} />


        </Router>
    );
}

export default App;