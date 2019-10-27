// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";

import jwt from 'jsonwebtoken';

// ---- PAGES:
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";
import { NotFound } from "./components/pages/NotFound";

// files:
import './App.css';


function Home() {
    var token = localStorage.getItem("jsonwebtoken");
    if(token !== null) {
        var decodedToken = jwt.decode(token);
        var username = decodedToken.username;
        return (
            <div>
                <h1> home</h1>
                <h3> Welcome, {username}!</h3>
            </div>
        );
    }
    return (
        <div>
            <h1> home</h1>
            <h3> Please login to continue.</h3>
        </div>
    );
}

function Logout() {
    localStorage.removeItem("jsonwebtoken");
    return (
        <Redirect to='/' />
    );
}

function App() {
    return (

        // <BrowserRouter>
        <Router>
            <div className="App">

                <Link to='/'>Home</Link>
                <br />
                <Link to='/signup'>SignUp</Link>
                <br />
                <Link to='/login'>Login</Link>
                <br />
                <Link to='/logout'>Logout</Link>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/login" component={Login} />
                    <Route path="/logout" component={Logout} />
                    <Route component={NotFound} />
                </Switch>

            </div>
        </Router>
        // </BrowserRouter>

    );
}


export default App;