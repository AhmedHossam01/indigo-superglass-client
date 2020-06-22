import React from "react";
import Section from "../../components/Section";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeroSection from "../../components/Hero/HeroSection";
import ProductCard from "../../components/ProductCard/ProductCard";

const Home = () => {
  // NOTE: dummy daya
  const products = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <HeroSection />

      {/* Featured Products Section */}
      <Section
        title="Our featured products!"
        subtitle="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repudiandae
      ratione aliquid ullam perferendis, ipsa et voluptates quisquam vel
      similique!"
      >
        <Row>
          {/* TODO: If indes === 0 then md={5} : md={7} */}
          <Col md={5}>
            <FeaturedProduct
              name="Fixtures"
              price="40.00"
              discount={50}
              oldPrice="13.00"
              image="images/fixture.png"
            />
          </Col>
          <Col md={7}>
            <FeaturedProduct
              name="Fixtures"
              price="40.00"
              image="images/fixture.png"
            />
          </Col>
        </Row>
      </Section>

      {/* New This Week! */}
      <Section
        center
        title="New This Week!"
        subtitle="Here's a list of our new products that came new to the store just this week!"
      >
        <div className="w-75 mx-auto">
          <Row>
            {products.map((el) => (
              <Col sm={6} lg={4}>
                <ProductCard />
              </Col>
            ))}
          </Row>
        </div>
      </Section>

      <div style={{ marginBottom: "10rem" }}></div>
    </div>
  );
};

export default Home;
