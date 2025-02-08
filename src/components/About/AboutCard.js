import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Uday G </span>
            from <span className="purple"> Bengaluru, India.</span>
            <br />
            I'm currently learning UI Designs, Web development and Machinle learning.
            <br />
            I'm expected to graduate from Presidency University, Bengaluru in 2025.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Self-Help Books
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive for progress, not perfection."{" "}
          </p>
          <footer className="blockquote-footer">ChatGPT</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
