import axios from "axios";
import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import useAuthContext from "../../../hooks/useAuthContext";
import useUserInfo from "../../../hooks/useUserInfo";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import Swal from "sweetalert2";

const AddReview = () => {
  const { user } = useAuthContext();
  const [userFromDB] = useUserInfo();
  const [productReviewError, setProductReviewError] = useState("");
  const [starRating, setStarRating] = useState(0);
  const handleRatingChange = (newRating) => {
    setStarRating(newRating);
  };
  const [userReview, setUserReview] = useState(null);

  // FETCH ALL THE REVIEWS
  useEffect(() => {
    if (user) {
      axios.get("http://localhost:5000/reviews").then((res) => {
        const reviews = res.data;
        const review = reviews?.find((r) => r.email === user.email);
        setUserReview(review);
      });
    }
  }, [user]);

  // POST REVIEW TO DB
  const handleSubmitProductReview = (e) => {
    e.preventDefault();
    setProductReviewError("");

    if (productReviewError) {
      setProductReviewError("Rating is required!");
      return;
    }

    const form = e.target;
    const review = form.review.value;
    const location = form.location.value;

    axios
      .post("http://localhost:5000/add-review", {
        img: user?.photoURL,
        name: userFromDB?.name,
        email: user?.email,
        location,
        review,
        rating: parseFloat(starRating),
        addedAt: new Date(),
      })
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Your feedback has successfully submitted ❣️");
        }
      })
      .catch((error) => console.error(error));
  };

  // HANDLE DELETE USER REVIEW
  const handleDeleteReview = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Your review will be deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#000",
      cancelButtonColor: "#ef4c53",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/delete-review/${user?.email}`)
          .then((res) => {
            console.log(res.data);

            Swal.fire({
              title: "Deleted!",
              text: "Your review has been deleted.",
              icon: "success",
            });

            setUserReview(null);
          })
          .catch((error) => console.error(error));
      }
    });
  };
  return (
    <div className="mt-5 mb-10">
      <div className="pb-6 border-b">
        <h1 className="text-4xl font-semibold">Write a Review</h1>
      </div>

      {!userReview ? (
        <form
          onSubmit={handleSubmitProductReview}
          className="mt-8 px-2 space-y-8"
        >
          {productReviewError && (
            <p className="text-error">{productReviewError}</p>
          )}
          <div className="space-y-2">
            <h5 className="font-bold">What would you rate us?</h5>
            <StarRatings
              rating={starRating}
              starRatedColor="#d4647c"
              starHoverColor="#d4647c"
              starEmptyColor="#c7c7c7"
              changeRating={handleRatingChange}
              numberOfStars={5}
              starDimension="25px"
              starSpacing="4px"
              required="true"
            />
          </div>

          <div className="space-y-2">
            <h5 className="font-bold">Your Feedback</h5>
            <textarea
              rows={5}
              required
              name="review"
              placeholder="Write a detailed review about how has been your experience with us and what do you want us to change soon? ..."
              className="outline-none border-2 border-black rounded-lg w-full p-3"
              minLength={50}
            />
          </div>

          <div className="space-y-2">
            <h5 className="font-bold">Location</h5>
            <textarea
              rows={1}
              required
              name="location"
              placeholder="Where are you from?"
              className="outline-none border-2 border-black rounded-lg w-full p-3"
              minLength={10}
            />
          </div>
          <button className="btn btn-outline btn-neutral btn-wide border-2">
            Submit
          </button>
        </form>
      ) : (
        <div className="overflow-x-auto my-10">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Rating</th>
                <th>Review</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{userReview?.name}</td>
                <td>{userReview?.rating}</td>
                <td>{userReview?.review}</td>
                <td>
                  <FaTrashAlt
                    className="hover:text-error cursor-pointer"
                    onClick={handleDeleteReview}
                  />
                </td>
                <td className="text-primary underline">
                  <HashLink to="/#reviews">View Review</HashLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AddReview;
