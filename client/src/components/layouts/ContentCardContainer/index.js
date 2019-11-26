// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt from 'jsonwebtoken';

// ---- COMPONENTS / COMPONENT:
import PlaylistTitle from "../../components/PlaylistTitle"
import ContentCard from "../../components/ContentCard";
// ---- files:
import './style.css';


class ContentCardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            channelData: {},
            playlistData: {
                title: "first playlist!",
                description: "this is a playlist!",
                content: [
                    {
                        title: "first video",
                        url: "https://www.youtube.com/watch?v=nlxu5dDwhO0",
                        backend: 'react-player',
                        thumbnailUrl: "https://i.ytimg.com/vi/nlxu5dDwhO0/hqdefault.jpg"
                    },
                    {
                        title: "this other video",
                        url: "https://www.youtube.com/watch?v=U7nJBFjKqAY",
                        backend: 'react-player',
                        thumbnailUrl: "https://i.ytimg.com/vi/U7nJBFjKqAY/hqdefault.jpg"
                    },
                    {
                        title: "this other video",
                        url: "https://www.youtube.com/watch?v=U7nJBFjKqAY",
                        backend: 'react-player',
                        thumbnailUrl: "https://i.ytimg.com/vi/U7nJBFjKqAY/hqdefault.jpg"
                    },
                    {
                        title: "this other video",
                        url: "https://www.youtube.com/watch?v=U7nJBFjKqAY",
                        backend: 'react-player',
                        thumbnailUrl: "https://i.ytimg.com/vi/U7nJBFjKqAY/hqdefault.jpg"
                    },
                    {
                        title: "this other video",
                        url: "https://www.youtube.com/watch?v=U7nJBFjKqAY",
                        backend: 'react-player',
                        thumbnailUrl: "https://i.ytimg.com/vi/U7nJBFjKqAY/hqdefault.jpg"
                    },
                    {
                        title: "this other video",
                        url: "https://www.youtube.com/watch?v=U7nJBFjKqAY",
                        backend: 'react-player',
                        thumbnailUrl: "https://i.ytimg.com/vi/U7nJBFjKqAY/hqdefault.jpg"
                    },
                    {
                        title: "this other video",
                        url: "https://www.youtube.com/watch?v=U7nJBFjKqAY",
                        backend: 'react-player',
                        thumbnailUrl: "https://i.ytimg.com/vi/U7nJBFjKqAY/hqdefault.jpg"
                    },
                    {
                        title: "this other video",
                        url: "https://www.youtube.com/watch?v=U7nJBFjKqAY",
                        backend: 'react-player',
                        thumbnailUrl: "https://i.ytimg.com/vi/U7nJBFjKqAY/hqdefault.jpg"
                    }
                ]
            },
            isPlaylist: true,
            username: '',
            channelData: {},
            playlistData: {
                title: "first playlist!",
                description: "this is a playlist!",
                content: [
                    {
                        title: "first video",
                        url: "https://www.youtube.com/watch?v=nlxu5dDwhO0",
                        backend: 'react-player',
                        thumbnailUrl: "https://i.ytimg.com/vi/nlxu5dDwhO0/hqdefault.jpg"
                    },
                    {
                        title: "this other video",
                        url: "https://www.youtube.com/watch?v=U7nJBFjKqAY",
                        backend: 'react-player',
                        thumbnailUrl: "https://i.ytimg.com/vi/U7nJBFjKqAY/hqdefault.jpg"
                    },
                    {
                        title: "this other video",
                        url: "https://www.youtube.com/watch?v=U7nJBFjKqAY",
                        backend: 'react-player',
                        thumbnailUrl: "https://i.ytimg.com/vi/U7nJBFjKqAY/hqdefault.jpg"
                    },
                    {
                        title: "this other video",
                        url: "https://www.youtube.com/watch?v=U7nJBFjKqAY",
                        backend: 'react-player',
                        thumbnailUrl: "https://i.ytimg.com/vi/U7nJBFjKqAY/hqdefault.jpg"
                    },
                    {
                        title: "this other video",
                        url: "https://www.youtube.com/watch?v=U7nJBFjKqAY",
                        backend: 'react-player',
                        thumbnailUrl: "https://i.ytimg.com/vi/U7nJBFjKqAY/hqdefault.jpg"
                    },
                    {
                        title: "this other video",
                        url: "https://www.youtube.com/watch?v=U7nJBFjKqAY",
                        backend: 'react-player',
                        thumbnailUrl: "https://i.ytimg.com/vi/U7nJBFjKqAY/hqdefault.jpg"
                    },
                    {
                        title: "this other video",
                        url: "https://www.youtube.com/watch?v=U7nJBFjKqAY",
                        backend: 'react-player',
                        thumbnailUrl: "https://i.ytimg.com/vi/U7nJBFjKqAY/hqdefault.jpg"
                    },
                    {
                        title: "this other video",
                        url: "https://www.youtube.com/watch?v=U7nJBFjKqAY",
                        backend: 'react-player',
                        thumbnailUrl: "https://i.ytimg.com/vi/U7nJBFjKqAY/hqdefault.jpg"
                    }
                ]
            },
            isPlaylist: true,
        }

        var token = localStorage.getItem("jsonwebtoken");
        if(token !== null) {
            var decodedToken = jwt.decode(token);
            this.state.username = decodedToken.username;
        }
    }

    createCards = () => {
        var cards = []
        this.state.playlistData
        this.state.playlistData.content.forEach(function (contentElement) {
            cards.push(<ContentCard title={contentElement.title} backend={contentElement.backend} thumbnailUrl={contentElement.thumbnailUrl} url={contentElement.url} />);
        });
        return cards;
    }

    render() {
        return (
            <React.Fragment>



                {/* -------------- PLAYLIST */}
                <div class="playlistContainer">

                    {/* <!-- Elements --> */}
                    <div class="container">

                        {/* <!--CARD--> */}
                        <div class="row">
                            <PlaylistTitle />
                            {this.createCards()}
                        </div>
                        {/* <!--CARD--> */}

                    </div>
                    {/* <!-- Elements --> */}

                </div>
                {/* -------------- PLAYLIST */}



                {/* -------------- PLAYLIST */}
                {/* <div class="playlistContainer"> */}

                {/* <!-- Elements --> */}
                {/* <div class="container"> */}

                {/* <!--CARD--> */}
                {/* <div class="row">
                            <PlaylistTitle />
                            {this.createCards()}
                        </div> */}
                {/* <!--CARD--> */}

                {/* </div> */}
                {/* <!-- Elements --> */}

                {/* </div> */}
                {/* -------------- PLAYLIST */}



            </React.Fragment>
        );
    }
}

export default ContentCardContainer;