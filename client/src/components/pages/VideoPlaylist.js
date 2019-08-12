// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// ---- COMPONENTS / LAYOUT:
import Header from "../layout/Header"
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
// ---- COMPONENTS / COMPONENT:
import SearchBar from "../component/SearchBar";
import Videos from "../component/VideosRow";
import PlaylistName from "../component/PlaylistName"


class Home extends Component {
    render() {
        return (
            <React.Fragment>



                <Router>
                    <Route exact path="/" component={PlaylistName} />
                    <Route exact path="/" component={Videos} />
                    <Route exact path="/" component={PlaylistName} />
                    <Route exact path="/" component={Videos} />
                    <Route exact path="/" component={PlaylistName} />
                    <Route exact path="/" component={Videos} />
                    <Route exact path="/" component={PlaylistName} />
                    <Route exact path="/" component={Videos} />
                </Router>





                {/* ---------------------------------- COLLAPSE */}
                {/* <div class="pos-f-t">
                    <div class="collapse" id="navbarToggleExternalContent">
                        <div class="bg-dark p-4">
                            <h4 class="text-white">Collapsed content</h4>
                            <span class="text-muted">Toggleable via the navbar brand.</span>
                        </div>
                    </div>
                    <nav class="navbar navbar-dark bg-dark">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </nav>
                </div> */}





            </React.Fragment>
        );
    }

}

export default Home;