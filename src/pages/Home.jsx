import React, { useState } from "react";
import FeaturesSection from "../components/FeaturesSection";
import InstagramGallery from "../components/InstagramGallery";
import Banner from "../components/Banner";
import PopularProducts from "../components/PopularProducts";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  
  const loadedCoffees = useLoaderData()
  const [coffees , setCoffees] = useState(loadedCoffees)

  return (
    <div>
      <Banner />
      <FeaturesSection />
      <PopularProducts coffees={coffees} setCoffees={setCoffees} />
      <InstagramGallery />
    </div>
  );
};

export default Home;
