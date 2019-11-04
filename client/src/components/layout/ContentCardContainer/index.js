// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt from "jsonwebtoken";
import axios from "axios";
import is from "is_js";
import CardColumns from "react-bootstrap/Card";
// ---- COMPONENTS / COMPONENT:
// import PlaylistTitle from "../../component/PlaylistTitle";
import ContentCard from "../../component/ContentCard";
// ---- files:
import "./style.css";

class ContentCardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };

    var token = localStorage.getItem("jsonwebtoken");
    if (token !== null) {
      var decodedToken = jwt.decode(token);
      this.state.username = decodedToken.username;
    }
  }

  componentDidMount() {
    //get data on all channels for a user, set it in the state.
    const params = this.props.match.params;
    const match = this.props.match;
    var self = this;
    if (match.path.includes("channel")) {
      axios
        .post("/api/playlist/fetch", { channel: params.channelId })
        .then(function(response) {
          if (response.data !== self.state.playlistData) {
            self.setState({ playlistData: response.data });
          }
        });
    } else if (match.path.includes("playlist")) {
      axios
        .post("api/playlist/fetch", { playlist: params.playlistId })
        .then(function(response) {
          self.setState({ selectedPlaylist: response.data });
        });
      /*var playlistId = params.playlistId;
      var selectedPlaylist = null;
      self.state.playlistData.forEach(function(playlistElement) {
        if (playlistElement._id === playlistId) {
          selectedPlaylist = playlistElement;
        }
      });
      if (selectedPlaylist !== self.setState.selectedPlaylist) {
        self.setState({ selectedPlaylist: selectedPlaylist });
      }
*/
    } else {
      axios
        .post("/api/channel/fetch", { user: this.state.username })
        .then(function(response) {
          if (response.data.success) {
            self.setState({ channelData: response.data.channels });
          }
        });
    }
  }

  /*
  refreshComponentData(bool) {
    console.log("updated");
    const params = this.props.match.params;
    const match = this.props.match;
    var self = this;
    if (match.path.includes("channel")) {
      axios
        .post("/api/playlist/fetch", { channel: params.channelId })
        .then(function(response) {
          if (response.data !== self.state.playlistData) {
            self.setState({ playlistData: response.data });
          }
        });
    } else if (match.path.includes("playlist")) {
      var playlistId = params.playlistId;
      var selectedPlaylist = null;
      self.state.playlistData.forEach(function(playlistElement) {
        if (playlistElement._id === playlistId) {
          selectedPlaylist = playlistElement;
        }
      });
      if (selectedPlaylist !== self.setState.selectedPlaylist) {
        self.setState({ selectedPlaylist: selectedPlaylist });
      }
    }
  }
  */

  //if route '/', render based on channelData content, show all channels for current user.

  render() {
    var userCards = this.createUserCards();
    var channelCards = this.createChannelCards();
    var playlistCards = this.createPlaylistCards();
    var match = this.props.match;
    if (match.path.includes("channel")) {
      return (
        <React.Fragment>
          <div class="container">
            <CardColumns>{channelCards}</CardColumns>
          </div>
        </React.Fragment>
      );
    } else if (match.path.includes("playlist")) {
      return (
        <React.Fragment>
          <div class="container">
            <CardColumns>{playlistCards}</CardColumns>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div class="container">
            <CardColumns>{userCards}</CardColumns>
          </div>
        </React.Fragment>
      );
    }
    /*
      return (
      <React.Fragment>
        <div class="container">
          <Router>
            <Route exact path="/">
              <CardColumns>{userCards}</CardColumns>
            </Route>
            <Route path="/channel/:channelId">{channelCards}</Route>
            <Route path="/playlist/:playlistId">{playlistCards}</Route>
          </Router>
        </div>
        {/*
                   <footer class="page-footer font-small mdb-color lighten-3 pt-0 videoRow">
                   <div class="container">
		   <Router>
		   <Route exact path="/channels" component={this.createCards({type: "channel"})} />
		   <Route path="/playlists/:id" component={this.createCards({type: "playlist" })} />
		   </Router>
                   <div class="row">
                   </div>
                   </footer>
		 
      </React.Fragment>
    );
*/
  }

  createUserCards = () => {
    if (is.existy(this.state.channelData)) {
      var cards = [];
      var self = this;
      console.log(this.state.channelData);
      this.state.channelData.forEach(function(contentElement) {
        cards.push(
          <ContentCard
            title={contentElement.title}
            description={contentElement.description}
            url={`/channel/${contentElement._id}`}
          />
        );
      });
      return is.empty(cards) ? null : cards;
    } else {
      return null;
    }
  };

  createChannelCards = () => {
    if (is.existy(this.state.playlistData)) {
      var cards = [];
      this.state.playlistData.forEach(function(contentElement) {
        cards.push(
          <ContentCard
            title={contentElement.title}
            description={contentElement.description}
            url={`/playlist/${contentElement._id}`}
          />
        );
      });
      return is.empty(cards) ? null : cards;
    } else {
      return null;
    }
  };

  createPlaylistCards = () => {
    if (is.existy(this.state.selectedPlaylist)) {
      var cards = [];
      this.state.selectedPlaylist.content.forEach(function(contentElement) {
        cards.push(
          <ContentCard
            title={contentElement.title}
            thumbnailUrl={contentElement.thumbnailUrl}
            url={contentElement.contentUrl}
          />
        );
      });
      return is.empty(cards) ? null : cards;
    } else {
      return null;
    }
  };
}

export default ContentCardContainer;
