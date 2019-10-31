// dependencies:
// import React from 'react';
import React, { Component } from "react";
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// ---- LAYOUTS:
import ContentCard from "../ContentCardContainer"
// ---- COMPONENTS:
import Portrait from "../../component/UserPortrait";
import ProfilePicture from "../../component/ProfilePicture";
// files:
import "./style.css";



class UserIntro extends Component {
    render() {
        return (
            <React.Fragment>


                <Router>
                    <Route path="/" component={ProfilePicture} />
                </Router>


            </React.Fragment >
        );
    }
}

export default UserIntro;