// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from "react-router-dom";

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