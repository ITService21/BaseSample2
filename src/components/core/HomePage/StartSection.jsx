import React from "react";
import Lottie from "react-lottie";
import { FaGoogle, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "@fontsource/roboto";
import "./style.css";
const StartSection = () => {
  const navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    // path: "/lottie/darkThemeMove.json",
    path: "/lottie/blueThemeSky.json",
  };
  return (
    <div className="relative rounded-b-full">
      {/* Image Section */}
      {/* <div className="w-[100vw] -mt-[60vw]  md:-mt-[110vw] lg:-mt-[121vw] md:w-full"> */}
      <div className="w-[100vw] -mt-[40vw]  md:-mt-[110vw] lg:-mt-[118vw] md:w-full">
        <Lottie options={defaultOptions} />
      </div>

      {/* Text Content */}
      <div className="absolute top-[30%] mt-[10vw]  md:mt-[71vw] lg:mt-[73vw] w-full h-full flex flex-col md:flex-row justify-between items-start px-8">
        <div className="w-[80vw] mx-auto">
          <h1 className="text-[25px] md:text-[5vw] lg:text-[5vw] text-center font-roboto font-thin bg-gradient-to-r from-[#e14cb4] via-[#28e2ff] to-[#00ff1e] bg-clip-text text-transparent">
          {/* <h1 className="text-[25px] md:text-[5vw] lg:text-[5vw] text-center font-roboto font-thin text-white bg-clip-text text-transparent"> */}
            Achieve{" "}
            <b>
              <u>academic success</u>
            </b>{" "}
            today{" "}
            <b>
              <u>with the best</u>
            </b>{" "}
            coaching institute!
          </h1>{" "}
        </div>
      </div>
    </div>
  );
};

export default StartSection;
