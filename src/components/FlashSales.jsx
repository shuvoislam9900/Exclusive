import React from "react";
import Container from "./Container";
import Title from "./Title";
import CountDown from "./CountDown";
import Flex from "./Flex";
import Product from "./Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
        top:"-24%",
        right:"0%"
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
        top: "-24%",
        right: "5%",
      }}
      onClick={onClick}
    >
      <FaAngleLeft />
    </div>
  );
}

const FlashSales = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false
        }
      },
    ]
  };
  return (
    <section className=" mt-10 lg:mt-36">
      <Container>
        <Flex className=" lg:gap-[87px] items-end mb-10">
          <Title subtitle="Today’s" title="Flash Sales" />
          <CountDown />
        </Flex>
        <Slider {...settings}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </Slider>
        <div className=" text-center py-[60px] border-b-2 mb-10">
        <Link className=" font-popins font-medium text-base bg-komola px-12 py-4 rounded text-white inline-block">View All Products</Link>
        </div>
      </Container>
    </section>
  );
};

export default FlashSales;
