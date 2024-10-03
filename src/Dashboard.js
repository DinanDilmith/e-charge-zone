import React from "react";
import "./Dashboard.css";
import Nav from "react-bootstrap/Nav";
import { Link, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import wc from "./img/wc.jpg";

export default function Dashboard() {
  return (
    <div>
      <Container>
        <div className="welcome-div">
          <Row>
            <Col sm={12} md={4} className="d-flex justify-content-center">
              <img src={wc} alt="" className="img" />
            </Col>

            <Col sm={12} md={8}>
              <h1 className="display-6"><i>Hello there !</i></h1>
              <h2 className="lead"><i>E-ChargeZone offers a comprehensive management interface designed to streamline the oversight of electric vehicle charging stations. Through this platform, you can easily add new charging centers to expand your network and view detailed information about existing charging facilities. Additionally, the system provides functionalities to monitor customers who are registered, allowing you to access essential customer data effortlessly. Moreover, you can manage and view the vehicles registered within the network, ensuring all electric vehicles utilizing your charging stations are properly documented. E-ChargeZone simplifies the administration of electric charging centers, customers, and vehicles—all in one integrated platform.</i></h2>
            </Col>
          </Row>
        </div>
        <Nav variant="pills" className="mb-5">
          <Nav.Item>
            <Nav.Link as={Link} to="add-station" eventKey="link-1">
              Add Station
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="view-stations" eventKey="link-2">
              View Stations
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="vehicles" eventKey="link-3">
              Vehicles
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="customers" eventKey="link-4">
              Customers
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Outlet /> {/* Render child routes here */}
      </Container>
    </div>
  );
}
