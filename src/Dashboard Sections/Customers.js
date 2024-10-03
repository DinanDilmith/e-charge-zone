import React from 'react'
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import "./TableStyles.css";

export default function Customers() {
  return (
    <div>
        <Container>
        <Table borderless className="rounded-table">
  <thead>
    <tr>
      <th>Email</th>
      <th>Name</th>
      <th>Telephone</th>
      <th>Address</th>
      <th>Password</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>johndoe@example.com</td>
      <td>John Doe</td>
      <td>+1 234-567-8901</td>
      <td>123 Elm St, Springfield, IL</td>
      <td>password123</td>
    </tr>
    <tr>
      <td>janedoe@example.com</td>
      <td>Jane Doe</td>
      <td>+1 987-654-3210</td>
      <td>456 Maple Ave, Springfield, IL</td>
      <td>securePass456</td>
    </tr>
    <tr>
      <td>alice@example.com</td>
      <td>Alice Smith</td>
      <td>+1 555-123-4567</td>
      <td>789 Oak Dr, Springfield, IL</td>
      <td>myPass789</td>
    </tr>
    <tr>
      <td>bob@example.com</td>
      <td>Bob Johnson</td>
      <td>+1 555-765-4321</td>
      <td>321 Pine Ln, Springfield, IL</td>
      <td>pass1234</td>
    </tr>
  </tbody>
</Table>

      </Container>
    </div>
  )
}
