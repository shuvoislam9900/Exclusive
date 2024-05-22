import React from "react";
import Container from "./Container";
import Title from "./Title";
import Product from "./Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Button from "./Button";
import dogFood from "../assets/dogFood.png";
import camera from "../assets/camera.png";
import laptop from "../assets/laptop.png";
import cream from "../assets/cream.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        background: "#f5f5f5",
        width: "46px",
        height: "46px",
        borderRadius: "50%",
        position: "absolute",
        top: "-12%",
        right: "0%",
      }}
      onClick={onClick}
    >
      <FaAngleRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        background: "#f5f5f5",
        width: "46px",
        height: "46px",
        borderRadius: "50%",
        position: "absolute",
        top: "-12%",
        right: "5%",
      }}
      onClick={onClick}
    >
      <FaAngleLeft />
    </div>
  );
}

const Explore = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section>
      <Container>
        <div className="mb-10">
          <Title subtitle="Our Products" title="Explore Our Products" />
        </div>
        <Slider {...settings}>
          <Product imgSRC={dogFood} imgAlt={dogFood} />
          <Product imgSRC={dogFood} imgAlt={dogFood} />
          <Product imgSRC={camera} imgAlt={camera} />
          <Product imgSRC={camera} imgAlt={camera} />
          <Product imgSRC={laptop} imgAlt={laptop} />
          <Product imgSRC={laptop} imgAlt={laptop} />
          <Product imgSRC={cream} imgAlt={cream} />
          <Product imgSRC={cream} imgAlt={cream} />
          <Product imgSRC={dogFood} imgAlt={dogFood} />
          <Product imgSRC={dogFood} imgAlt={dogFood} />
          <Product imgSRC={camera} imgAlt={camera} />
          <Product imgSRC={camera} imgAlt={camera} />
          <Product imgSRC={laptop} imgAlt={laptop} />
          <Product imgSRC={laptop} imgAlt={laptop} />
          <Product imgSRC={cream} imgAlt={cream} />
          <Product imgSRC={cream} imgAlt={cream} />
        </Slider>
        <div className=" text-center py-8 lg:py-[60px] lg:mb-[108px]">
          <Button value={"View All Products"} />
        </div>
      </Container>
    </section>
  );
};

export default Explore;
