import React from 'react'
import Image from './Image'
import bgImg from '../assets/logBg.png'
import Container from './Container';
import Flex from './Flex';
import Button from "./Button";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Breadcrumb from './Breadcrumb';

const SignUp = () => {
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
          <form className=" max-w-[370px] m-auto lg:m-0 lg:ms-auto lg:py-[125px]">
            <h2 className=" font-inter font-medium text-4xl leading-[30px] lg:leading-snug">
              Create an account
            </h2>
            <h4 className="font-popins font-normal text-base text-black mt-6 mb-12">
              Enter your details below
            </h4>
            <input
              className=" focus:outline-none border-b-2 w-full mb-10 placeholder:font-popins placeholder:font-normal placeholder:text-base"
              type="text"
              placeholder="Name"
            />
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
            <Button value="Create Account" classes="w-full text-center" />
            <Link className="font-popins font-medium text-base w-full px-full py-2  lg:py-4 rounded text-center border-2 mt-4 inline-block">
              <FcGoogle className="inline-block text-2xl leading-6" /> Sign up
              with Google
            </Link>
            <Flex className="w-full justify-center lg:mt-8 mt-5">
              <h5 className=" font-popins font-normal text-base text-[#4c4c4c]">
                Already have account?
              </h5>
              <Link to='/login' className="ml-4 font-popins font-medium text-base text-[#4c4c4c] border-b-2 border-[#808080]">
                Log in
              </Link>
            </Flex>
          </form>
        </div>
      </Container>
    </section>
  );
}

export default SignUp
