import React from "react";
import imgLeft from "../../assets/heading_left.png";
import imgRight from "../../assets/heading_right.png";

const SectionTitle = ({ title }) => {
  return (
    <div className="px-2 md:px-0 md:w-[50%] mx-auto flex justify-center items-center space-x-6">
      <div>
        <img src={imgLeft} alt="heading_left" />
      </div>

      <h1
        className="text-2xl md:text-4xl text-center font-extrabold text-black tracking-wide"
        style={{ fontFamily: "var(--italiana)" }}
      >
        {title}
      </h1>

      <div>
        <img src={imgRight} alt="heading_right" />
      </div>
    </div>
  );
};

export default SectionTitle;
