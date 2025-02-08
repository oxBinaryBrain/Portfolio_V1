import React from "react";
import "./Contact.css";  
import { Container, Row, Col, Card } from "react-bootstrap";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa"; //

function Contact() {
  const contactDetails = [
    {
      icon: <AiOutlineMail className="contact-icon" />,
      title: "Email",
      info: "ud4yg@yandex.com",
      link: "mailto:ud4yg@yandex.com",
    },
    {
      icon: <FaTwitter className="contact-icon" />,  //
      title: "Twitter",
      info: "@UdayG6389896490",
      link: "https://x.com/UdayG6389896490", //
    },
    {
      icon: <AiFillGithub className="contact-icon" />,
      title: "GitHub",
      info: "github.com/oxBinaryBrain",
      link: "https://github.com/oxBinaryBrain",
    },
    {
      icon: <AiFillLinkedin className="contact-icon" />,
      title: "LinkedIn",
      info: "linkedin.com/in/uday-g-601ba9266/",
      link: "https://linkedin.com/in/uday-g-601ba9266/",
    },
  ];

  return (
    <Container fluid className="contact-section">
      <Container>
        <h1 className="contact-heading">
          Get in <span className="purple">Touch</span>
        </h1>
        <p className="contact-description">
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        <Row>
          {contactDetails.map((contact, index) => (
            <Col md={6} key={index} className="contact-card">
              <Card className="contact-card-view">
                <Card.Body>
                  {contact.icon}
                  <Card.Title>{contact.title}</Card.Title>
                  {contact.link ? (
                    <Card.Text>
                      <a href={contact.link} target="_blank" rel="noopener noreferrer">
                        {contact.info}
                      </a>
                    </Card.Text>
                  ) : (
                    <Card.Text>{contact.info}</Card.Text>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
