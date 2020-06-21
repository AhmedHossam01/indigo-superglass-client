import React from "react";
import "./hero.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <div className="hero">
              {/* NOTE: w-50 to simulate d-flex */}
              <div className="w-50">
                <h2 className="heading-1">test</h2>

                <div className="d-flex align-items-center">
                  <span
                    style={{ fontSize: ".8rem" }}
                    className="mr-2 font-weight-light"
                  >
                    FROM
                  </span>
                  <span className="hero__price">$32.00</span>
                </div>

                <p className="paragraph mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  perferendis dolorum voluptatem aut quos voluptates unde iure
                  earum, quod vero.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
