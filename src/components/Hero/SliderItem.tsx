import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Icon from "@mdi/react";
import { mdiBasket } from "@mdi/js";
import Button from "../Button/Button";

const SliderItem: React.FC<IProps> = ({ title, image, price, description }) => {
  return (
    <div className="mx-4">
      <Row>
        <Col md={{ span: 6, order: 1 }} xs={{ span: 12, order: 2 }}>
          <div>
            <h2 className="heading-1">{title}</h2>

            <div className="d-flex align-items-center">
              <span
                style={{ fontSize: ".8rem" }}
                className="mr-2 font-weight-light"
              >
                FROM
              </span>
              <span className="hero__price">{price}</span>
            </div>

            <p className="paragraph mt-4">{description}</p>

            <Button
              icon={() => <Icon path={mdiBasket} size={0.9} color="white" />}
              style={{ width: "11rem" }}
              className="mt-4"
            >
              Shop Now
            </Button>
          </div>
        </Col>

        <Col md={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
          <div>
            <img src={image} alt={title} className="hero__image" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SliderItem;

interface IProps {
  title: string;
  description: string;
  price: string;
  image: string;
}
