// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import jwt from 'jsonwebtoken';
import 'bootstrap/dist/css/bootstrap.min.css';

// ---- PAGES:
import Home from "./components/pages/Home";
import NotFound from "./components/pages/other/NotFound";
// ---- LAYOUTS:
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
// files:
import './App.css';


function App() {
    return (

        <Router>

            <Route path="/" component={Header} />

            <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route path="/home" component={Home} /> */}
                <Route component={NotFound} />
                {/* <Redirect to="/404" /> */}
            </Switch>

            <Route path="/" component={Footer} />

        </Router>

    );
}

export default App;