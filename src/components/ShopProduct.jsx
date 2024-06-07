import React, { useState } from "react";
import Flex from "./Flex";
import Product from "./Product";
import { RiH1 } from "react-icons/ri";
import LoadingSkeleton from "./LoadingSkeleton";
import Pagination from "./Pagination";

const ShopProduct = ({ allProducts, loading }) => {

let [productPerPage,setProductPerPage ]=useState(9)

let handleProductPerPage = (e) =>{
  setProductPerPage(e.target.value);
}

  return (
    <div>
      <div className="flex justify-end mb-8 p-[2px] md:p-2 lg:p-4">
        <select
          onChange={handleProductPerPage}
          className="rounded font-popins font-normal text-sm leading-[21px ] w-[78px] border-2  focus:outline-none"
        >
          <option value="6">6</option>
          <option selected value="9">
            9
          </option>
          <option value="12">12</option>
          <option value="15">15</option>
          <option value="18">18</option>
        </select>
      </div>
      <div>
        {loading ? (
          <LoadingSkeleton />
        ) : (
          <Pagination itemsPerPage={productPerPage} allProducts={allProducts} />
        )}
      </div>
    </div>
  );
};

export default ShopProduct;
