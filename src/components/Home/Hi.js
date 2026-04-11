import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import homeLogo from "../../Assets/palette-logo-480-shadow.png";

import Type from "./Type";


function Hi() {
  return (
    // <Container  className="home-section" id="home">
      <Container className="home-content" >
        <Row>
          <Col md={7} className="home-header">
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Hi There!{" "}
              {/* <span className="wave" role="img" aria-labelledby="wave">
                🎨
              </span> */}
            </h1>

            <h1 className="heading-name">
              This is
              <strong className="main-name"> Palette Lab </strong>
            </h1>

            <div style={{ padding: 10, textAlign: "left" }}>
              <Type />
            </div>
          </Col>

          <Col md={5} style={{ paddingBottom: 20 }}>
            <Tilt>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "500px"}}
              />
            </Tilt>
          </Col>
          
        </Row>
      </Container>
    //  </Container>
  );
}
export default Hi;
