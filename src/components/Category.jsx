import React from 'react'
import List from './List'
import ListItem from "./ListItem";
import { FaAngleRight } from "react-icons/fa6";

const Category = () => {
  return (
    <div className="pr-0 lg:pr-4">
      <List>
        <ListItem className="font-popins font-normal text-base py-2 leading-6 flex border-b border-white hover:border-black duration-500 px-3 lg:px-0 justify-between items-center">
          Woman’s Fashion {true ?<FaAngleRight/> :''}
        </ListItem>
        <ListItem className="font-popins font-normal text-base py-2 leading-6 flex border-b border-white hover:border-black duration-500 px-3 lg:px-0 justify-between items-center">
          Men’s Fashion {true ?<FaAngleRight/> :''}
        </ListItem>
        <ListItem className="font-popins font-normal text-base py-2 leading-6 flex border-b border-white hover:border-black duration-500 px-3 lg:px-0 justify-between items-center">
          Electronics {false ? <FaAngleRight/>:''}
        </ListItem>
        <ListItem className="font-popins font-normal text-base py-2 leading-6 flex border-b border-white hover:border-black duration-500 px-3 lg:px-0 justify-between items-center">
          Home & Lifestyle {false ? <FaAngleRight/>:''}
        </ListItem>
        <ListItem className="font-popins font-normal text-base py-2 leading-6 flex border-b border-white hover:border-black duration-500 px-3 lg:px-0 justify-between items-center">
          Medicine {false ? <FaAngleRight/>:''}
        </ListItem>
        <ListItem className="font-popins font-normal text-base py-2 leading-6 flex border-b border-white hover:border-black duration-500 px-3 lg:px-0 justify-between items-center">
          Sports & Outdoor {false ?<FaAngleRight/> :''}
        </ListItem>
        <ListItem className="font-popins font-normal text-base py-2 leading-6 flex border-b border-white hover:border-black duration-500 px-3 lg:px-0 justify-between items-center">
          Baby’s & Toys {false ?<FaAngleRight/> :''}
        </ListItem>
        <ListItem className="font-popins font-normal text-base py-2 leading-6 flex border-b border-white hover:border-black duration-500 px-3 lg:px-0 justify-between items-center">
          Groceries & Pets{false ? <FaAngleRight/> :''}
        </ListItem>
        <ListItem className="font-popins font-normal text-base py-2 leading-6 flex border-b border-white hover:border-black duration-500 px-3 lg:px-0 justify-between items-center">
          Health & Beauty {false ?<FaAngleRight/> :''}
        </ListItem>
      </List>
    </div>
  );
}

export default Category
