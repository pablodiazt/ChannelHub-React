// dependencies:
import React from "react";
// import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import axios from 'axios';

// ---- LAYOUTS:
import UserIntro from "../layout/UserIntro";
import ContentCardContainer from "../layout/ContentCardContainer";
// ---- COMPONENTS:


class UserProfile extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={UserIntro} />
                <Route exact path="/" component={ContentCardContainer} />
            </React.Fragment>
        );
    }
}


export default UserProfile;