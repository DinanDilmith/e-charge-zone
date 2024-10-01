import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import centralized from "../img/centralized.jpg";
import analysis from "../img/analysis.jpg";
import ui from "../img/ui.jpg";
import safety from "../img/safety.jpg";
import "./Features.css";

export default function Features() {
  return (
    <div>
      <Container>
        <Row className="my-5 text-center">
          <hr />
          <h1 className="display-4 mb-4">Why E-ChargeZone?</h1>
          <hr />
        </Row>

        <Row className="text-center mt-5 mb-5">
          <Col xs={12} lg={6} className="feature-box">
            <img
              src={centralized}
              alt="Centralized Management"
              className="img-fluid img-features"
            />
            <h1 className="display-6">Centralized Management</h1>
            <h2 className="lead">
              E-charge zones allow administrators to oversee multiple charging
              stations from a single platform. This centralized management
              simplifies operations, enabling quick responses to issues,
              efficient resource allocation, and streamlined maintenance
              processes.
            </h2>
          </Col>

          <Col xs={12} lg={6} className="feature-box">
            <img
              src={analysis}
              alt="Centralized Management"
              className="img-fluid img-features"
            />
            <h1 className="display-6">Data Analytics and Reporting</h1>
            <h2 className="lead">
              Admins can gather valuable data on charging patterns, usage
              statistics, and customer behavior within e-charge zones. This
              information helps in making informed decisions about
              infrastructure improvements, pricing strategies, and identifying
              high-demand areas for future expansion.
            </h2>
          </Col>
        </Row>

        <Row className="text-center mb-5" >
          <Col xs={12} lg={6} className="feature-box">
            <img
              src={ui}
              alt="Centralized Management"
              className="img-fluid img-features"
            />
            <h1 className="display-6">Enhanced User Experience</h1>
            <h2 className="lead">
              By managing e-charge zones effectively, administrators can improve
              the overall user experience. Features like real-time availability
              updates, reservation systems, and user-friendly interfaces can
              enhance customer satisfaction and encourage repeat usage..
            </h2>
          </Col>

          <Col xs={12} lg={6} className="feature-box">
            <img
              src={safety}
              alt="Centralized Management"
              className="img-fluid img-features"
            />
            <h1 className="display-6">Compliance Monitoring</h1>
            <h2 className="lead">
              E-charge zones allow admins to monitor compliance with safety
              standards and regulations. By keeping track of station performance
              and conducting regular inspections, they can ensure a safe and
              reliable charging environment for users, which is crucial for
              maintaining public trust and safety.
            </h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
