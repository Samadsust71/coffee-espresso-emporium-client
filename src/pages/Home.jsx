import React from "react";
import FeaturesSection from "../components/FeaturesSection";
import InstagramGallery from "../components/InstagramGallery";
import Banner from "../components/Banner";
import PopularProducts from "../components/PopularProducts";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturesSection />
      <PopularProducts/>
      <InstagramGallery />
    </div>
  );
};

export default Home;
