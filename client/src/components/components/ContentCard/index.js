// dependencies:
import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import is from "is_js";
import { LinkContainer } from "react-router-bootstrap";
import { Link, Route } from "react-router-dom";

// ---- COMPONENTS:
// files:
import "./style.css";

class ContentCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Card style={{ width: "12rem" }}>
          {is.existy(this.props.thumbnailUrl) ? (
            <Card.Img variant="top" src={this.props.thumbnailUrl} />
          ) : (
            ""
          )}
          <Card.Body>
            <Card.Title> {this.props.title} </Card.Title>
            {is.existy(this.props.description) ? (
              <Card.Text> {this.props.description} </Card.Text>
            ) : (
              ""
            )}
            {this.props.destination === "content" ? (
              <Card.Link style={{ color: "blue" }} href={this.props.url}>
                Load Content
              </Card.Link>
            ) : (
              <Link
                style={{ color: "blue" }} //
                to={{ pathname: this.props.url, state: this.props.destination }}
              >
                Open
              </Link>
            )}
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default ContentCard;
