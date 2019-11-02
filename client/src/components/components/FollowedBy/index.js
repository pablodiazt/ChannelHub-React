// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";

// files:
import "./style.css";



class FollowedBy extends Component {
    render() {
        return (
            <React.Fragment>

                <Link>followed by eric.ln</Link>

            </React.Fragment >
        );
    }
}

export default FollowedBy;