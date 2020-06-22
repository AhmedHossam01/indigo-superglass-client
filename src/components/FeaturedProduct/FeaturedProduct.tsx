import React from "react";
import "./featuredpro.scss";
import Button, { IconButton } from "../Button/Button";
import { mdiHeart } from "@mdi/js";

const FeaturedProduct: React.FC<IProps> = ({
  discount,
  name,
  price,
  image,
  oldPrice,
}) => {
  return (
    <div className="featured-product">
      <div className="d-flex justify-content-between">
        <p className="featured-product__title">{name}</p>
        {discount && (
          <div>
            <p className="font-weight-bold text-secondary">-{discount}%</p>
            <p className="font-weight-light text-secondary">OFF</p>
          </div>
        )}
      </div>

      <div>
        <div className="d-flex align-items-center">
          <span className="mr-1" style={{ fontSize: ".8rem" }}>
            FROM
          </span>

          <span
            className="font-weight-bold"
            style={{ color: "#50d890", fontSize: "1.2rem" }}
          >
            {price}
          </span>
        </div>
        {discount && (
          <p
            style={{
              fontSize: ".8rem",
              color: "#fd5e53",
              textDecoration: "line-through",
            }}
          >
            {oldPrice}
          </p>
        )}
      </div>
      <div className="text-center mt-1">
        <img className="featured-product__image" src={image} alt={name} />
      </div>
      <div className="d-flex justify-content-end">
        <Button className="mr-2">Buy Now</Button>
        <IconButton path={mdiHeart} color="#FD5E53" background="#D2D2D2" />
      </div>
    </div>
  );
};

export default FeaturedProduct;

interface IProps {
  discount?: number;
  name: string;
  price: string;
  image: string;
  oldPrice?: string;
}
