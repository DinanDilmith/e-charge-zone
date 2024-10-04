import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { db } from "../firebaseConfig"; // Import Firestore instance
import { collection, addDoc } from "firebase/firestore"; // Import Firestore methods

export default function AddStation() {
  // State to hold input values
  const [location, setLocation] = useState("");
  const [portCount, setPortCount] = useState(0);
  const [error, setError] = useState(""); // State for error messages
  const [success, setSuccess] = useState(""); // State for success messages

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      // Add station data to Firestore
      await addDoc(collection(db, "chargingStations"), {
        location,
        portCount,
      });
      setSuccess("Station added successfully!"); // Set success message
      setLocation(""); // Clear input fields
      setPortCount(0);
      setError(""); // Clear error message
    } catch (error) {
      setError("Error adding station: " + error.message); // Set error message
    }
  };

  return (
    <div>
      <Container>
        <Row className="mb-5">
          <Col sm={12} lg={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="InputLocation">
                <Form.Label>Station Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)} // Update state on input change
                  required // Make this field required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="InputPortCount">
                <Form.Label>Charging Port Count</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Port Count"
                  value={portCount}
                  onChange={(e) => setPortCount(Number(e.target.value))} // Update state on input change
                  required // Make this field required
                />
              </Form.Group>

              <Button variant="success" type="submit">
                Submit
              </Button>

              {error && <p className="text-danger">{error}</p>} {/* Display error message if exists */}
              {success && <p className="text-success">{success}</p>} {/* Display success message if exists */}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

