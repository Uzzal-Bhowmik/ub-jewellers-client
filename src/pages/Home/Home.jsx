import React, { useEffect } from "react";
import "./Home.css";
import Hero from "./Hero/Hero";
import MarqueeSection from "./MarqueeSection/MarqueeSection";
import Categories from "./Categories/Categories";
import CustomHelmet from "../../components/CustomHelmet/CustomHelmet";
import FlashSale from "./FlashSale/FlashSale";
import NewProducts from "./NewProducts/NewProducts";
import Instagram from "./Instagram/Instagram";
import { useLocation } from "react-router-dom";
import Pace from "pace-js";

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/" && location.hash === "") {
      Pace.restart();
    }
  }, [location]);

  return (
    <div id="home">
      <CustomHelmet title={"Home"} />
      <Hero />
      <MarqueeSection />
      <Categories />
      <FlashSale />
      <div id="products">
        <NewProducts />
      </div>
      <Instagram />
    </div>
  );
};

export default Home;
