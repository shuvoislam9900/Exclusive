import React from "react";
import Container from "./Container";
import Title from "./Title";
import CountDown from "./CountDown";
import Flex from "./Flex";
import Product from "./Product";

const FlashSales = () => {
  return (
    <section className=" mt-36">
      <Container>
        <Flex className=' gap-[87px] items-end mb-10'>
          <Title subtitle="Today’s" title="Flash Sales" />
          <CountDown />
        </Flex>
        <Product/>
      </Container>
    </section>
  );
};

export default FlashSales;
