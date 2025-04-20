import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ticttactoe from "../../Assets/Projects/ticttactoe.png";
import tableu from "../../Assets/Projects/tableu.jpg";
import mlproject from "../../Assets/Projects/mlproject.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticttactoe}
              isBlog={false}
              title="Tic Tac Toe Game"
              description="A C++ Data Structures project using arrays, loops, and conditionals to build a fully interactive version of the classic Tic Tac Toe game. Developed in November 2024."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tableu}
              isBlog={false}
              title="Tableau Shareable Dashboards"
              description="Created insightful dashboards like a Health Dashboard in Excel for healthcare metrics and an HR Analytics Dashboard in Tableau to monitor performance and attrition. Aimed at enabling data-driven decision-making. Completed in August 2024."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mlproject}
              isBlog={false}
              title="Digit Classifier"
              description="Achieved 98% accuracy on handwritten digit classification using Neural Networks in Python. Used libraries like NumPy, Pandas, and Scikit-learn. Included data augmentation, feature scaling, and hyperparameter tuning for performance. Completed in March 2024."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
