import Container from "./Container";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" bg-black">
      <Container>
        <div className=" relative py-3">
          <h3 className=" w-[75%] lg:w-auto text-center font-popins text-primaryWhite text-sm font-normal leading-[21px]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <Link className=" font-semibold leading-6 underline ml-2">
              ShopNow
            </Link>
          </h3>
          <select className=" absolute top-3 right-0 rounded-none font-popins font-normal text-sm leading-[21px ] w-[78px] text-primaryWhite bg-black border-none focus:outline-none">
            <option selected value="English">English</option>
            <option value="BN">BN</option>
          </select>
        </div>
      </Container>
    </header>
  );
};

export default Header;
