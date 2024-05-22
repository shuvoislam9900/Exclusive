import React from "react";
import Image from "./Image";
import frame from "../assets/Frame.png";
import frame6 from "../assets/Frame 600.png";
import Container from "./Container";
import CountdownSS from "./CountdownSS";
import { Link } from "react-router-dom";

const Frame = () => {
  return (
    <div className="lg:mt-36 mt-8 pb-8 lg:pb-[70px] ">
      <Container>
        <div className=" relative">
          <Link>
            {<Image className={"flex lg:hidden"} src={frame6} alt={"frame6"} />}
            <Image className={"hidden lg:flex"} src={frame} alt={"frame"} />
            <CountdownSS
              classes={"hidden lg:flex absolute top-[54%] left-[5%]"}
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Frame;
