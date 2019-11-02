// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";

// ---- COMPONENTS:
// files:
import "./style.css";



class ProfileInfo extends Component {
    render() {
        return (
            <React.Fragment>


                <Link className="userName">james.rm</Link>

                <Link className="channels">3 Channels</Link>
                <Link className="followers">955k followers</Link>

                <Link className="following">following 77 people</Link>
                <div><Link className="subscribed">subscribed to 66 channels</Link></div>


            </React.Fragment >
        );
    }
}

export default ProfileInfo;