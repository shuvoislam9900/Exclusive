import React, { useEffect, useState } from "react";
import Flex from "./Flex";
import { countDownDateAndTime } from "countdown-date-time";

const CountDown = () => {
  const conduct_date = "2024-12-20 13:08:00";
  let [ticking, setTicking]=useState({})
  useEffect(() => {
    const countDown = countDownDateAndTime(conduct_date);
    setTicking(countDown)
  }, []);
  return (
    <>
      <Flex className="items-end gap-[6px] lg:gap-[17px]">
        <div>
          <h5 className=" font-popins font-medium text-[10px] lg:text-xs leading-[18px] text-center">
            Days
          </h5>
          <h2 className=" font-inter font-bold text-2xl lg:text-[32px] leading-[30px] text-center tracking-[1.28px] ">
            {ticking.days}
          </h2>
        </div>
        <span className=" font-bold text-[28px] leading-[40px] text-komola">
          :
        </span>
        <div>
          <h5 className=" font-popins font-medium text-[10px] lg:text-xs leading-[18px] text-center">
            Hours
          </h5>
          <h2 className=" font-inter font-bold text-2xl lg:text-[32px] leading-[30px] text-center tracking-[1.28px] ">
            {ticking.hours}
          </h2>
        </div>
        <span className=" font-bold text-[28px] leading-[40px] text-komola">
          :
        </span>
        <div>
          <h5 className=" font-popins font-medium text-[10px] lg:text-xs leading-[18px] text-center">
            Minutes
          </h5>
          <h2 className=" font-inter font-bold text-2xl lg:text-[32px] leading-[30px] text-center tracking-[1.28px] ">
            {ticking.minutes}
          </h2>
        </div>
        <span className=" font-bold text-[28px] leading-[40px] text-komola">
          :
        </span>
        <div>
          <h5 className=" font-popins font-medium text-[10px] lg:text-xs leading-[18px] text-center">
            Seconds
          </h5>
          <h2 className=" font-inter font-bold text-2xl lg:text-[32px] leading-[30px] text-center tracking-[1.28px] ">
            {ticking.seconds}
          </h2>
        </div>
      </Flex>
    </>
  );
};

export default CountDown;
