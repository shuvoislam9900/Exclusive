import React from "react";

import Image from "./Image";
import List from "./List";
import ListItem from "./ListItem";
import Flex from "./Flex";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { Rate } from "antd";

const Product = ({
  classes,
  imgSRC,
  imgAlt,
  discount,
  name,
  prevPrice,
  newPrice,
  starCount,
  rating
}) => {
  return (
    <div className={` w-full p-[2px] md:p-2 lg:p-4 xl:w-[270px] ${classes}`}>
      <div className=" group overflow-hidden w-full h-[250px] relative bg-cardBg rounded-[4px] flex justify-center items-center">
        <h5
          className={`font-popins text-xs leading-[18px] text-white bg-komola py-1 px-3 rounded absolute top-3 left-3 ${
            discount == "" ? "hidden" : "flex"
          }`}
        >
          {discount}
        </h5>
        <div className="absolute top-3 right-3">
          <div className=" bg-white rounded-full p-[5px]">
            <FaRegHeart className="text-2xl" />
          </div>
          <div className=" bg-white rounded-full p-[5px] mt-[13px]">
            <FiEye className="text-2xl" />
          </div>
        </div>
        <Image src={imgSRC} alt={imgAlt} />
        <button className=" group-hover:mb-0 duration-500 mb-[-50px] font-popins font-medium text-base text-white bg-black w-full absolute left-0 bottom-0 py-2 rounded-b">
          Add To Cart
        </button>
      </div>
      <h2 className=" font-popins font-medium text-base mt-4">{name}</h2>
      <Flex className="gap-3 items-center my-2">
        <h3 className=" font-popins font-medium text-base text-komola ">
          {newPrice}
        </h3>
        <del className=" font-popins font-medium text-base text-dhusor ">
          {prevPrice}
        </del>
      </Flex>
      <List className={"flex gap-1"}>
        <Rate allowHalf defaultValue={rating} />
        <h3 className=" font-popins font-semibold text-sm text-dhusor">
          ({starCount})
        </h3>
      </List>
    </div>
  );
};

export default Product;
