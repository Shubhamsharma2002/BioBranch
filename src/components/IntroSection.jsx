import React from "react";
import Image from "next/image";
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
          <form action="" className="inline-flex items-center shadow-lg">
            <span className="bg-white py-4 pl-4">bioserach.to/</span>
            <input
              type="text"
              className="py-4 focus:outline-none  focus:ring-2 rounded focus:ring-blue-500"
              placeholder="username"
            />

            <button type="submit" className="bg-blue-500 text-white py-4 px-6">
              join For free
            </button>
          </form>
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
