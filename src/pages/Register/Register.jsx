import React, { useEffect, useRef, useState } from "react";
import "../Login/Login.css";
import { useForm } from "react-hook-form";
import {
  FaFacebookF,
  FaGoogle,
  FaRegEye,
  FaRegEyeSlash,
} from "react-icons/fa6";
import { IoCloudUploadOutline, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";

const Register = () => {
  const { signUp, updateUserProfile } = useAuthContext();
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [fileDragged, setFileDragged] = useState(false);

  // react hook form settings
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFileDragOver = (e) => {
    e.preventDefault();
    setFileDragged(true);
  };
  const handleFileDragEnter = (e) => {
    e.preventDefault();
    setFileDragged(true);
  };
  const handleFileDragLeave = (e) => {
    e.preventDefault();
    setFileDragged(false);
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    setFileDragged(false);
    setProfilePicFile(event.dataTransfer.files);

    // setting input(file type) as well to remove required error
    document.getElementById("profilePicture").files = event.dataTransfer.files;
  };

  /**
   **** Profile Pic file upload logic: (two ways) ****
   * 1) profilePicFile is set when user click browse image button because in input(file) tag's onChange event setProfilePicFile is called.
   *
   * 2) Again, profilePicFile is set when user dragOver the pic and the dragOver function is called
   *
   * 3) So, in both ways file is set to profilePicFile and when close btn is clicked
   * profilePicFile is set to null and also input(file) tag value is reset to null using
   * input.value=""
   */
  const [profilePicFile, setProfilePicFile] = useState(null);

  // form output
  const [registerLoading, setRegisterLoading] = useState(false);
  const [registerError, setRegisterError] = useState(null);

  const onSubmit = (data) => {
    setRegisterLoading(true);

    const imgHostingUrl = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGHOSTINGKEY
    }`;

    const formData = new FormData();
    formData.append("image", profilePicFile[0]); // as profile pic is getting set in profilePicFile the data.profilePic is not necessary to use here.

    fetch(imgHostingUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgHostingResponse) => {
        if (imgHostingResponse.success) {
          data["profilePic"] = imgHostingResponse.data.display_url;

          // sign up user with email, password
          signUp(data.email, data.password)
            .then((res) => {
              // update user's profile
              if (res.user?.uid) {
                updateUserProfile(data.name, data.profilePic)
                  .then(() => {
                    console.log(res.user);
                    reset(); // reset the form
                    setProfilePicFile(null); // reset profile pic state
                  })
                  .catch((error) => setRegisterError(error));
              }
            })
            .catch((error) => setRegisterError(error));
        }
      });
  };

  return (
    <div
      className="container mt-20 mb-24"
      style={{ fontFamily: "var(--poppins)" }}
    >
      <h1
        className="text-6xl font-bold tracking-wide mb-10"
        style={{ fontFamily: "var(--italiana)" }}
      >
        Register
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="loginRegisterForm">
        <div className="w-full auth-input-con">
          <p className="text-gray-600">Full Name *</p>
          <input
            type="name"
            {...register("name", { required: true })}
            className="text-xl border-0 outline-none border-b-2 border-gray-400 w-full mt-3 pb-2"
          />
          {errors.name && (
            <span className="text-red-500 mt-1 block">
              Your full name is required
            </span>
          )}
        </div>

        {/* email input */}
        <div className="w-full mt-8 auth-input-con">
          <p className="text-gray-600">Email address *</p>
          <input
            type="email"
            {...register("email", { required: true })}
            className="text-xl border-0 outline-none border-b-2 border-gray-400 w-full mt-3 pb-2"
          />
          {errors.email && (
            <span className="text-red-500 mt-1 block">Email is required</span>
          )}
        </div>

        {/* password input */}
        <div className="w-full mt-8 relative auth-input-con">
          <p className="text-gray-600">Password *</p>
          <input
            type={showPass ? "text" : "password"}
            {...register("password", {
              required: true,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            })}
            className="text-xl border-0 outline-none border-b-2 border-gray-400 w-full mt-3 pb-2"
          />
          {errors.confirmPassword?.message === "unmatched password" && (
            <span className="text-red-500 mt-1 block">
              Your Password do not match
            </span>
          )}

          {errors.password?.type === "required" && (
            <span className="text-red-500 mt-1 block">
              Password is required
            </span>
          )}

          {!errors.confirmPassword && errors.password?.type === "pattern" && (
            <span className="text-red-500 mt-1 block">
              Password must have one uppercase, one lowercase, one number and
              one special character
            </span>
          )}
          <div className="absolute top-10 right-1">
            {showPass ? (
              <FaRegEyeSlash
                className="text-2xl"
                onClick={() => setShowPass(!showPass)}
              />
            ) : (
              <FaRegEye
                className="text-2xl"
                onClick={() => setShowPass(!showPass)}
              />
            )}
          </div>
        </div>

        {/* confirm password input */}
        <div className="w-full mt-8 relative auth-input-con">
          <p className="text-gray-600">Confirm Password *</p>
          <input
            type={showConfirmPass ? "text" : "password"}
            {...register("confirmPassword", {
              required: true,
              validate: (val) => {
                if (watch("password") != val) {
                  return "unmatched password";
                }
              },
            })}
            className="text-xl border-0 outline-none border-b-2 border-gray-400 w-full mt-3 pb-2"
          />

          {errors.confirmPassword?.type === "required" && (
            <span className="text-red-500 mt-1 block">
              Confirm Password is required
            </span>
          )}

          {errors.confirmPassword?.message === "unmatched password" && (
            <span className="text-red-500 mt-1 block">
              Your passwords do not match
            </span>
          )}
          <div className="absolute top-10 right-1">
            {showConfirmPass ? (
              <FaRegEyeSlash
                className="text-2xl"
                onClick={() => setShowConfirmPass(!showConfirmPass)}
              />
            ) : (
              <FaRegEye
                className="text-2xl"
                onClick={() => setShowConfirmPass(!showConfirmPass)}
              />
            )}
          </div>
        </div>

        {/* profile pic input */}
        <div className="w-full mt-8">
          <p className="text-gray-600 mb-5">Profile Picture *</p>
          <input
            type="file"
            {...register("profilePic", {
              required: true,
              onChange: (e) => setProfilePicFile(e.target.files),
            })}
            id="profilePicture"
            accept=".png, .jpg, .jpeg"
            hidden
          />

          {errors.profilePic?.type === "required" &&
            document.getElementById("profilePicture").value == "" && (
              <span className="text-red-500 mt-1 block">
                Your Profile Picture is required
              </span>
            )}

          {!profilePicFile ? (
            <button
              className={`border-2 border-dashed h-[170px] w-[50%] flex justify-center items-center ${
                fileDragged ? "shadow-xl" : ""
              }`}
              onDrop={handleFileDrop}
              onDragEnter={handleFileDragEnter}
              onDragLeave={handleFileDragLeave}
              onDragOver={handleFileDragOver}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("profilePicture").click();
              }}
            >
              <div className="text-center space-y-4">
                <IoCloudUploadOutline className="text-6xl text-[var(--pink-gold)] block mx-auto" />
                <p className="text-lg">
                  Drag & Drop <br /> or{" "}
                  <span className="text-primary">browse image</span>
                </p>
              </div>
            </button>
          ) : (
            <div className="border-2 border-gray-400 rounded-xl p-4 w-fit flex justify-between items-center gap-6">
              <span>{profilePicFile[0]?.name}</span>
              <button
                onClick={() => {
                  document.getElementById("profilePicture").value = "";
                  setProfilePicFile(null);
                }}
              >
                <IoClose className="text-xl" />
              </button>
            </div>
          )}
        </div>

        {/* register button */}
        <div className="mt-16 flex items-center gap-3">
          <button
            type="submit"
            className="uppercase text-sm text-white bg-black px-8 py-3 hover:rounded-xl transition-all duration-300"
          >
            Sign Up
          </button>
          <p>
            Already have an account?{" "}
            <Link to={"/login"} className="underline">
              Sign In
            </Link>
          </p>
        </div>
      </form>

      <div className="flex justify-start items-center mt-7">
        <p className="w-[15%] font-medium">Or, continue with</p>
        <div className="w-full bg-gray-400 h-[1px]"></div>
      </div>

      <div className="flex items-center gap-6 mt-5">
        <div className="text-lg text-[var(--pink-gold)] bg-black p-4 rounded-full cursor-pointer hover:text-black hover:bg-[--pink-gold] transition-all duration-300">
          <FaGoogle />
        </div>
        <div className="text-lg text-[var(--pink-gold)] bg-black p-4 rounded-full cursor-pointer hover:text-black hover:bg-[--pink-gold] transition-all duration-300">
          <FaFacebookF />
        </div>
      </div>
    </div>
  );
};

export default Register;
