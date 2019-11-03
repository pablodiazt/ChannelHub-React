// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// ---- LAYOUTS:
import UserIntro from "../../layouts/UserIntro";
import Navbar from "../../layouts/Navbar";
import ContentCardContainer from "../../layouts/ContentCardContainer";
// ---- COMPONENTS:
import UserPortrait from "../../components/UserPortrait";


class UserProfile extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/profile" component={UserPortrait} />
                <Route exact path="/profile" component={UserIntro} />
                <Route exact path="/profile" component={Navbar} />
                <Route exact path="/profile" component={ContentCardContainer} />
            </React.Fragment>
        );
    }
}

export default UserProfile;