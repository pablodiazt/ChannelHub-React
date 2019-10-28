// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// ---- LAYOUT:
import SignUpForm from "../layout/SignUpForm";
// ---- COMPONENT:


class SignUp extends Component {
    render() {
        return (
            <React.Fragment>



                <Router>
                    <Route path="/" component={SignUpForm} />
                </Router>



            </React.Fragment>
        );
    }

}


export default SignUp;