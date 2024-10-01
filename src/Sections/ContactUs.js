import React from "react";
import { Container } from "react-bootstrap";
import "./SignIn.css";
import Footer from "../Components/Footer";

export default function ContactUs() {
  return (
    <div>
    <div className="my-5 pt-5">
      <Container>
        <section id="contact-us" className="div-policy">
          <h2 className="display-6 text-center mb-5">Contact Us</h2>
          <p className="lead">
            At E-ChargeZone, we are committed to supporting our station owners.
            If you have any questions or need assistance, please feel free to
            reach out to us. Your feedback and inquiries are crucial in helping
            us enhance our services.
          </p>

          <h2 className="display-6">1. Support for Station Owners</h2>
          <p className="lead">
            If you require assistance with installation, maintenance, or
            operational issues related to your charging station, our dedicated
            support team is here to help. We understand the importance of having
            your stations running smoothly to provide a reliable service to EV
            users.
          </p>

          <h2 className="display-6">2. Contact Information</h2>
          <p className="lead">
            You can reach us through the following methods:
            <br />
            Email: support@echargezone.com
            <br />
            Phone: +942233445
            <br />
            Address: No. 12, Galle Road, Colombo 03, Sri Lanka
          </p>

          <h2 className="display-6">3. Business Hours</h2>
          <p className="lead">
            Our support team is available during the following hours:
            <br />
            Monday to Friday: 9:00 AM - 6:00 PM
            <br />
            Saturday: 10:00 AM - 4:00 PM
            <br />
            Sunday: Closed
          </p>

          <h2 className="display-6">4. Contact Form</h2>
          <p className="lead">
            For specific inquiries, we encourage you to fill out the contact
            form on our website. Our team will respond to your message as
            quickly as possible.
          </p>

          <h2 className="display-6">5. Conclusion</h2>
          <p className="lead">
            Thank you for being a valued part of the E-ChargeZone network. We
            look forward to assisting you and ensuring that your charging
            stations operate efficiently‌.
          </p>
        </section>
      </Container>
    </div>
    <Footer/>
    </div>
  );
}
