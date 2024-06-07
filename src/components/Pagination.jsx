import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";
import Flex from "./Flex";

const Pagination = ({ itemsPerPage, allProducts }) => {
  const items = allProducts

  function Items({ currentItems }) {
    return (
      <Flex  className="flex-wrap justify-between">
        {currentItems &&
          currentItems.map((item) => (
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
                starCount={item.reviews ? item.reviews.length : "0"}
              />
            </div>
          ))}
      </Flex>
    );
  }

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        className="flex gap-3 mt-10"
        pageClassName="bg-black text-white h-[27px] w-[57px] text-center"
        pageLinkClassName = 'px-6 py-1'
      />
    </>
  );
};

export default Pagination;
