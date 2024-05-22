import React from "react";
import Container from "./Container";
import Title from "./Title";
import Flex from "./Flex";
import Image from "./Image";
import playstation from "../assets/playstation.png"
import { Link } from "react-router-dom";
import womens from "../assets/womens.png"
import speakers from "../assets/speakers.png";
import perfume from "../assets/perfume.png";


const NewArrival = () => {
  return (
    <section>
      <Container>
        <div className=" lg:mb-[60px] mb-8">
          <Title subtitle={"Featured"} title={"New Arrival"} />
        </div>
        <Flex className="justify-between gap-[3%]">
          <div>
            <Link>
              <Image src={playstation} alt={playstation} />
            </Link>
          </div>
          <Flex className=" flex-col justify-between gap-[5%]">
            <div>
              <Link>
                <Image src={womens} alt={womens} />
              </Link>
            </div>
            <Flex className="justify-between gap-[6%]">
              <Link>
                <Image src={speakers} alt={speakers} />
              </Link>
              <Link>
                <Image src={perfume} alt={perfume} />
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default NewArrival;
