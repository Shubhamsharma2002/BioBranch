import React from "react";
import Image from "next/image";
import Introform from "./forms/Introform";
const IntroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around w-full pl-5">
      {/* Text Section */}
      <div className="w-1/2 text-center ">
        <h1 className="text-3xl font-semibold ">
          Your One Link For Everything
        </h1>
        <p className="mt-2 text-gray-500 text-xl">
          Share your links, social profiles, contact info, and more on one page
        </p>
        <div className="mt-5">
              <Introform/>
        </div>
      </div>

      {/* Image Section */}
      <div className="">
        <Image src = "/images/Introsection.png" width={350} height={100} />
      </div>
    </div>
  );
};

export default IntroSection;
