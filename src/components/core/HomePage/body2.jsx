import React, { useRef } from "react";
import useScrollAnimation from "../../../hooks/useScrollAnimation";
import Lottie from "react-lottie";

const PerfectPlatform = () => {
  const animationRef5 = useScrollAnimation("animate-flipInX");
  const animationRef6 = useScrollAnimation("animate-flipInX");
  const animationRef7 = useScrollAnimation("animate-flipInX");
  const animationRef8 = useScrollAnimation("animate-flipInX");
  const animationRef9 = useScrollAnimation("animate-flipInX");

  return (
    <section className="py-16 ">
      <h2 className="text-4xl font-bold text-center mb-8 text-white">
        Empowering You to Achieve Excellence in Your
        <span className="bg-gradient-to-b from-[#864135] to-[#F09819] text-transparent bg-clip-text font-bold">
          {" "}
          Academic Goals{" "}
        </span>
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center">
        {/* <ScrollAnimation animateIn="flipInX"> */}
        <div className="group relative bg-[#070918] m-6 p-6 rounded-lg shadow-lg shadow-[#ffffff] hover:shadow-[#ff8080] text-center max-w-sm transition-all duration-200 hover:scale-105 overflow-hidden">
          {/* Lottie Animation */}
          <div className="relative z-10  lg:w-[220px] lg:h-[220px] mx-auto">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                path: "/lottie/studyBoy.json",
              }}
            />
          </div>
          {/* Title */}
          <div className="relative z-10 text-xl font-semibold mb-2 text-white transition-transform duration-200">
            Class 1 to 10
          </div>
          {/* Description */}
          <span className="relative z-10 text-white mb-4 block transition-opacity duration-200">
            Preparing for school exams, building a strong foundation, or
            excelling in your studies? Leverage our expert guidance and engaging
            strategies to master your subjects and grow with confidence from
            Class 1 to 10.
          </span>
          {/* Button */}
          <a
            type="button"
            className="relative z-10 text-center text-[13px] sm:text-[16px] px-6 py-4 font-bold rounded-full bg-[#ff0088] hover:bg-[#ff48a9] transition-all duration-200 text-white"
            href="/signup"
          >
            Learn more
          </a>
          {/* Hover Overlay (Optional for Visual Feedback) */}
          <div className="absolute inset-0 bg-transparent group-hover:bg-[#000000] transition-all duration-200"></div>
        </div>

        <div className="group relative bg-[#070918] m-6 p-6 rounded-lg shadow-lg shadow-[#ffffff] hover:shadow-[#ff8080] text-center max-w-sm transition-all duration-200 hover:scale-105 overflow-hidden">
          {/* Lottie Animation */}
          <div className="relative z-10 lg:w-[220px] lg:h-[220px] mx-auto">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                path: "/lottie/studyBoy.json",
              }}
            />
          </div>
          {/* Title */}
          <div className="relative z-10 text-xl font-semibold mb-2 text-white transition-transform duration-200">
            Class 10 to 12
          </div>
          {/* Description */}
          <span className="relative z-10 text-white mb-4 block transition-opacity duration-200">
            Preparing for board exams, entrance tests, or shaping your career
            path? Leverage our expert guidance and proven strategies to excel in
            your subjects and achieve your goals with confidence.
          </span>
          {/* Button */}
          <a
            type="button"
            className="relative z-10 text-center text-[13px] sm:text-[16px] px-6 py-4 font-bold rounded-full bg-[#ff0088] hover:bg-[#ff48a9] transition-all duration-200 text-white"
            href="/signup"
          >
            Learn more
          </a>
          {/* Hover Overlay (Optional for Visual Feedback) */}
          <div className="absolute inset-0 bg-transparent group-hover:bg-[#000000] transition-all duration-200"></div>
        </div>

        <div className="group relative bg-[#070918] m-6 p-6 rounded-lg shadow-lg shadow-[#ffffff] hover:shadow-[#ff8080] text-center max-w-sm transition-all duration-200 hover:scale-105 overflow-hidden">
          {/* Lottie Animation */}
          <div className="relative z-10 lg:w-[220px] lg:h-[220px] mx-auto">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                path: "/lottie/studyBoy.json",
              }}
            />
          </div>
          {/* Title */}
          <div className="relative z-10 text-xl font-semibold mb-2 text-white transition-transform duration-200">
            IIT-JEE/ NEET
          </div>
          {/* Description */}
          <span className="relative z-10 text-white mb-4 block transition-opacity duration-200">
            Preparing for IIT-JEE, NEET, or other competitive exams? Leverage
            our expert guidance and result-driven strategies to strengthen your
            concepts, master problem-solving, and achieve your dream rank with
            confidence.
          </span>
          {/* Button */}
          <a
            type="button"
            className="relative z-10 text-center text-[13px] sm:text-[16px] px-6 py-4 font-bold rounded-full bg-[#ff0088] hover:bg-[#ff48a9] transition-all duration-200 text-white"
            href="/signup"
          >
            Learn more
          </a>
          {/* Hover Overlay (Optional for Visual Feedback) */}
          <div className="absolute inset-0 bg-transparent group-hover:bg-[#000000] transition-all duration-200"></div>
        </div>
      </div>

      <div className="text-center mb-8 mt-[90px]">
        <h2 className="font-black text-white text-4xl text-heading uppercase">
          Why{" "}
          <span className="bg-gradient-to-b from-[#864135] to-[#F09819] text-transparent bg-clip-text font-bold">
            {" "}
            Join Us{" "}
          </span>
        </h2>
      </div>

      {/* 2nd Section */}
      <div className="flex flex-col md:flex-row justify-center items-center mb-[100px]">
        <div className="group relative bg-[#070918] m-6 p-6 rounded-lg shadow-lg shadow-[#67fffa] hover:shadow-[#82ff80] text-center max-w-sm transition-all duration-200 hover:scale-105 overflow-hidden">
          {/* Lottie Animation */}
          <div className="relative z-10 lg:w-[220px] lg:h-[220px] mx-auto">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                path: "/lottie/studyBoy.json",
              }}
            />
          </div>
          {/* Title */}
          <div className="relative z-10 text-xl font-semibold mb-2 text-white transition-transform duration-200">
            Comprehensive Learning
          </div>
          {/* Description */}
          <span className="relative z-10 text-white mb-4 block transition-opacity duration-200">
            We provide a well-structured curriculum, expert mentorship, and
            regular assessments to ensure holistic development. Whether you're
            preparing for board exams, competitive tests, or entrance exams, our
            approach guarantees clarity and confidence in every subject.
          </span>
          {/* Button */}
          <a
            type="button"
            className="relative z-10 text-center text-[13px] sm:text-[16px] px-6 py-4 font-bold rounded-full bg-[#ff0088] hover:bg-[#ff48a9] transition-all duration-200 text-white"
            href="/signup"
          >
            Learn more
          </a>
          {/* Hover Overlay (Optional for Visual Feedback) */}
          <div className="absolute inset-0 bg-transparent group-hover:bg-[#ff4391] transition-all duration-200"></div>
        </div>
        <div className="group relative bg-[#070918] m-6 p-6 rounded-lg shadow-lg shadow-[#67fffa] hover:shadow-[#82ff80] text-center max-w-sm transition-all duration-200 hover:scale-105 overflow-hidden">
          {/* Lottie Animation */}
          <div className="relative z-10 lg:w-[220px] lg:h-[220px] mx-auto">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                path: "/lottie/studyBoy.json",
              }}
            />
          </div>
          {/* Title */}
          <div className="relative z-10 text-xl font-semibold mb-2 text-white transition-transform duration-200">
            Proven Results
          </div>
          {/* Description */}
          <span className="relative z-10 text-white mb-4 block transition-opacity duration-200">
            Our institute is known for delivering consistent success with
            students excelling in board exams, competitive tests like IIT-JEE
            and NEET, and securing top ranks. With personalized attention,
            expert faculty, and innovative teaching methods, we help you achieve
            your academic goals.
          </span>
          {/* Button */}
          <a
            type="button"
            className="relative z-10 text-center text-[13px] sm:text-[16px] px-6 py-4 font-bold rounded-full bg-[#ff0088] hover:bg-[#ff48a9] transition-all duration-200 text-white"
            href="/signup"
          >
            Learn more
          </a>
          {/* Hover Overlay (Optional for Visual Feedback) */}
          <div className="absolute inset-0 bg-transparent group-hover:bg-[#ff4391] transition-all duration-200"></div>
        </div>
        <div className="group relative bg-[#070918] m-6 p-6 rounded-lg shadow-lg shadow-[#67fffa] hover:shadow-[#82ff80] text-center max-w-sm transition-all duration-200 hover:scale-105 overflow-hidden">
          {/* Lottie Animation */}
          <div className="relative z-10 lg:w-[220px] lg:h-[220px] mx-auto">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                path: "/lottie/studyBoy.json",
              }}
            />
          </div>
          {/* Title */}
          <div className="relative z-10 text-xl font-semibold mb-2 text-white transition-transform duration-200">
            Individual Attention
          </div>
          {/* Description */}
          <span className="relative z-10 text-white mb-4 block transition-opacity duration-200">
            We believe every student is unique. Our personalized mentoring
            approach ensures that your specific strengths and weaknesses are
            addressed, helping you stay confident and motivated throughout your
            academic journey.
          </span>
          {/* Button */}
          <a
            type="button"
            className="relative z-10 text-center text-[13px] sm:text-[16px] px-6 py-4 font-bold rounded-full bg-[#ff0088] hover:bg-[#ff48a9] transition-all duration-200 text-white"
            href="/signup"
          >
            Learn more
          </a>
          {/* Hover Overlay (Optional for Visual Feedback) */}
          <div className="absolute inset-0 bg-transparent group-hover:bg-[#ff4391] transition-all duration-200"></div>
        </div>
      </div>
      {/* <div className="text-center mt-8 mb-12">
        <a
          type="button"
          className="text-center text-[13px] sm:text-[16px] px-6 py-4 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] hover:shadow-none hover:scale-95 transition-all duration-200 bg-blue-500 text-white"
          href="/signup"
        >
          I want to learn
        </a>
      </div> */}

      {/* Slanted Line */}
      {/* <div className="relative w-full h-0 border-t-[110px] border-transparent border-r-[160vw] border-r-gray-25 transform rotate-2 -mt-10 -ml-40 -mb-24"></div> */}
    </section>
  );
};

export default PerfectPlatform;
