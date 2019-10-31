// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// ---- LAYOUTS:
import UserIntro from "../layout/UserIntro";
import ContentCardContainer from "../layout/ContentCardContainer";
// ---- COMPONENTS:
import UserPortrait from "../component/UserPortrait";


class UserProfile extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/profile" component={UserPortrait} />
                <Route exact path="/profile" component={UserIntro} />
                <Route exact path="/profile" component={ContentCardContainer} />
            </React.Fragment>
        );
    }
}

export default UserProfile;