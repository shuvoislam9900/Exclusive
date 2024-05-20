import React, { useEffect, useState } from "react";
import Flex from "./Flex";
import { countDownDateAndTime } from "countdown-date-time";

const CountDown = () => {
  const conduct_date = "2024-05-20 13:08:00";
  let [ticking, setTicking]=useState({})
  useEffect(() => {
    const countDown = countDownDateAndTime(conduct_date);
    setTicking(countDown)
  }, []);
  return (
    <>
      <Flex className="items-end gap-[6px] lg:gap-[17px]">
        <div>
          <h5 className=" font-popins font-medium text-xs leading-[18px] ">
            Days
          </h5>
          <h2 className=" font-inter font-bold text-2xl lg:text-[32px] leading-[30px] tracking-[1.28px] ">
            {ticking.days}
          </h2>
        </div>
        <span className=" font-bold text-[28px] leading-[40px] text-komola">
          :
        </span>
        <div>
          <h5 className=" font-popins font-medium text-xs leading-[18px] ">
            Hours
          </h5>
          <h2 className=" font-inter font-bold text-2xl lg:text-[32px] leading-[30px] tracking-[1.28px] ">
            {ticking.hours}
          </h2>
        </div>
        <span className=" font-bold text-[28px] leading-[40px] text-komola">
          :
        </span>
        <div>
          <h5 className=" font-popins font-medium text-xs leading-[18px] ">
            Minutes
          </h5>
          <h2 className=" font-inter font-bold text-2xl lg:text-[32px] leading-[30px] tracking-[1.28px] ">
            {ticking.minutes}
          </h2>
        </div>
        <span className=" font-bold text-[28px] leading-[40px] text-komola">
          :
        </span>
        <div>
          <h5 className=" font-popins font-medium text-xs leading-[18px] ">
            Seconds
          </h5>
          <h2 className=" font-inter font-bold text-2xl lg:text-[32px] leading-[30px] tracking-[1.28px] ">
            {ticking.seconds}
          </h2>
        </div>
      </Flex>
    </>
  );
};

export default CountDown;
