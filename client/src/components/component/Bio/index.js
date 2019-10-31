// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// files:
import "./style.css";



class Bio extends Component {
    render() {
        return (
            <React.Fragment>

                <p className="bio">this is my bio... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

            </React.Fragment >
        );
    }
}

export default Bio;