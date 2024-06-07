import React from 'react'
import Image from './Image'
import bgImg from '../assets/logBg.png'
import Container from './Container';
import Flex from './Flex';
import Button from "./Button";
import { Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb"

const Login = () => {
  return (
    <section className="">
      <Container>
        <Breadcrumb/>
        <div className="relative mt-[60px]">
          <Image
            src={bgImg}
            alt={bgImg}
            className="hidden lg:block absolute top-[0%] left-[-22%]"
          />
          <form className=" max-w-[370px] m-auto lg:m-0 lg:ms-auto lg:py-[227px]">
            <h2 className=" font-inter font-medium text-4xl leading-[30px] lg:leading-snug">
              Log in to Exclusive
            </h2>
            <h4 className="font-popins font-normal text-base text-black mt-6 mb-12">
              Enter your details below
            </h4>
            <input
              className=" focus:outline-none border-b-2 w-full mb-10 placeholder:font-popins placeholder:font-normal placeholder:text-base"
              type="text"
              placeholder="Email or Phone Number"
            />
            <input
              className=" focus:outline-none border-b-2 w-full mb-10 placeholder:font-popins placeholder:font-normal placeholder:text-base"
              type="Password"
              placeholder="Password"
            />
            <Flex className="justify-between">
              <Button value="Log in" />
              <Link className="font-popins font-medium text-base text-komola py-2 lg:py-4 inline-block">
                Forget Password?
              </Link>
            </Flex>
          </form>
        </div>
      </Container>
    </section>
  );
}

export default Login
