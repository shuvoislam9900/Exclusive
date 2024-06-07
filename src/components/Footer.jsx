import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { VscSend } from "react-icons/vsc";
import { Link } from "react-router-dom";
import qr from "../assets/qr.png";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";
import Image from "./Image";
import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { FiInstagram } from "react-icons/fi";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" bg-black mt-8 lg:mt-[140px]">
      <Container>
        <div className="lg:pt-[80px] pt-7 lg:mb-[60px]">
          <Flex className="justify-between flex-wrap sm:gap-4 md:gap-4 lg:gap-4">
            <div className="max-w-[217px] mb-8">
              <h2 className=" font-inter font-bold text-2xl leading-6 tracking-wider text-white">
                Exclusive
              </h2>
              <button className="border-none font-popins font-medium text-base lg:text-xl my-6 text-white">
                Subscribe
              </button>
              <h6 className=" font-popins font-normal text-sm lg:text-base text-white">
                Get 10% off your first order
              </h6>
              <div className=" relative">
                <input
                  className=" w-full bg-transparent border-[2px] rounded py-3 pl-4 pr-[71px] mt-4"
                  type="email"
                  placeholder="Enter your email"
                />
                <button>
                  <VscSend className="text-white text-xl lg:text-2xl absolute top-7 right-4" />
                </button>
              </div>
            </div>
            <div className="max-w-[175px] mb-8">
              <h3 className=" font-popins font-medium text-base lg:text-xl text-white">
                Support
              </h3>
              <p className=" font-popins font-normal text-sm lg:text-base text-white pt-6">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </p>
              <p className=" font-popins font-normal text-sm lg:text-base text-white py-4">
                exclusive@gmail.com
              </p>
              <p className=" font-popins font-normal text-sm lg:text-base text-white">
                +88015-88888-9999
              </p>
            </div>
            <div className="max-w-[123px] mb-8">
              <h3 className=" font-popins font-medium text-base lg:text-xl text-white mb-6">
                Account
              </h3>
              <Link>
                <p className=" font-popins font-normal text-sm lg:text-base text-white mt-4">
                  My Account
                </p>
              </Link>
              <Link>
                <p className=" font-popins font-normal text-sm lg:text-base text-white mt-4">
                  Login / Register
                </p>
              </Link>
              <Link>
                <p className=" font-popins font-normal text-sm lg:text-base text-white mt-4">
                  Cart
                </p>
              </Link>
              <Link>
                <p className=" font-popins font-normal text-sm lg:text-base text-white mt-4">
                  Wishlist
                </p>
              </Link>
              <Link>
                <p className=" font-popins font-normal text-sm lg:text-base text-white mt-4">
                  Shop
                </p>
              </Link>
            </div>
            <div className="max-w-[123px] mb-8">
              <h3 className="  font-popins font-medium text-sm lg:text-xl text-white mb-6">
                Quick Link
              </h3>
              <Link>
                <p className=" font-popins font-normal text-sm lg:text-base text-white mt-4">
                  Privacy Policy
                </p>
              </Link>
              <Link>
                <p className=" font-popins font-normal text-sm lg:text-base text-white mt-4">
                  Terms Of Use
                </p>
              </Link>
              <Link>
                <p className=" font-popins font-normal text-sm lg:text-base text-white mt-4">
                  FAQ
                </p>
              </Link>
              <Link>
                <p className=" font-popins font-normal text-sm lg:text-base text-white mt-4">
                  Contact
                </p>
              </Link>
            </div>
            <div className="max-w-[198px] mb-8">
              <h3 className=" font-popins font-medium text-base lg:text-xl text-white mb-4 lg:mb-6">
                Download App
              </h3>
              <p className=" font-popins font-medium text-[10px] leading-4 lg:text-xs lg:leading-[18px] text-[#a8a8a8] mt-4">
                Save $3 with App New User Only
              </p>
              <div className="mt-2">
                <Flex className="justify-between">
                  <Image src={qr} alt={"qr"} />
                  <Flex className="flex-col py-[4px] justify-between">
                    <Link>
                      <Image src={playstore} alt={"playstore"} />
                    </Link>
                    <Link>
                      <Image src={appstore} alt={"appstore"} />
                    </Link>
                  </Flex>
                </Flex>
              </div>
              <Flex className="gap-4 lg:gap-6 mt-4 lg:mt-6">
                <Link>
                  <RiFacebookLine className="text-white text-xl lg:text-2xl" />
                </Link>
                <Link>
                  <CiTwitter className="text-white text-xl lg:text-2xl" />
                </Link>
                <Link>
                  <FiInstagram className="text-white text-xl lg:text-2xl" />
                </Link>
                <Link>
                  <RiLinkedinLine className="text-white text-xl lg:text-2xl" />
                </Link>
              </Flex>
            </div>
          </Flex>
        </div>
      </Container>
      <Flex className=" border-t-2 border-[#141414] justify-center py-6 gap-2">
        <FaRegCopyright className="text-[#3d3d3d] font-normal text-sm lg:text-base mt-1" />
        <p className="text-[#3d3d3d] font-popins font-normal text-sm lg:text-base text-center inline">
          Copyright Rimel 2022. All right reserved
        </p>
      </Flex>
    </footer>
  );
};

export default Footer;
