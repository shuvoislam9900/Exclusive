import React, { useState } from "react";
import Container from "./Container";
import Image from "./Image";
import List from "./List";
import ListItem from "./ListItem";
import { IoIosSearch, IoIosHeartEmpty } from "react-icons/io";
import { RxPerson } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import Flex from "./Flex";
import { Link } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  let handleMenu = () => {
    setMenu(!menu);
  };

  let [showProfileMenu, setShowProfileMenu] = useState(false);
  let handleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  }  

  return (
    <nav className="mt-4 pb-4 border-b relative">
      <Container>
        <Flex className="justify-between items-center">
          <Link to="/">
            <Image src="images/logo.png" />
          </Link>
          <div
            className={`${
              menu ? "block" : "hidden"
            } lg:flex bg-black lg:bg-transparent w-full p-8 lg:p-0 lg:w-[74%] justify-between absolute z-50 top-10 left-0  lg:static`}
          >
            <List className={"my-auto"}>
              <div
                className={
                  " flex-none lg:flex justify-between gap-9 items-center "
                }
              >
                <ListItem className="text-white lg:text-black mb-3 lg:mb-0 w-full lg:w-auto transition duration-700 font-popins font-normal text-base leading-6 border-b-[1px] border-black lg:border-white lg:hover:border-black hover:border-white block lg:inline-block ">
                  <Link to="/">Home</Link>
                </ListItem>
                <ListItem className="text-white lg:text-black mb-3 lg:mb-0 w-full lg:w-auto transition duration-700 font-popins font-normal text-base leading-6 border-b-[1px] border-black lg:border-white lg:hover:border-black hover:border-white block lg:inline-block ">
                  Contact
                </ListItem>
                <ListItem className="text-white lg:text-black mb-3 lg:mb-0 w-full lg:w-auto transition duration-700 font-popins font-normal text-base leading-6 border-b-[1px] border-black lg:border-white lg:hover:border-black hover:border-white block lg:inline-block ">
                  About
                </ListItem>
                <ListItem className="text-white lg:text-black mb-3 lg:mb-0 w-full lg:w-auto transition duration-700 font-popins font-normal text-base leading-6 border-b-[1px] border-black lg:border-white lg:hover:border-black hover:border-white block lg:inline-block ">
                  <Link to="/signup">Sign Up</Link>
                </ListItem>
              </div>
            </List>
            <Flex className="gap-6 items-center">
              <div className=" w-min relative">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="py-[10px] px-5 w-[243px] bg-[#F5F5F5] font-popins font-normal text-xs leading-[18px]"
                />
                <IoIosSearch className=" absolute top-[7px] right-4 size-6 " />
              </div>
              <div className="relative">
                <Flex className=" items-center gap-4">
                  <IoIosHeartEmpty className="size-6 text-white lg:text-black" />
                  <IoCartOutline className="size-6 text-white lg:text-black" />
                  <RxPerson
                    onClick={handleProfileMenu}
                    className="size-6 text-white lg:text-black"
                  />
                </Flex>
                <ProfileMenu
                  className={`absolute z-50 right-0 top-[48px] ${showProfileMenu ? "block" : "hidden"}`}
                />
              </div>
            </Flex>
          </div>
          <RiMenu3Fill
            onClick={handleMenu}
            className=" size-7 lg:hidden absolute top-0 right-3"
          />
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
