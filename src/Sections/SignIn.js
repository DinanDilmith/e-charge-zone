import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./SignIn.css";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig"; // Import auth instance
import { signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn() {
  const navigate = useNavigate();

  // State for email, password, and error message
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault(); 

    try {
      // Attempt to sign in with email and password
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // Navigate to dashboard if successful
    } catch (error) {
      // Set error message if sign-in fails
      setError("Invalid email or password");
    }
  };

  return (
    <div>
      <div className="div-sign">
        <Row className="text-center text-white d-flex justify-content-center align-items-center min-vh-100">
          <Col xs={12} lg={5}>
            <Container>
              <Form className="form-style my-5" onSubmit={handleLogin}>
                <h1 className="display-6 mb-4">Member Login</h1>
                {error && <p className="text-danger">{error}</p>}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-envelope"></i>
                    </span>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-lock"></i>
                    </span>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
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

