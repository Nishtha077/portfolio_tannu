import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tannu Kumari </span>
            from <span className="purple"> Patna, India.</span>
            <br />
            I am currently a student at <span className="purple">Lovely Professional University</span>.
            <br />
            I am a passionate and dedicated Data Science enthusiast with a strong foundation in data analysis, visualization, and statistical modeling.
            <br />
            My curiosity drives me to explore the world of data, uncover meaningful patterns, and turn raw information into actionable insights.
            <br />
            Let’s connect and build something impactful with data!

          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
