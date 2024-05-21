import React from "react";

import Image from "./Image";
import List from "./List";
import ListItem from "./ListItem";
import Flex from "./Flex";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

const Product = ({classes, imgSRC, imgAlt}) => {
  return (
    <div className={` w-full p-[2px] md:p-2 lg:p-4 xl:w-[270px] ${classes}`}>
      <div className=" group overflow-hidden w-full h-[250px] relative bg-cardBg rounded-[4px] flex justify-center items-center">
        <h5 className=" font-popins text-xs leading-[18px] text-white bg-komola py-1 px-3 rounded absolute top-3 left-3">
          -20%
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
      <h2 className=" font-popins font-medium text-base mt-4">
        HAVIT HV-G92 Gamepad
      </h2>
      <Flex className="gap-3 items-center my-2">
        {" "}
        <h3 className=" font-popins font-medium text-base text-komola ">
          $120
        </h3>
        <del className=" font-popins font-medium text-base text-dhusor ">
          $160
        </del>
      </Flex>
      <List className={"flex gap-1"}>
        <ListItem>
          <FaStar className="text-holud" />
        </ListItem>
        <ListItem>
          <FaStar className="text-holud" />
        </ListItem>
        <ListItem>
          <FaStar className="text-holud" />
        </ListItem>
        <ListItem>
          <FaStar className="text-holud" />
        </ListItem>
        <ListItem>
          <FaStar className="text-holud" />
        </ListItem>
        <ListItem>
          <FaStar className="text-holud" />
        </ListItem>
        <h3 className=" font-popins font-semibold text-sm text-dhusor">(88)</h3>
      </List>
    </div>
  );
};

export default Product;
