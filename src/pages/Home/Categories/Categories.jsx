import React, { useEffect, useState } from "react";
import "./Categories.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import axios from "axios";
import CategoryCard from "./CategoryCard/CategoryCard";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://ub-jewellers-server-production.up.railway.app/categories")
      .then((res) => setCategories(res.data))
      .catch((error) => console.error(error));
  }, []);

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <section className="pt-24 mb-16" id="categories">
      <SectionTitle title={"Shop By Categories"} />

      {/* categories */}
      <div className="hidden md:block ">
        <Slider
          {...settings}
          className="w-full md:px-0 md:w-[85%] md:mx-auto mt-12 h-[300px] items-center"
        >
          {categories?.map((category, counter) => (
            <CategoryCard
              counter={counter + 1}
              key={category._id}
              category={category}
            />
          ))}
        </Slider>
      </div>

      <div className="md:hidden grid grid-cols-4 gap-x-8 gap-y-16 w-[90%] mx-auto mt-12">
        {!categories?.length
          ? Array.from({ length: 8 }).map((c, idx) => (
              <div
                className="gap-4 flex flex-col items-center justify-center"
                key={idx}
              >
                <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
                <div className="skeleton h-4 w-20"></div>
              </div>
            ))
          : categories.slice(0, 8).map((category) => (
              <Link
                className="gap-4 flex flex-col items-center justify-center"
                key={category._id}
                to={`/shop`}
                state={{ category: category.categoryName }}
                data-aos="fade-up"
              >
                <div className="avatar">
                  <div className="w-20 rounded-full ring ring-slate-300">
                    <img src={category.categoryPic} />
                  </div>
                </div>
                <div
                  className="h-4 w-20 text-center font-semibold text-gray-700"
                  style={{ fontFamily: "var(--poppins)" }}
                >
                  <p>{category.categoryName}</p>
                </div>
              </Link>
            ))}
      </div>
    </section>
  );
};

export default Categories;
