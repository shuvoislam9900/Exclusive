import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const CountdownSS = ({ classes }) => {
  const [Days, setDays] = useState(0);
  const [Hours, setHours] = useState(0);
  const [Minutes, setMinutes] = useState(0);
  const [Seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval((id) => {
      const target = new Date("17May 2028 03:05 PM");
      const present = new Date();
      const timeDiff = (target - present) / 1000;
      if (timeDiff > 0) {
        setDays(Math.floor(timeDiff / 60 / 60 / 24));
        setHours(Math.floor((timeDiff / 60 / 60) % 24));
        setMinutes(Math.floor((timeDiff / 60) % 60));
        setSeconds(Math.floor(timeDiff % 60));
      } else {
        clearInterval(id);
      }
      return id;
    }, 1000);
  }, [CountdownSS]);

  return (
    <>
      <div className={`flex items-end gap-[11%] ${classes} `}>
        <div className=" max-w-[62px] max-h-[62px] rounded-full bg-white flex flex-col justify-center items-center p-[13%]">
          <h2 className=" font-popins font-semibold text-[100%] leading-[20px] text-center">
            {Days}
          </h2>
          <h5 className=" font-popind text-[4px] lg:text-[11px] font-semibold lg:font-normal  leading-[6px] text-center ">
            Days
          </h5>
        </div>
        <div className=" max-w-[62px] max-h-[62px] rounded-full bg-white flex flex-col justify-center items-center p-[13%]">
          <h2 className=" font-popins font-semibold text-[100%] leading-[20px] text-center">
            {Hours}
          </h2>
          <h5 className="  font-popind text-[4px] lg:text-[11px] font-semibold lg:font-normal  leading-[6px] text-center ">
            Hours
          </h5>
        </div>
        <div className=" max-w-[62px] max-h-[62px] rounded-full bg-white flex flex-col justify-center items-center p-[13%]">
          <h2 className=" font-popins font-semibold text-[100%] leading-[20px] text-center">
            {Minutes}
          </h2>
          <h5 className="  font-popind text-[4px] lg:text-[11px] font-semibold lg:font-normal  leading-[6px] text-center ">
            Minutes
          </h5>
        </div>
        <div className=" max-w-[62px] max-h-[62px] rounded-full bg-white flex flex-col justify-center items-center p-[13%]">
          <h2 className="font-popins font-semibold text-[100%] leading-[20px] text-center">
            {Seconds}
          </h2>
          <h5 className=" font-popind text-[4px] lg:text-[11px] font-semibold lg:font-normal  leading-[6px] text-center ">
            Seconds
          </h5>
        </div>
      </div>
    </>
  );
};

export default CountdownSS;