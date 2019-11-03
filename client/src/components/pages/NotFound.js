// dependencies:
import React from "react";

// ---- COMPONENTS:
import { Col, Row, Container } from "../component/Grid";
import Jumbotron from "../component/Jumbotron";

function NotFound() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>404 Page Not Found</h1>
                        <h1>
                            <span role="img" aria-label="Face With Rolling Eyes Emoji"> 🙄 </span>
                        </h1>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}


export default NotFound;