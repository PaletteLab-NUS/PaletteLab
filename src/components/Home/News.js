import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";

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
              <div className="news-video">
                <iframe
                  title="Palette Lab CHI 2026"
                  src="https://drive.google.com/file/d/1fq1HhmiQrtQmymkMz-1nM2Ak44-T5sB9/preview"
                  allow="autoplay"
                  allowFullScreen
                />
              </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default News;
