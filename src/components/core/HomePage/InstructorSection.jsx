import React from "react";
import AboutImage from "../../../assets/Images/about_image.jpg";
import HighlightText from "./HighLightText";
import { FaArrowRight } from "react-icons/fa";
import CTAButton from "../HomePage/Button";
import Lottie from "react-lottie";

const AboutSection = () => {
  return (
    <section id="about_section" className="diffSection -mt-[50px]">
      <div className="max-w-maxContent mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left part - Image */}
        <div className="w-full lg:w-[38%]">
          {/* <img
            src={AboutImage}
            alt="About Us"
            className="rounded-lg shadow-lg object-cover object-center w-full h-auto lg:max-w-none border-none"
          /> */}
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              // path: "/lottie/darkThemeMove.json",
              path: "/lottie/think.json",
            }}
          />
        </div>

        {/* Right part - Text content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          <h1 className="text-4xl font-semibold">
            What you think about us?{" "}
            <HighlightText text={"Educational Website"} />
          </h1>

          <p className="text-[16px] text-justify text-richblack-200 -mt-6">
            Education is the process of empowering individuals with knowledge,
            skills, values, beliefs, and habits. At our coaching institute, we
            use a variety of teaching methods, including interactive sessions,
            hands-on practice, and guided research, to ensure effective
            learning. Our digital resources, including videos, quizzes, and
            topic-based activities, are designed to make learning more engaging
            and practical. By utilizing modern web technologies such as HTML,
            CSS, and JavaScript, we create dynamic learning platforms that make
            education both enjoyable and impactful.
          </p>

          <div className="flex gap-7">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex items-center gap-3">
                Start Learning Today <FaArrowRight />
              </div>
            </CTAButton>
            <CTAButton active={false} linkto={"/login"}>
              <div className="flex items-center gap-3">
                Book a Demo <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
