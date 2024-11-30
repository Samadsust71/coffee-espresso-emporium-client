import React from "react";

const InstagramGallery = () => {
  const images = [
    "https://i.ibb.co.com/6RJm6Lr/Rectangle-9.png", 
    "https://i.ibb.co.com/0yKkHpX/Rectangle-10.png",
    "https://i.ibb.co.com/H42yCph/Rectangle-11.png",
    "https://i.ibb.co.com/VqHPvvC/Rectangle-12.png",
    "https://i.ibb.co.com/L9kBkqS/Rectangle-13.png",
    "https://i.ibb.co.com/RDcYC1j/Rectangle-14.png",
    "https://i.ibb.co.com/5WgQ0jX/Rectangle-15.png",
    "https://i.ibb.co.com/BcyvPrZ/Rectangle-16.png",
  ];

  return (
    <div className="py-12 text-[#331A15]">
      <div className="text-center mb-8">
        <p>Follow Us Now</p>
        <h2 className="text-2xl font-bold">Follow on Instagram</h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md">
            <img
              src={image}
              alt={`Coffee ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramGallery;
