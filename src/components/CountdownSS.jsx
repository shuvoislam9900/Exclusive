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
      <div className={`flex items-end gap-6 ${classes} `}>
        <div className=" h-16 w-16 rounded-full bg-white p-[15px]">
          <h2 className=" font-popins font-semibold text-base leading-[20px] text-center">
            {Days}
          </h2>
          <h5 className=" font-popind text-[11px] leading-[18px] text-center ">
            Days
          </h5>
        </div>
        <div className=" h-16 w-16 rounded-full bg-white p-[15px]">
          <h2 className=" font-popins font-semibold text-base leading-[20px] text-center">
            {Hours}
          </h2>
          <h5 className="  font-popind text-[11px] leading-[18px] text-center ">
            Hours
          </h5>
        </div>
        <div className=" h-16 w-16 rounded-full bg-white p-[15px]">
          <h2 className=" font-popins font-semibold text-base leading-[20px] text-center">
            {Minutes}
          </h2>
          <h5 className="  font-popind text-[11px] leading-[18px] text-center ">
            Minutes
          </h5>
        </div>
        <div className=" h-16 w-16 rounded-full bg-white p-[15px]">
          <h2 className="font-popins font-semibold text-base leading-[20px] text-center">
            {Seconds}
          </h2>
          <h5 className=" font-popind text-[11px] leading-[18px] text-center ">
            Seconds
          </h5>
        </div>
      </div>
    </>
  );
};

export default CountdownSS;