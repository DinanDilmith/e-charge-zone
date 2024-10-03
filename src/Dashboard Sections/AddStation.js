import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AddStation() {
  return (
    <div>
      <Container>
        <Row className="mb-5">
            <Col sm={12} lg={6}>
            <Form>
          <Form.Group className="mb-3" controlId="Input1">
            <Form.Label>Station Location</Form.Label>
            <Form.Control type="text" placeholder="Location" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Input1">
            <Form.Label>Charging Port Count</Form.Label>
            <Form.Control type="number" placeholder="Port Count" />
          </Form.Group>

          <Button variant="success" type="submit">
          Submit
        </Button>

        </Form>
            </Col>
        </Row>
      </Container>
    </div>
  );
}
