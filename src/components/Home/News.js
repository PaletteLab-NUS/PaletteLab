import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function News() {
  return (
     <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> NEWS </span>
            </h1>
            <p className="news-body">
              Palette Lab is heading to CHI 2026! See you in Barcelona! 🇪🇸
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default News;
