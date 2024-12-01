import React from "react";


const FeaturesSection = () => {
  const features = [
    {
      icon: "https://i.ibb.co.com/smMTdTM/1.png",
      title: "Awesome Aroma",
      description: "You will definitely enjoy the rich aroma of freshly brewed coffee.",
    },
    {
      icon: "https://i.ibb.co.com/gmzVGHZ/2.png",
      title: "High Quality",
      description: "Our coffee is made from the finest and highest quality beans.",
    },
    {
      icon: "https://i.ibb.co.com/YBZy75y/3.png",
      title: "Pure Grades",
      description: "Enjoy various grades of the most authentic coffee, sourced carefully.",
    },
    {
      icon: "https://i.ibb.co.com/Rj0KPkY/4.png",
      title: "Proper Roasting",
      description: "Roasted to perfection for an unforgettable flavor and aroma.",
    },
  ];

  return (
    <div className="bg-[#ECEAE3] py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center md:items-start p-4  rounded-lg">
            <img src={feature.icon} className="mb-4"/>
            <h3 className="text-lg font-semibold text-[#331A15]">{feature.title}</h3>
            <p className="text-sm text-[#331A15] mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
