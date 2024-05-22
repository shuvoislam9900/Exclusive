import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { TbTruckDelivery } from "react-icons/tb";
import { TbHeadset } from "react-icons/tb";
import { AiOutlineSafetyCertificate } from "react-icons/ai";


const Services = () => {
  return (
    <section className=" mt-8 lg:mt-36">
      <Container>
        <div>
          <Flex className=" justify-around">
            <div>
              <TbTruckDelivery className=" mx-auto h-[60px] lg:h-[80px] w-[60px] lg:w-[80px] rounded-full  p-1 lg:p-[8px] lg:border-[10px] border-[5px] border-[#c1c0c1] bg-black text-white " />
              <h3 className=" mt-4 lg:mt-6 mb-[6px] lg:mb-2 font-popins font-semibold text-base lg:text-xl text-center">
                FREE AND FAST DELIVERY
              </h3>
              <h5 className=" font-popins font-normal text-xs lg:text-sm lg:leading-[21px] text-center">
                Free delivery for all orders over $140
              </h5>
            </div>
            <div>
              <TbHeadset className=" mx-auto h-[60px] lg:h-[80px] w-[60px] lg:w-[80px] rounded-full  p-1 lg:p-[8px] lg:border-[10px] border-[5px] border-[#c1c0c1] bg-black text-white " />
              <h3 className=" mt-4 lg:mt-6 mb-[6px] lg:mb-2 font-popins font-semibold text-base lg:text-xl text-center">
                24/7 CUSTOMER SERVICE
              </h3>
              <h5 className=" font-popins font-normal text-sm leading-[21px] text-center">
                Friendly 24/7 customer support
              </h5>
            </div>
            <div>
              <AiOutlineSafetyCertificate className=" mx-auto h-[60px] lg:h-[80px] w-[60px] lg:w-[80px] rounded-full  p-1 lg:p-[8px] lg:border-[10px] border-[5px] border-[#c1c0c1] bg-black text-white " />
              <h3 className=" mt-4 lg:mt-6 mb-[6px] lg:mb-2 font-popins font-semibold text-base lg:text-xl text-center">
                MONEY BACK GUARANTEE
              </h3>
              <h5 className=" font-popins font-normal text-sm leading-[21px] text-center">
                We reurn money within 30 days
              </h5>
            </div>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Services;
