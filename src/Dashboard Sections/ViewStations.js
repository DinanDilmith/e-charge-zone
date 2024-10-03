import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import "./TableStyles.css";

export default function ViewStations() {
  return (
    <div>
      <Container>
        <Table borderless className="rounded-table">
          <thead>
            <tr>
              <th>Station ID</th>
              <th>Location</th>
              <th>Port Count</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>Downtown Station</td>
              <td>10</td>
            </tr>
            <tr>
              <td>002</td>
              <td>Uptown Station</td>
              <td>15</td>
            </tr>
            <tr>
              <td>003</td>
              <td>Westside Station</td>
              <td>8</td>
            </tr>
            <tr>
              <td>004</td>
              <td>Eastside Station</td>
              <td>12</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
