import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import Container from "../components/Container";
import Flex from "../components/Flex";
import ShopCategory from "../components/ShopCategory";
import ShopColotCategory from "../components/ShopColotCategory";
import ShopProduct from "../components/ShopProduct";
import axios from "axios";

const ShopPage = () => {
  let [allProducts, setAllProducts] = useState([]);
  let [loading, setLoading] = useState(true);

  function getAllProduct() {
    axios.get("https://dummyjson.com/products").then((data) => {
      setAllProducts(data.data.products);
      setLoading(false)
    });
  }

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <section>
      <div>
        <Container>
          <Breadcrumb />
          <Flex className="mt-12">
            <div className="w-[25%]">
              <ShopCategory />
              <ShopColotCategory />
            </div>
            <div className="w-[75%]">
              <ShopProduct loading={loading} allProducts={allProducts} />
            </div>
          </Flex>
        </Container>
      </div>
    </section>
  );
};

export default ShopPage;
