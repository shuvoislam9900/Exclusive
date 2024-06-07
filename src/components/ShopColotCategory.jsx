import React from "react";
import ProductColor from "./ProductColor";

const ShopColotCategory = () => {
  return (
    <div className="mt-10">
      <h2 className=" font-popins font-bold text-xl text-[#262626]">
        Shop by Color
      </h2>
      <ProductColor clrName="Black" clrCode="#000000"/>
      <ProductColor clrName="Red" clrCode="#ff0000"/>
      <ProductColor clrName="Green" clrCode="#00ff00"/>
    </div>
  );
};

export default ShopColotCategory;
