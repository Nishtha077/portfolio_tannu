import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

// Imported images from Assets
import stats from "../../Assets/stats.png";
import leetcode from "../../Assets/leetcode.png";
import ibm from "../../Assets/ibm.png";
import days from "../../Assets/days.png";

const achievements = [
  {
    file: leetcode,
    name: "LeetCode Milestone",
    issuer: "LeetCode",
    type: "image",
    description:
      "Solved over 100+ DSA problems on LeetCode with consistent streaks and improvement in problem-solving skills.",
  },
  {
    file: stats,
    name: "GitHub Contributions",
    issuer: "GitHub",
    type: "image",
    description:
      "Maintained an active contribution streak, showcasing consistent development work and open-source activity.",
  },
  {
    file: ibm,
    name: "IBM Badge",
    issuer: "IBM Skills Network",
    type: "image",
    description:
      "Earned IBM digital badge for completing a course in AI/ML, demonstrating foundational understanding and project experience.",
  },
  {
    file: days,
    name: "100 Days of Code",
    issuer: "Self Challenge",
    type: "image",
    description:
      "Completed 100 days of code challenge to build a consistent habit of learning and coding daily.",
  },
];

function Achievements() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Container fluid className="resume-section py-4 px-3">
      <Particle />
      <h2 className="text-center text-white mb-4">🏆 Achievements</h2>

      {achievements.map((achieve, index) => {
        const isEven = index % 2 === 0;

        const Description = (
          <Col
            md={6}
            className="d-flex align-items-center mb-3"
            style={{ minHeight: "250px" }}
          >
            <div style={{ color: "white" }}>
              <h4 className="mb-1 text-white">{achieve.name}</h4>
              <h6 className="text-muted mb-2">{achieve.issuer}</h6>
              <p
                style={{
                  textAlign: "justify",
                  fontSize: "0.95rem",
                  color: "white",
                }}
              >
                {achieve.description}
              </p>
            </div>
          </Col>
        );

        const Preview = (
          <Col
            md={6}
            className="mb-3 d-flex align-items-center justify-content-center"
          >
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                width: "100%",
                maxWidth: "350px",
                height: "250px",
                overflow: "hidden",
                backgroundColor: "#fff",
              }}
              className="shadow-sm"
            >
              <img
                src={achieve.file}
                alt={achieve.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </Col>
        );

        return (
          <Card
            key={index}
            className="mb-4 py-3 px-3"
            style={{
              border: "none",
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              borderRadius: "15px",
            }}
          >
            <Row className="align-items-center">
              {isEven ? (
                <>
                  {Description}
                  {Preview}
                </>
              ) : (
                <>
                  {Preview}
                  {Description}
                </>
              )}
            </Row>
            {/* Optional download button
            <div className="d-flex justify-content-center mt-3">
              <Button
                variant="primary"
                href={achieve.file}
                target="_blank"
                rel="noreferrer"
                size="sm"
                style={{ fontSize: "0.9rem" }}
              >
                <AiOutlineDownload /> &nbsp;View Image
              </Button>
            </div>
            */}
          </Card>
        );
      })}
    </Container>
  );
}

export default Achievements;
