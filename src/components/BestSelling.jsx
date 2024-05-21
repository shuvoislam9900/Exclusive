import Button from "./Button";
import Container from "./Container";
import Flex from "./Flex";
import Product from "./Product";
import Title from "./Title";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import jacket from '../assets/jacket.png'
import bag from '../assets/bag.png'
import cooler from '../assets/cooler.png'
import cornerTable from '../assets/cornerTable.png'

const BestSelling = () => {
          var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: false,
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
                  infinite: false,
                  dots: false,
                },
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 2,
                  initialSlide: 2,
                  arrows: false,
                  infinite: false,
                  dots: false,
                },
              },
            ],
          };
  return (
    <section>
      <Container>
        <Flex className=" gap-4 justify-between flex-wrap items-end mb-8 lg:mb-16">
          <Title subtitle={"This Month"} title={"Best Selling Products"} />
          <Button classes={""} value={"View All"} />
        </Flex>
        <Slider {...settings}>
          <Product imgSRC={jacket} imgAlt={"jacket"} classes={"xl:!p-0 2xl:!p-0"} />
          <Product imgSRC={bag} imgAlt={"bag"} classes={"xl:!p-0 2xl:!p-0"} />
          <Product imgSRC={cooler} imgAlt={"cooler"} classes={"xl:!p-0 2xl:!p-0"} />
          <Product imgSRC={cornerTable} imgAlt={"cornerTable"} classes={"xl:!p-0 2xl:!p-0"} />
        </Slider>
      </Container>
    </section>
  );
};

export default BestSelling;
