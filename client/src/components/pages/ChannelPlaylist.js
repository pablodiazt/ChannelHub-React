// -- linked from home
// -- link to channel or videoplaylist

// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import jwt from 'jsonwebtoken';

// ---- PAGES:
// ---- LAYOUTS:
// ---- COMPONENTS:
import ContentCardContainer from "../layouts/ContentCardContainer";


class ChannelPlaylist extends Component {
    render() {

        var token = localStorage.getItem("jsonwebtoken");
        if(token !== null) {
            var decodedToken = jwt.decode(token);
            var username = decodedToken.username;
            // var token = localStorage.getItem("jsonwebtoken");
            // if(token !== null) {
            //     var decodedToken = jwt.decode(token);
            //     var username = decodedToken.username;
            //     return (
            //         <div>
            //             <h1> home</h1>
            //             <h3> Welcome, {username}!</h3>
            //         </div>
            //     );
            // }
            // return (
            //     <div>
            //         <h1> home</h1>
            //         <h3> Please login to continue.</h3>
            //     </div>
            // );
        }
        return (
            <React.Fragment>
                <Router>

                    <Route exact path="/" component={ContentCardContainer} />

                </Router>
            </React.Fragment>
        );

        //        return (
        //            <div class="formBox text-center">
        //                <h1>Welcome!</h1>
        //                <br />
        //                <h3 class="font-weight-bold text-secondary d-block">Please <Link to="/login" style={{ color: 'blue' }}>login</Link> to continue.</h3>
        //            </div>
        //        );

    }
}

export default ChannelPlaylist;