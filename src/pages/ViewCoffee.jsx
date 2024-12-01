import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";

const ViewCoffee = () => {
  const coffee = useLoaderData();
  const { name, chef, supplier, taste, category, details, photo } =
    coffee || {};
  return (
    <div className="max-w-3xl mx-auto mt-10 mb-20">
        <Link
        to="/"
        className="flex items-center text-[#374151] hover:text-[#331A15] mb-6  font-semibold"
      >
        <IoArrowBack className="mr-2" />
        Back to Home
      </Link>
      <div className="card bg-[#F4F3F0] py-8 px-8 lg:px-16 md:flex-row justify-center md:gap-20">
        {/* Image Section */}
        <div>
          <img
            src={photo} // Replace with actual image URL
            alt="Coffee Cup"
            className="w-full object-cover mb-4"
          />
        </div>
        {/* Content Section */}
        <div className="flex flex-col items-center md:items-start gap-2 md:mt-4">
          <h2 className="font-bold">{name}</h2>
          <p>Chef: {chef}</p>
          <p>Taste: {taste}</p>
          <p>supplier: {supplier}</p>
          <p>category: {category}</p>
          <p>details: {details}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewCoffee;
