import React, { Component } from "react";
import Connection from "./Connection";
import Teleoperation from "./Teleoperation";
import { Row, Col, Container, Button } from "react-bootstrap";

class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <Container>
          <h1 className="text-center mt-3">Robot controller page</h1>
          <Row>
            <Col>
              <Connection />
            </Col>
          </Row>

          <Row>
            <Col>
              <Teleoperation />
            </Col>
            <Col>
              <h1>Map</h1>
              <p> This regions will be filled display monitors</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Home;
