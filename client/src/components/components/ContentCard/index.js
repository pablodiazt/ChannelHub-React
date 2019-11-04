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
            <Link
              style={{ color: "blue" }} //
              to={this.props.url}
            >
              Open
            </Link>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default ContentCard;
