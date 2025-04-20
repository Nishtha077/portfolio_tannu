import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { MdEmail, MdPhone } from "react-icons/md";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I have hands-on experience working on real-world projects, including developing healthcare dashboards in Excel and creating HR analytics dashboards in Tableau.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Tableau, R, Python, C++ </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Data Science related Projects </b> and
                also in areas related to{" "}
                <b className="purple">
                  Machine Learning
                </b>
              </i>
              <br />
              <br />
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/tanu4484"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tannu-kumari-042715252/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
  <a
    href="mailto:tannusinghkmrvat@gmail.com"
    target="_blank"
    rel="noreferrer"
    className="icon-colour home-social-icons"
  >
    <MdEmail />
  </a>
</li>

<li className="social-icons">
  <a
    href="tel:+919142521997"
    target="_blank"
    rel="noreferrer"
    className="icon-colour home-social-icons"
  >
    <MdPhone />
  </a>
</li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
