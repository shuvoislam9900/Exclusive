import React from "react";
import Flex from "./Flex";
import Product from "./Product";
import { RiH1 } from "react-icons/ri";
import LoadingSkeleton from "./LoadingSkeleton";

const ShopProduct = ({ allProducts, loading }) => {
  return (
    <div>
      <div className="flex justify-end mb-8 p-[2px] md:p-2 lg:p-4">
        <select className="rounded font-popins font-normal text-sm leading-[21px ] w-[78px] border-2  focus:outline-none">
          <option value="9">9</option>
          <option value="12">12</option>
          <option value="15">15</option>
          <option value="18">18</option>
          <option value="21">21</option>
        </select>
      </div>
      <Flex className="flex-wrap justify-between">
        {loading ? (
          <LoadingSkeleton/>
        ) : (
          allProducts.map((item) => (
            <div>
              <Product
                discount={`${Math.floor(item.discountPercentage)}%`}
                name={item.title}
                prevPrice={`$${item.price}`}
                newPrice={`$${Math.floor(
                  item.price -
                    (item.price * Math.floor(item.discountPercentage)) / 100
                )} `}
                imgSRC={item.thumbnail}
                imgAlt={"keyboard"}
                rating={item.rating}
                starCount={ item.reviews ? (item.reviews.length) : '0'}
              />
            </div>
          ))
        )}
      </Flex>
    </div>
  );
};

export default ShopProduct;
