import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import homeLogo from "../../Assets/palette-logo-480.webp";


function Introduction() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET'S <span className="purple"> INTRODUCE </span> OURSELVES!
            </h1>
            <p className="home-about-body">
              Our lab explores questions around how computational tools can support people
              in developing their own domain expertise whether that is in
              <i>
                <b className="purple">
                  {" "}
                  Creativity, Accessibility, Education, Healthcare, Sustainability, etc. {" "}
                </b>
              </i>

              <br />
              <br />
              Like an artist’s palette, where the different colors of paint come together and mix,
              the work in our lab aims to bring together, to center,
              and to design for diverse perspectives and needs.

              <br />
              <br />
              Our research asks:
              <br />
              <br />
              <i>
                <b className="purple">
                  {" "}
                  Q1. What should — and shouldn’t — AI be doing to support human creativity?
                </b>
              </i>
              <br />
              <br />
              <i>
                <b className="purple">
                  {" "}
                  Q2. How can systems scaffold, rather than substitute, the development of expertise?
                </b>
              </i>
              <br />
              <br />
              <i>
                <b className="purple">
                  {" "}
                  Q3. Which perspectives and disciplines remain underrepresented in how we design and study AI tools? {" "}
                </b>
              </i>
              <br />
              <br />

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={homeLogo} className="img-hor-vert" alt="avatar" style={{ width: "200px" }} />
            </Tilt>
            <Tilt>
              <img src={homeLogo} className="img-fluid" alt="avatar" style={{ width: "200px" }} />
            </Tilt>
            <Tilt>
              <img src={homeLogo} className="img-hor-vert" alt="avatar" style={{ width: "200px" }} />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Introduction;
