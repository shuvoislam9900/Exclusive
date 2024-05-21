import React from "react";
import Container from "./Container";
import Title from "./Title";
import CategoryProduct from "./CategoryProduct";
import { IoPhonePortraitOutline, IoCameraOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { SlEarphones } from "react-icons/sl";
import { TbDeviceGamepad } from "react-icons/tb";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

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
        top: "-50%",
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
        top: "-50%",
        right: "5%",
      }}
      onClick={onClick}
    >
      <FaAngleLeft />
    </div>
  );
}
const CategoryItem = () => {
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
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
              slidesToShow: 4,
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
        <Title subtitle={"Categories"} title={"Browse By Category"} />
        <Slider
          {...settings}
          className=" border-b-2 pb-8 lg:pb-[70px] mb-8 lg:mb-[70px] mt-8 lg:mt-16"
        >
          <CategoryProduct
            icon={<IoPhonePortraitOutline />}
            catName={"Phone"}
          />
          <CategoryProduct
            icon={<HiOutlineComputerDesktop />}
            catName={"Computers"}
          />
          <CategoryProduct icon={<BsSmartwatch />} catName={"SmartWatch"} />
          <CategoryProduct icon={<IoCameraOutline />} catName={"Camera"} />
          <CategoryProduct icon={<SlEarphones />} catName={"HeadPhones"} />
          <CategoryProduct icon={<TbDeviceGamepad />} catName={"Gaming"} />
        </Slider>
      </Container>
    </section>
  );
};

export default CategoryItem;
