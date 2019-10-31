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
// files:
import "./style.css";
import ProfilePic from "./profile-pic.png";


export default class ContactForm extends React.Component {

    render() {
        return (
            <Dropzone
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop.bind(this)}>
                <p>Drop an image or click to select a file to upload.</p>
            </Dropzone>
        )

    }
}


    // class UserIntro extends Component {
    //     render() {
    //         return (
    //             <React.Fragment>


    //                 <Router>
    //                     <Route>

    //                     </Route>
    //                 </Router>


    //             </React.Fragment >
    //         );
    //     }
    // }

    // export default UserIntro;