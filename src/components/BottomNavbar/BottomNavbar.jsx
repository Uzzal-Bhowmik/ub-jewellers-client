import { NavLink } from "react-router-dom";
import "./BottomNavbar.css";
import {
  FiUser,
  FiShoppingCart,
  FiHome,
  FiHeart,
  FiShoppingBag,
} from "react-icons/fi";
import { useDispatch } from "react-redux";
import { toggleCartDrawer } from "../../redux/features/toggleDrawerSlice/toggleDrawerSlice";
import useAuthContext from "../../hooks/useAuthContext";

const BottomNavbar = () => {
  const dispatch = useDispatch();
  const { user } = useAuthContext();

  return (
    <div className="md:hidden w-full bg-white fixed bottom-0 flex items-center z-[9998] m-0 bottom-nav border-t-2 border-t-slate-200">
      <div className="flex items-center justify-around w-full py-[6px]">
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

        <NavLink
          to="/shop"
          className={`${({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active"
              : ""} flex flex-col items-center justify-center`}
        >
          <FiShoppingBag className="" />
          <p>Shop</p>
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
