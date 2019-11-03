// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import jwt from 'jsonwebtoken';

// ---- PAGES:
import ChannelPlaylist from "./ChannelPlaylist";
// ---- LAYOUTS:
// ---- COMPONENTS:


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