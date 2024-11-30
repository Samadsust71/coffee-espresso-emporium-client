import React from "react";

const Banner = () => {
  return (
    <div className=" bg-banner py-52 bg-cover bg-no-repeat bg-center text-gray-200">
      <div className="max-w-6xl mx-auto flex justify-center items-center gap-16">
        <div className="w-1/2"></div>
        <div className="">
          <h1 className="text-5xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
          <p className="py-6 text-gray-300">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
          </p>
          <button className="px-5 py-2 rounded-md bg-[#E3B577] text-[#242222]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
