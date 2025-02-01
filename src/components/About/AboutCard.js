import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chourti Ayman </span>
            from <span className="purple"> Casablanca, Morocco.</span>
            <br />
            I am software engineer specializing in full-stack development with .NET and Angular.
            <br />
            I recently completed my engineering studies at EMSI and successfully finished a 5-month internship at ONEE BE Casablanca.
            <br />
            <br />
            Besides coding, Some other activities that I’m passionate about!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Boxing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Work on things that matter and create a lasting impact."{" "}
          </p>
          <footer className="blockquote-footer">Chourti Ayman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
