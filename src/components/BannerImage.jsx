import React from "react";
import Image from "./Image";
import BannerImg from "../assets/bannerImg.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BannerImage = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <Image src={BannerImg} alt={'banner img'} />
        </div>
        <div>
          <Image src={BannerImg} alt={'banner img'} />
        </div>
        <div>
          <Image src={BannerImg} alt={'banner img'} />
        </div>
      </Slider>
    </div>
  );
};

export default BannerImage;
