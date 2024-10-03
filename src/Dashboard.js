import React from 'react'
import './Dashboard.css';
import Nav from 'react-bootstrap/Nav';
import { Link, Outlet } from 'react-router-dom';
import Container from "react-bootstrap/Container";

export default function Dashboard() {
  return (
    <div>
        <Container>
        <h1>
            Welcome Aboard !
        </h1>

    <Nav variant="pills">
      <Nav.Item>
        <Nav.Link as={Link} to="add-station" eventKey="link-1">Add Station</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="view-stations" eventKey="link-2">View Stations</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="vehicles" eventKey="link-3">Vehicles</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="customers" eventKey="link-4">Customers</Nav.Link>
      </Nav.Item>
    </Nav>

    <Outlet /> {/* Render child routes here */}
        </Container>

    </div>
  )
}
