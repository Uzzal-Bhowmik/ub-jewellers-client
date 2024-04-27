import { NavLink } from "react-router-dom";
import "./BottomNavbar.css";
import {
  FiUser,
  FiShoppingCart,
  FiSearch,
  FiHome,
  FiHeart,
} from "react-icons/fi";
import { useDispatch } from "react-redux";
import {
  toggleCartDrawer,
  toggleHeaderSearchBar,
} from "../../redux/features/toggleDrawerSlice/toggleDrawerSlice";
import useAuthContext from "../../hooks/useAuthContext";

const BottomNavbar = () => {
  const dispatch = useDispatch();
  const { user } = useAuthContext();

  return (
    <div className="md:hidden w-full bg-white fixed bottom-0 min-h-[60px] flex items-center z-[9998] border-t border-t-gray-400 rounded-t-2xl m-0 bottom-nav">
      <div className="flex items-center justify-around w-full py-5">
        <NavLink
          to="/"
          className={`${({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active"
              : ""} flex flex-col items-center justify-center`}
        >
          <FiHome className="" />
          <p>Home</p>
        </NavLink>

        <div
          className={`flex flex-col items-center justify-center`}
          onClick={() => dispatch(toggleCartDrawer())}
        >
          <FiShoppingCart className="" />
          <p>Cart</p>
        </div>

        <NavLink
          to="/wishlist"
          className={`${({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active"
              : ""} flex flex-col items-center justify-center`}
        >
          <FiHeart className="" />
          <p>Wishlist</p>
        </NavLink>

        <div
          className={`${({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active"
              : ""} flex flex-col items-center justify-center`}
          onClick={() => dispatch(toggleHeaderSearchBar())}
        >
          <FiSearch className="" />
          <p>Search</p>
        </div>

        {!user?.uid && (
          <NavLink
            to="/login"
            className={`${({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active"
                : ""} flex flex-col items-center justify-center`}
          >
            <FiUser className="" />
            <p>Profile</p>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default BottomNavbar;
