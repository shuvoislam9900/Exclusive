import React from 'react'
import List from "./List";
import ListItem from "./ListItem";

const ShopCategory = () => {
  return (
    <div>
      <h2 className=" font-popins font-bold text-xl text-[#262626]">
        Shop by Category
      </h2>
      <List className="pr-0 lg:pr-4">
        <ListItem className="font-popins font-normal text-base py-2 leading-6 flex border-b border-white hover:border-black duration-500 px-3 lg:px-0 justify-between items-center">
          Woman’s Fashion
        </ListItem>
        <ListItem className="font-popins font-normal text-base py-2 leading-6 flex border-b border-white hover:border-black duration-500 px-3 lg:px-0 justify-between items-center">
          Men’s Fashion
        </ListItem>
        <ListItem className="font-popins font-normal text-base py-2 leading-6 flex border-b border-white hover:border-black duration-500 px-3 lg:px-0 justify-between items-center">
          Electronics
        </ListItem>
        <ListItem className="font-popins font-normal text-base py-2 leading-6 flex border-b border-white hover:border-black duration-500 px-3 lg:px-0 justify-between items-center">
          Home & Lifestyle
        </ListItem>
        <ListItem className="font-popins font-normal text-base py-2 leading-6 flex border-b border-white hover:border-black duration-500 px-3 lg:px-0 justify-between items-center">
          Medicine
        </ListItem>
        <ListItem className="font-popins font-normal text-base py-2 leading-6 flex border-b border-white hover:border-black duration-500 px-3 lg:px-0 justify-between items-center">
          Sports & Outdoor
        </ListItem>
        <ListItem className="font-popins font-normal text-base py-2 leading-6 flex border-b border-white hover:border-black duration-500 px-3 lg:px-0 justify-between items-center">
          Baby’s & Toys
        </ListItem>
        <ListItem className="font-popins font-normal text-base py-2 leading-6 flex border-b border-white hover:border-black duration-500 px-3 lg:px-0 justify-between items-center">
          Groceries & Pets
        </ListItem>
        <ListItem className="font-popins font-normal text-base py-2 leading-6 flex border-b border-white hover:border-black duration-500 px-3 lg:px-0 justify-between items-center">
          Health & Beauty
        </ListItem>
      </List>
    </div>
  );
}

export default ShopCategory
