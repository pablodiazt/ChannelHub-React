// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import axios from 'axios';
import Card from 'react-bootstrap/Card';

// ---- COMPONENTS:
// files:
import "./style.css";


class ContentCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.backend == 'playlist') {
            console.log("playlist");
            var link = '/playlist/' + this.props.playlistID;
            return (
                <React.Fragment>

                    <Card style={{ width: '13rem' }}>
                        <Card.Body>
                            <Card.Title> {this.props.title} </Card.Title>
                            <Card.Text> {this.props.description} </Card.Text>
                            <Card.Link style={{ color: 'blue' }} href={link}> Open Playlist </Card.Link>
                        </Card.Body>
                    </Card>

                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>

                    <div className="cardBox">
                        <Card style={{ width: '13rem' }}>
                            <Card.Img variant="top" src={this.props.thumbnailUrl} />
                            <Card.Body>
                                <Card.Title> {this.props.title} </Card.Title>
                                <Card.Link style={{ color: 'blue' }} href={this.props.url}> Open Content </Card.Link>
                            </Card.Body>
                        </Card>
                    </div>

                </React.Fragment >
            );
        }
    }
}

export default ContentCard;