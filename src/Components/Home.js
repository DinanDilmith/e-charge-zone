import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";

export default function Home() {
  return (
    <div className="background-div">
      <Container>
        <Row>
          <Col xs={8} lg={6}>
            <h1 className="display-3 welcome-text">
              Manage All Your Charging Stations By One Click
            </h1>
            <h2 className="lead h2-text welcome-text">
              Effortlessly control and monitor all your charging stations from a
              single dashboard. With just one click, access real-time data,
              manage reservations, and optimize performance. Simplify your
              operations and enhance customer satisfaction today!
            </h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
