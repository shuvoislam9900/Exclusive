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
    slidesToScroll: 3,
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
          <Product
            discount={""}
            name={"Breed Dry Dog Food"}
            prevPrice={""}
            newPrice={"$100"}
            starCount={"35"}
            imgSRC={dogFood}
            imgAlt={dogFood}
          />
          <Product
            discount={""}
            name={"Breed Dry Dog Food"}
            prevPrice={""}
            newPrice={"$100"}
            starCount={"35"}
            imgSRC={dogFood}
            imgAlt={dogFood}
          />
          <Product
            discount={""}
            name={"CANON EOS DSLR Camera"}
            prevPrice={""}
            newPrice={"$360"}
            starCount={"95"}
            imgSRC={camera}
            imgAlt={camera}
          />
          <Product
            discount={""}
            name={"CANON EOS DSLR Camera"}
            prevPrice={""}
            newPrice={"$360"}
            starCount={"95"}
            imgSRC={camera}
            imgAlt={camera}
          />
          <Product
            discount={""}
            name={"ASUS FHD Gaming Laptop"}
            prevPrice={""}
            newPrice={"$700"}
            starCount={"325"}
            imgSRC={laptop}
            imgAlt={laptop}
          />
          <Product
            discount={""}
            name={"ASUS FHD Gaming Laptop"}
            prevPrice={""}
            newPrice={"$700"}
            starCount={"325"}
            imgSRC={laptop}
            imgAlt={laptop}
          />
          <Product
            discount={""}
            name={"Curology Product Set "}
            prevPrice={""}
            newPrice={"$500"}
            starCount={"155"}
            imgSRC={cream}
            imgAlt={cream}
          />
          <Product
            discount={""}
            name={"Curology Product Set "}
            prevPrice={""}
            newPrice={"$500"}
            starCount={"155"}
            imgSRC={cream}
            imgAlt={cream}
          />
          <Product
            discount={""}
            name={"Breed Dry Dog Food"}
            prevPrice={""}
            newPrice={"$100"}
            starCount={"35"}
            imgSRC={dogFood}
            imgAlt={dogFood}
          />
          <Product
            discount={""}
            name={"Breed Dry Dog Food"}
            prevPrice={""}
            newPrice={"$100"}
            starCount={"35"}
            imgSRC={dogFood}
            imgAlt={dogFood}
          />
          <Product
            discount={""}
            name={"CANON EOS DSLR Camera"}
            prevPrice={""}
            newPrice={"$360"}
            starCount={"95"}
            imgSRC={camera}
            imgAlt={camera}
          />
          <Product
            discount={""}
            name={"CANON EOS DSLR Camera"}
            prevPrice={""}
            newPrice={"$360"}
            starCount={"95"}
            imgSRC={camera}
            imgAlt={camera}
          />
          <Product
            discount={""}
            name={"ASUS FHD Gaming Laptop"}
            prevPrice={""}
            newPrice={"$700"}
            starCount={"325"}
            imgSRC={laptop}
            imgAlt={laptop}
          />
          <Product
            discount={""}
            name={"ASUS FHD Gaming Laptop"}
            prevPrice={""}
            newPrice={"$700"}
            starCount={"325"}
            imgSRC={laptop}
            imgAlt={laptop}
          />
          <Product
            discount={""}
            name={"Curology Product Set "}
            prevPrice={""}
            newPrice={"$500"}
            starCount={"155"}
            imgSRC={cream}
            imgAlt={cream}
          />
          <Product
            discount={""}
            name={"Curology Product Set "}
            prevPrice={""}
            newPrice={"$500"}
            starCount={"155"}
            imgSRC={cream}
            imgAlt={cream}
          />
        </Slider>
        <div className=" text-center py-8 lg:py-[60px] lg:mb-[108px]">
          <Button to="/shopPage" value={"View All Products"} />
        </div>
      </Container>
    </section>
  );
};

export default Explore;
