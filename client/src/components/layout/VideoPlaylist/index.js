// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// ---- COMPONENTS / LAYOUT:
// ---- COMPONENTS / COMPONENT:
import VideosRow from "../../component/VideosRow";
import PlaylistName from "../../component/PlaylistTitle"
// ---- files:
import './style.css';


class Home extends Component {
    render() {
        return (
            <React.Fragment>


                {/* For each playlist in playlistDB, videosPerRow = videosCount/5. for videosPerRow, and create {PlaylistName} & {VideosRow}. For each video in corresponding playlist, playlistDB on  playlist Count videos per playlist on db, add as many videos to each playlist */}
                <Router>
                    <Route exact path="/" component={PlaylistName} />
                    <Route exact path="/" component={VideosRow} />
                    <Route exact path="/" component={PlaylistName} />
                    <Route exact path="/" component={VideosRow} />
                    <Route exact path="/" component={PlaylistName} />
                    <Route exact path="/" component={VideosRow} />
                    <Route exact path="/" component={PlaylistName} />
                    <Route exact path="/" component={VideosRow} />
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