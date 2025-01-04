import React from "react";
import girlImage from "../../../assets/Images/girl.webp";
import mocktest from "../../../assets/Images/mocktest.webp";
import practicepaper from "../../../assets/Images/practicepaper.webp";
import videolecture from "../../../assets/Images/videolecture.webp";
import useScrollAnimation from "../../../hooks/useScrollAnimation";

const StatsSection = () => {
  const animationLeftRef1 = useScrollAnimation("animate-slideInLeftToRight");
  const animationRightRef1 = useScrollAnimation("animate-slideInRightToLeft");
  const animationLeftRef2 = useScrollAnimation("animate-slideInLeftToRight");
  const animationRightRef2 = useScrollAnimation("animate-slideInRightToLeft");
  return (
    <section className="text-center py-16 text-white">
      <div className="w-[80vw] mx-auto">
        <h2 className="text-4xl font-bold mb-2">
        A Platform Trusted by Students Across [Your Region]
        </h2>
        <p className="mb-12">
        See Why So Many Students in Your Area Choose Us to Achieve Their Academic
        Goals. The Results Speak for Themselves!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center w-[80vw] md:w-[60vw] lg:w-[80vw] mx-auto">
        {/* First Card */}
        <div
          ref={animationLeftRef1}
          className="mx-auto relative flex flex-col justify-center w-[80vw] sm:w-[250px] h-[280px] rounded-lg bg-yellow-100 group overflow-hidden"
        >
          <div className="transition-all duration-300 group-hover:mb-32">
            <div className="text-4xl font-bold">10000+</div>
            <div className="text-gray-600">Happy Students</div>
          </div>
          <div className="absolute bottom-[-66px] left-0 right-0 flex justify-center items-center transform scale-0 group-hover:scale-100 group-hover:translate-y-[-50%] transition-all duration-300">
            <img
              src={girlImage}
              alt="Happy Students"
              className="w-[130px] text-yellow-500"
            />
          </div>
        </div>

        {/* Second Card */}
        <div
          ref={animationRightRef1}
          className="relative flex flex-col justify-center w-[80vw] sm:w-[250px] h-[280px] rounded-lg bg-pink-100 group overflow-hidden"
        >
          <div className="transition-all duration-300 group-hover:mb-32">
            <div className="text-4xl font-bold">100+</div>
            <div className="text-gray-600">Mock Tests</div>
          </div>
          <div className="absolute bottom-[-56px] left-0 right-0 flex justify-center items-center transform scale-0 group-hover:scale-100 group-hover:translate-y-[-50%] transition-all duration-300">
            <img
              src={mocktest}
              alt="Mock Tests"
              className="w-[130px] text-yellow-500"
            />
          </div>
        </div>

        {/* Third Card */}
        <div
          ref={animationLeftRef2}
          className="relative flex flex-col justify-center w-[80vw] sm:w-[250px] h-[280px] rounded-lg bg-blue-100 group overflow-hidden"
        >
          <div className="transition-all duration-300 group-hover:mb-32">
            <div className="text-4xl font-bold">1000+</div>
            <div className="text-gray-600">Video Lectures</div>
          </div>
          <div className="absolute bottom-[-66px] left-0 right-0 flex justify-center items-center transform scale-0 group-hover:scale-100 group-hover:translate-y-[-50%] transition-all duration-300">
            <img
              src={videolecture}
              alt="Video Lectures"
              className="w-[130px] text-yellow-500"
            />
          </div>
        </div>

        {/* Fourth Card */}
        <div
          ref={animationRightRef2}
          className="relative flex flex-col justify-center w-[80vw] sm:w-[250px] h-[280px] rounded-lg bg-orange-400 group overflow-hidden"
        >
          <div className="transition-all duration-300 group-hover:mb-32">
            <div className="text-4xl font-bold">5000+</div>
            <div className="text-gray-600">Practice Papers</div>
          </div>
          <div className="absolute bottom-[-55px] left-0 right-0 flex justify-center items-center transform scale-0 group-hover:scale-100 group-hover:translate-y-[-50%] transition-all duration-300">
            <img
              src={practicepaper}
              alt="Practice Papers"
              className="w-[130px] text-yellow-500"
            />
          </div>
        </div>
      </div>

      {/* Slanted Line */}
      {/* <div className="relative w-full h-0 border-t-[150px] border-transparent border-r-[160vw] border-r-white transform rotate-2 -mt-10 -ml-32 -mb-24"></div> */}
    </section>
  );
};

export default StatsSection;
