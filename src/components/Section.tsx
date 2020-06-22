import React from "react";
import Heading from "./Heading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Section: React.FC<IProps> = ({ children, center, title, subtitle }) => {
  return (
    <section className="mt-5">
      <Container>
        <Row>
          <Col className={center ? "mx-auto" : ""} lg={6}>
            <Heading title={title} center={center}>
              {subtitle}
            </Heading>
          </Col>
        </Row>

        <div className="mt-5">{children}</div>
      </Container>
    </section>
  );
};

export default Section;

interface IProps {
  title: string;
  center?: boolean;
  subtitle: string;
}
