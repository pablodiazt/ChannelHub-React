// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// ---- PAGES:
import Login from "./Login"
import SignUp from "./SignUp";
// ---- LAYOUT:
import Header from "../layout/Header"
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import VideoPlaylist from "../layout/VideoPlaylist";
// ---- COMPONENT:
import SearchBar from "../component/SearchBar";


class Home extends Component {
    render() {
        return (
            <React.Fragment>

                <Router>
                    <Route path="/" component={Header} />
                    <Route path="/" component={Navbar} />
                    <Route path="/" component={SearchBar} />
                    <Route path="/" component={VideoPlaylist} />
                    <Route path="/" component={Footer} />
                </Router>

            </React.Fragment>
        );
    }

}

export default Home;