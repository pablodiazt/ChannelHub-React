// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt from 'jsonwebtoken';

// ---- COMPONENTS / COMPONENT:
import PlaylistTitle from "../../component/PlaylistTitle"
import ContentCard from "../../component/ContentCard";
// ---- files:
import './style.css';


class ContentCardContainer extends Component {
    constructor(props) {
        super(props);
	this.state = {
	    username: '',
	    channelData: {},
	    playlistData: {title: "first playlist!",
			   description: "this is a playlist!",
			   content: [
			       { title: "first video",
				 url: "https://www.youtube.com/watch?v=nlxu5dDwhO0",
				 backend: 'react-player',
				 thumbnailUrl: "https://i.ytimg.com/vi/nlxu5dDwhO0/hqdefault.jpg"
			       },
			       { title: "this other video",
				 url: "https://www.youtube.com/watch?v=U7nJBFjKqAY",
				 backend: 'react-player',
				 thumbnailUrl: "https://i.ytimg.com/vi/U7nJBFjKqAY/hqdefault.jpg"
			       }
			   ]
			  },
	    isPlaylist: true
	}
	
	var token = localStorage.getItem("jsonwebtoken");
	if(token !== null) {
            var decodedToken = jwt.decode(token);
	    this.state.username = decodedToken.username;
	}
    }

    createCards= () => {
	var cards = []
	this.state.playlistData.content.forEach(function(contentElement) {
	    cards.push(<ContentCard title={contentElement.title} backend={contentElement.backend} thumbnailUrl={contentElement.thumbnailUrl} url={contentElement.url} />);
	});
	return cards;
    }

    render() {
        return (
		<React.Fragment>
                {/* -------------- MULTIPLE IMAGES */}
                <footer class="page-footer font-small mdb-color lighten-3 pt-0 videoRow">

            {/* <!-- Footer Elements --> */}
                <div class="container">

            {/* <!--Grid row--> */}
		<div class="row">
		{this.createCards()}
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
