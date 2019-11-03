// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
                    <Route path="/" component={PlaylistName} />
                    <Route path="/" component={VideosRow} />
                    <Route path="/" component={VideosRow} />
                    <Route path="/" component={VideosRow} />
                    <Route path="/" component={PlaylistName} />
                    <Route path="/" component={VideosRow} />
                    <Route path="/" component={PlaylistName} />
                    <Route path="/" component={VideosRow} />
                    <Route path="/" component={VideosRow} />
                    <Route path="/" component={PlaylistName} />
                    <Route path="/" component={VideosRow} />
                    <Route path="/" component={PlaylistName} />
                    <Route path="/" component={VideosRow} />
                    <Route path="/" component={VideosRow} />
                    <Route path="/" component={VideosRow} />
                    <Route path="/" component={PlaylistName} />
                    <Route path="/" component={VideosRow} />
                    <Route path="/" component={VideosRow} />
                </Router>





            </React.Fragment>
        );
    }

}

export default Home;