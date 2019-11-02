// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// ---- LAYOUTS:
import ProfileInfo from "../ProfileInfo";
// ---- COMPONENTS:
import ProfilePicture from "../../components/ProfilePicture";
import Bio from "../../components/Bio";
import FollowedBy from "../../components/FollowedBy";
// files:
import "./style.css";


class UserIntro extends Component {
    render() {
        return (
            <React.Fragment>


                <Router>

                    <Route path="/" component={ProfilePicture} />

                    <div className="profile-middle">
                        <Route path="/" component={ProfileInfo} />
                        <Route path="/" component={Bio} />
                        <Route path="/" component={FollowedBy} />
                    </div>

                </Router>


            </React.Fragment >
        );
    }
}

export default UserIntro;