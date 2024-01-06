import React from "react";
import StarRatings from "react-star-ratings";

const ReviewCard = ({ reviewObj }) => {
  const { name, img, review, rating, location } = reviewObj;
  return (
    <div className="border border-black w-[80%] mx-auto flex items-center gap-4 p-10 bg-white">
      <div className="w-[20%]">
        <img src={img} alt={name} className="rounded-full " />
      </div>
      <div style={{ fontFamily: "var(--poppins)" }} className="w-[80%]">
        <h4 className="text-lg text-black font-medium">{review}</h4>
        <div className="flex items-center gap-3 mt-4 mb-1">
          <h3 className="text-2xl text-black font-semibold">{name}</h3>
          <StarRatings
            rating={rating}
            starDimension="18px"
            starSpacing="2px"
            starRatedColor="#da3e3f"
            starEmptyColor="#c7c7c7"
            svgIconPath="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1"
            svgIconViewBox="0 0 24 24"
          />
        </div>

        <p>{location}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
