
import Category from "./Category";
import Container from "./Container";
import Flex from "./Flex";
import React, { useState } from "react";
import Image from "./Image";
import BannerImg from "../assets/bannerImg.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { TbCategoryPlus } from "react-icons/tb";
import { useActionData } from "react-router-dom";




const Banner = () => {
  let [CategoryMenu, setCategoryMenu]=useState(false)
    var settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: (dots) => (
        <div
          style={{
            position:"absolute",
            bottom:"5%",
            left:"50%",
            transform:"translateX(-50%)"
          }}
        >
          <ul style={{ margin: "0px", display: "flex", alignItems: "center", gap:"12px",}}> {dots} </ul>
        </div>
      ),
      customPaging: (i) => (
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "#808080",
            
          }}
        >
        </div>
      ),
    };
  return (
    <section>
      <Container>
        <Flex className=" gap-0 lg:gap-[45px] flex-col lg:flex-row">
          <div className="w-full relative lg:w-[24%] border-r-[0px] lg:border-r pt-3 lg:pt-10">
            <div onClick={()=>{
              setCategoryMenu(!CategoryMenu)
            }} className="flex items-center gap-2 lg:hidden border border-black group-hover  w-min px-3 py-1">
              <TbCategoryPlus />
              <h3 className=" select-none"> Category </h3>
            </div>
            <div className={` w-full absolute lg:static z-10 bg-white top-[126%] ${CategoryMenu? "left-0": "left-[-110%]"} duration-500 `}>
              <Category />
            </div>
          </div>
          <div className="pt-3 lg:pt-10 w-full lg:w-[76%] mt-0">
            <Slider {...settings}>
              <div>
                <Image className="w-full" src={BannerImg} alt={BannerImg} />
              </div>
              <div>
                <Image className="w-full" src={BannerImg} alt={BannerImg} />
              </div>
              <div>
                <Image className="w-full" src={BannerImg} alt={BannerImg} />
              </div>
              <div>
                <Image className="w-full" src={BannerImg} alt={BannerImg} />
              </div>
            </Slider>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
