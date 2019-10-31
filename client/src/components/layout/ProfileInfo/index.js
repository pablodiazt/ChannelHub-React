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


                <Link>james.rm</Link>

                <Link>3 Channels</Link>
                <Link>955k followers</Link>
                <Link>following 77 people</Link>
                <Link>subscribed to 66 channels</Link>


            </React.Fragment >
        );
    }
}

export default ProfileInfo;