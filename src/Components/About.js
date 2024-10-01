import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import user1 from "../img/user1.jpg";
import user2 from "../img/user2.jpg";
import user3 from "../img/user3.jpg";
import user4 from "../img/user4.jpg";

export default function About() {
  return (
      <div>
        <Container>
          <Row className="text-center my-3">
            <Col>
              <hr />
              <h1 className="display-4 mb-4">What Users Say About Us</h1>
              <hr />
            </Col>
          </Row>
          <Row className="my-5">
            <Col xs={12} md={6} lg={3} className="my-2">
              <Card style={{ width: "20rem" }}>
                <Card.Img variant="top" src={user1} />
                <Card.Body>
                  <Card.Title>
                    Sam Rogers <br /> Vesco Global Stations, Canada
                  </Card.Title>
                  <Card.Text>
                    ⭐⭐⭐⭐⭐ <br />
                    E-ChargeZone has made managing our charging stations
                    incredibly straightforward. The platform allows us to keep
                    track of station performance and customer appointments in
                    real-time, helping us stay organized and efficient. The
                    real-time monitoring features are particularly helpful in
                    identifying peak usage times, so we can optimize station
                    availability. Additionally, the system’s interface is highly
                    intuitive, making it easy for our team to quickly access the
                    data they need. E-ChargeZone has truly improved the
                    day-to-day management of our EV infrastructure.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6} lg={3} className="my-2">
              <Card style={{ width: "20rem" }}>
                <Card.Img variant="top" src={user2} />
                <Card.Body>
                  <Card.Title>
                    Daffne Credles <br /> Lagucci Automobiles, Italy
                  </Card.Title>
                  <Card.Text>
                    ⭐⭐⭐⭐⭐ <br />
                    The range of features offered by E-ChargeZone is fantastic
                    for anyone running multiple EV charging stations. From
                    customer tracking to usage statistics, it covers all the
                    bases needed to run a successful operation. The appointment
                    scheduling and automated alerts are particularly useful for
                    staying ahead of maintenance and bookings. However, the
                    platform occasionally slows down when handling large data
                    sets, which can be frustrating during busy periods. Overall,
                    it’s a strong platform with great functionality, just
                    needing a bit of performance optimization.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6} lg={3} className="my-2">
              <Card style={{ width: "20rem" }}>
                <Card.Img variant="top" src={user3} />
                <Card.Body>
                  <Card.Title>
                    Henry Augustus <br /> Montero Technologies, Mexico
                  </Card.Title>
                  <Card.Text>
                    ⭐⭐⭐⭐⭐ <br />
                    As a growing business in the EV industry, E-ChargeZone has
                    been a game-changer for us. It offers the ability to
                    seamlessly manage several stations and provides detailed
                    reports on customer activity, charging station performance,
                    and maintenance requirements. We’ve been able to use these
                    insights to expand our operations efficiently. The
                    notifications for slot availability and system updates are
                    helpful in keeping everything running smoothly. It’s the
                    perfect platform for any business looking to scale their EV
                    operations while maintaining a high level of control.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6} lg={3} className="my-2">
              <Card style={{ width: "20rem" }}>
                <Card.Img variant="top" src={user4} />
                <Card.Body>
                  <Card.Title>
                    Rajesh Kumar <br /> GreenCharge Solutions, India
                  </Card.Title>
                  <Card.Text>
                    ⭐⭐⭐⭐⭐ <br />
                    E-ChargeZone has provided us with a streamlined and
                    efficient way to manage our network of EV charging stations.
                    The platform's interface is user-friendly, making it easy
                    for our team to keep track of station availability, customer
                    usage, and maintenance needs. One of the standout features
                    is the seamless integration of real-time data, allowing us
                    to respond to issues immediately. The customer support team
                    has been incredibly responsive, addressing any concerns we
                    have in a timely manner. This platform has been a valuable
                    asset in helping us scale and maintain high-quality service.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
  );
}
