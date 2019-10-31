// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import axios from 'axios';

// ---- LAYOUTS:
import ContentCard from "../ContentCardContainer"
// ---- COMPONENTS:
import Portrait from "../../component/UserPortrait";
// files:
import "./style.css";


class UserIntro extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Route>

                    </Route>
                </Router>



            </React.Fragment >
        );
    }
}

export default UserIntro;
