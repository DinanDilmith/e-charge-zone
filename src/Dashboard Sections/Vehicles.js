import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import "./TableStyles.css";

export default function Vehicles() {
  return (
    <div>
      <Container>
        <Table className="rounded-table">
          <thead>
            <tr>
              <th>License Plate</th>
              <th>Model</th>
              <th>E-Card Code</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ABC 1234</td>
              <td>Tesla Model S</td>
              <td>E-123456</td>
            </tr>
            <tr>
              <td>XYZ 5678</td>
              <td>Nissan Leaf</td>
              <td>E-654321</td>
            </tr>
            <tr>
              <td>LMN 9101</td>
              <td>Chevrolet Bolt</td>
              <td>E-112233</td>
            </tr>
            <tr>
              <td>OPQ 3456</td>
              <td>BMW i3</td>
              <td>E-998877</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
