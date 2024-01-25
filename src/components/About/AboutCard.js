import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Welcome to our page!
            <p>
    Theometrics, an organization dedicated to worldwide peace and knowledge, is known for its involvement in various initiatives that transcend multiple industries. One of these areas is the fashion world, where Theometrics has made a significant impact.
  </p>
            <br />
            Theometrics also focuses on:
            <br />
           
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Entrepreneurship
            </li>
            <li className="about-activity">
              <ImPointRight /> Enducation
            </li>
            <li className="about-activity">
              <ImPointRight /> Technology
            </li>
          </ul>

    
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
