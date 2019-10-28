// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// ---- COMPONENTS / COMPONENT:
import PlaylistTitle from "../../component/PlaylistTitle"
import ContentCard from "../../component/ContentCard";
// ---- files:
import './style.css';


class ContentCardContainer extends Component {
    render() {
        return (
            <React.Fragment>



                {/* For each playlist in playlistDB, videosPerRow = videosCount/5. for videosPerRow, and create {PlaylistName} & {VideosRow}. For each video in corresponding playlist, playlistDB on  playlist Count videos per playlist on db, add as many videos to each playlist */}


                {/* -------------- MULTIPLE IMAGES */}
                <footer class="page-footer font-small mdb-color lighten-3 pt-0 videoRow">

                    {/* <!-- Footer Elements --> */}
                    <div class="container">

                        {/* <!--Grid row--> */}
                        <div class="row">



                            {/* <!--------------Grid column--> */}
                            <div class="col-lg-2 col-md-12 mb-4">
                                {/* <!--ContentCard--> */}
                                <ContentCard />
                                {/* <ContentCard url=var.url /> */}
                            </div>


                            {/* <!--------------Grid column--> */}
                            <div class="col-lg-2 col-md-6 mb-4">
                                {/* <!--Image--> */}
                                <ContentCard />
                            </div>




                        </div>
                        {/* <!--Grid row--> */}

                    </div>
                    {/* <!-- Footer Elements --> */}

                </footer>
                {/* -------------- MULTIPLE IMAGES */}





            </React.Fragment>
        );
    }
}


export default ContentCardContainer;