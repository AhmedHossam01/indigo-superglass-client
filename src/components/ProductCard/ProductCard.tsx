import React from "react";
import "./product-card.scss";
import Icon from "@mdi/react";
import { mdiCartPlus, mdiHeart } from "@mdi/js";

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-card__primary">
        <img
          className="product-card__image"
          src="images/fixture.png"
          alt="fixture"
        />
        <div className="product-card__button product-card__button--left">
          <Icon className="product-card__icon" path={mdiCartPlus} size={1} />
        </div>
        <div className="product-card__button product-card__button--right">
          <Icon path={mdiHeart} size={1} />
        </div>
      </div>
      <div className="product-card__secondary">
        <p className="product-card__title">Bathroom Lighting</p>

        <div className="d-flex align-items-center">
          <span className="mr-1" style={{ fontSize: ".7rem" }}>
            FROM
          </span>

          <span
            className="font-weight-bold"
            style={{ color: "#50d890", fontSize: "1.2rem" }}
          >
            15.00
          </span>

          <span
            className="font-weight-bold ml-2"
            style={{
              color: "red",
              fontSize: "1rem",
              textDecoration: "line-through",
            }}
          >
            5.00
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
