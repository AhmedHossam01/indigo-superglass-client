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
              <h2 className="heading-1">test</h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum adipisci distinctio aspernatur, ullam eveniet quidem
              quibusdam ratione id! Maiores, similique? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Recusandae, doloremque? Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Corporis,
              atque.
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
