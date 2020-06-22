import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SliderItem from "./SliderItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.scss";
import Slider from "react-slick";
import { ArrowButtonNext, ArrowButtonPrev } from "./ArrowButton";

const HeroSection = () => {
  const ref: any = useRef(document.createElement("div"));

  const goToNext = () => ref.current.slickNext();
  const goToPrev = () => ref.current.slickPrev();

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    draggable: true,
  };

  return (
    <section>
      <Container>
        <Row>
          <Col>
            <div className="hero">
              <ArrowButtonNext action={goToNext} />
              <ArrowButtonPrev action={goToPrev} />

              <Slider ref={ref} {...settings}>
                <SliderItem
                  title="Fixtures"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                excepturi quisquam error mollitia nemo in hic voluptatibus
                obcaecati unde cum."
                  image="images/fixture.png"
                  price="32.00"
                />

                <SliderItem
                  title="Fixtures"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                excepturi quisquam error mollitia nemo in hic voluptatibus
                obcaecati unde cum."
                  image="images/fixture.png"
                  price="32.00"
                />
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
