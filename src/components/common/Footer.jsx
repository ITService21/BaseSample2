import React from "react";
import { FooterLink2 } from "../../data/footer-links";
import { Link } from "react-router-dom";

// Images
import Logo from "../../assets/Logo/Logo-Full-Light.png";

// Icons
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = ["Articles", "Blog", "Chart Sheet"];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const ContactUs = [
  { icon: <FaFacebook />, Label: "Facebook" },
  { icon: <FaGoogle />, Label: "Google" },
  { icon: <FaTwitter />, Label: "Twitter" },
  { icon: <FaYoutube />, Label: "Youtube" },
];
const Community = [
  { label: "Forums", link: "/forums" },
  { label: "Events", link: "/events" },
  { label: "reach", link: "/reach" },
];
const Company = ["About", "Events", "Affiliates"];
// {/* <img src={Logo} alt="" className="object-contain" /> */}
const Footer = () => {
  return (
    // bg-[#ff0088] hover:bg-[#ff48a9]
    <div className="bg-[#ff0088] opacity-[0.85]">
      <div className="text-white pt-[8vw] md:pt-[6vw] lg:pt-[4vw] text-center mx-auto text-[24px] md:text-[22px] lg:text-[24px]">
        INSTITUTE LOGO
      </div>
      <div className="flex lg:flex-row gap-8 items-center justify-evenly w-11/12 max-w-maxContent text-white leading-6 mx-auto relative py-2">
        <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-richblack-700 mt-10">
          {/*Main Section 1 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-9 justify-between w-full mx-[8vw]">
            <div className="">
              <h1 className="text-white font-semibold text-[16px]">
                About Us
              </h1>

              <div className="flex flex-col gap-2 mt-2">
                {Company.map((ele, i) => {
                  return (
                    <div
                      key={i}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.toLowerCase()}>{ele}</Link>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sub Section 2 */}
            <div className="">
              <h1 className="text-white font-semibold text-[16px]">
                Resources
              </h1>

              <div className="flex flex-col gap-2 mt-2 ">
                {Resources.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sub Section 3 */}
            <div className="">
              <h1 className="text-white font-semibold text-[16px]">
                Plans
              </h1>

              <div className="flex flex-col gap-2 mt-2">
                {Plans.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sub Section 4 */}
            <div className="">
              <h1 className="text-white font-semibold text-[16px]">
                Community
              </h1>

              <div className="flex flex-col gap-2 mt-2">
                {Community.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="flex text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <div className="my-auto">{ele?.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Sub Section 5 */}
            <div className="">
              <h1 className="text-white font-semibold text-[16px]">
                Contact Us
              </h1>

              <div className="flex flex-col gap-2 mt-2">
                {ContactUs.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="flex text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <div className="my-auto">{ele?.icon}</div>
                      <div className="my-auto ml-1">{ele?.Label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-white mx-auto  pb-14 text-sm">
        {/* Main Section 2 */}
        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
          <div className="flex flex-row">
            {BottomFooter.map((ele, i) => {
              return (
                <div
                  key={i}
                  className={` ${
                    BottomFooter.length - 1 === i
                      ? ""
                      : "border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  } px-3 `}
                >
                  <Link to={ele.split(" ").join("-").toLocaleLowerCase()}>
                    {ele}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center">Made By XYZ Singh</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
