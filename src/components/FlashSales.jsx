import React from "react";
import Container from "./Container";
import Title from "./Title";
import CountDown from "./CountDown";
import Flex from "./Flex";
import Product from "./Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Button from "./Button";
import console from "../assets/gamingConsole.png"
import keyboard from '../assets/keyboard.png'
import monitor from "../assets/monitor.png";
import chair from "../assets/chair.png";

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
        right:"0%",

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
    nextArrow: <SampleNextArrow className="top-10%"/>,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          prevArrow: false
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
          
        },
      },
    ],
  };
  return (
    <section className=" mt-10 lg:mt-36">
      <Container>
        <Flex className=" justify-between lg:justify-normal lg:gap-[87px] items-end mb-10">
          <Title subtitle="Today’s" title="Flash Sales" />
          <CountDown />
        </Flex>
        <Slider {...settings}>
          <Product imgSRC={console} imgAlt={"console"} />
          <Product imgSRC={keyboard} imgAlt={"keyboard"} />
          <Product imgSRC={monitor} imgAlt={"monitor"} />
          <Product imgSRC={chair} imgAlt={"chair"} />
          <Product imgSRC={console} imgAlt={"console"} />
          <Product imgSRC={keyboard} imgAlt={"keyboard"} />
          <Product imgSRC={monitor} imgAlt={"monitor"} />
          <Product imgSRC={chair} imgAlt={"chair"} />
        </Slider>
        <div className=" text-center py-8 lg:py-[60px] border-b-2 mb-8 lg:mb-20">
          <Button value={"View All Products"} />
        </div>
      </Container>
    </section>
  );
};

export default FlashSales;
