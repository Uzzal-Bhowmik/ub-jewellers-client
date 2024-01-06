import React from "react";
import "./Home.css";
import Hero from "./Hero/Hero";
import MarqueeSection from "./MarqueeSection/MarqueeSection";
import Categories from "./Categories/Categories";
import CustomHelmet from "../../components/CustomHelmet/CustomHelmet";
import FlashSale from "./FlashSale/FlashSale";
import NewProducts from "./NewProducts/NewProducts";
import Featured from "./Featured/Featured";
import Reviews from "./Reviews/Reviews";
import Instagram from "./Instagram/Instagram";
import OtherFeatures from "./OtherFeatures/OtherFeatures";

const Home = () => {
  return (
    <div id="home">
      <CustomHelmet title={"Home"} />
      <Hero />
      <MarqueeSection />
      <Categories />
      <FlashSale />
      <div id="products">
        <NewProducts />
        <Featured />
      </div>
      <Reviews />
      <Instagram />
      <OtherFeatures />
    </div>
  );
};

export default Home;
