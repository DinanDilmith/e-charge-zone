import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./SignIn.css";
import Footer from "../Components/Footer";

export default function SignIn() {
  return (
    <div>
      <div className="div-sign">
        <Row className="text-center text-white d-flex justify-content-center align-items-center min-vh-100">
          <Col xs={12} lg={5}>
            <Container>
              <Form className="form-style my-5">
                <h1 className="display-6 mb-4">Member Login </h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-envelope"></i>
                    </span>
                    <Form.Control type="email" placeholder="Email" required />
                  </div>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Password</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-lock"></i>
                    </span>
                    <Form.Control type="password" placeholder="Password" required/>
                  </div>
                </Form.Group>

                <Button
                  type="submit"
                  variant="outline-light"
                  className="mt-4"
                  style={{ width: "40%" }}
                >
                  Sign In
                </Button>
              </Form>
            </Container>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}
