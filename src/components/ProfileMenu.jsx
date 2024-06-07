import React from 'react'
import List from './List';
import ListItem from './ListItem';
import { RxPerson } from "react-icons/rx";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { IoStarOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";

const ProfileMenu = ({className}) => {
  return (
    <div>
      <div
        className={` p-4 h-[208px] w-[225px] rounded backdrop-blur-3xl backdrop-saturation-200 backdrop-brightness-50 bg-black opacity-70 ${className}`}
      >
        <List>
          <ListItem className="font-popins font-normal text-sm text-primaryWhite flex items-center gap-4 pb-4">
            <RxPerson className="text-2xl" />
            <p>Manage My Account</p>
          </ListItem>
          <ListItem className="font-popins font-normal text-sm text-primaryWhite flex items-center gap-4 pb-4">
            <FiShoppingBag className="text-2xl" />
            <p>My Order</p>
          </ListItem>
          <ListItem className="font-popins font-normal text-sm text-primaryWhite flex items-center gap-4 pb-4">
            <MdOutlineCancel className="text-2xl" />
            <p>My Cancellations</p>
          </ListItem>
          <ListItem className="font-popins font-normal text-sm text-primaryWhite flex items-center gap-4 pb-4">
            <IoStarOutline className="text-2xl" />
            <p>My Reviews</p>
          </ListItem>
          <ListItem className="font-popins font-normal text-sm text-primaryWhite flex items-center gap-4 pb-4">
            <BiLogOut className="text-2xl" />
            <p>Logout</p>
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default ProfileMenu
