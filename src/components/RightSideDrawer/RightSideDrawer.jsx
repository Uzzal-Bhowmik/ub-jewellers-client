import React, { useEffect, useState } from "react";
import "./RightSideDrawer.css";
import notAuthenticated from "../../assets/Forgot password.png";
import useAuthContext from "../../hooks/useAuthContext";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { FaMinus, FaPlus, FaRegTrashCan } from "react-icons/fa6";
import axios from "axios";

const RightSideDrawer = () => {
  // Reminder: Right side drawer is called from the Header.jsx file

  const { user } = useAuthContext();
  const [cartData, isCartLoading, refetch] = useCart();
  const [subtotal, setSubTotal] = useState(0);

  // update product quantity
  const handleUpdateQuantity = (_id, operation, quantity) => {
    axios
      .patch(`http://localhost:5000/cart/${_id}`, {
        quantity: quantity,
        operation,
      })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // delete from cart
  const handleRemoveFromCart = (_id) => {
    axios
      .delete(`http://localhost:5000/cart/${_id}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          refetch();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // get subtotal amount of the cart
  useEffect(() => {
    axios
      .get(`http://localhost:5000/cart/subtotal?email=${user?.email}`)
      .then((res) => {
        setSubTotal(res.data.subtotal);
      });
  }, [cartData, user]);

  return (
    <div
      className="p-5 flex flex-col h-screen"
      style={{ fontFamily: "var(--poppins)" }}
    >
      <div className="right-drawer-header">
        <h1
          className="text-3xl font-bold"
          style={{ fontFamily: "var(--italiana)" }}
        >
          Shopping Cart
        </h1>
        <div className="divider"></div>
      </div>

      {!user ? (
        <div className="text-center">
          <img src={notAuthenticated} alt="not authenticated image" />
          <div>
            <h4 className="text-xl mb-2">You are not logged in!</h4>
            <p>
              Please{" "}
              <Link
                to={"/login"}
                className="text-[--light-brown] font-bold underline"
              >
                Login
              </Link>{" "}
              or{" "}
              <Link
                to={"/register"}
                className="text-[--light-brown] font-bold underline"
              >
                Sign Up
              </Link>{" "}
              to see items in your cart.
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="right-drawer-items-con overflow-auto pr-3 flex-grow">
            {isCartLoading ? (
              <div>
                <span className="loading loading-spinner loading-md"></span>
              </div>
            ) : (
              <div className="space-y-6">
                {cartData?.map((product) => (
                  <div
                    key={product._id}
                    className="flex items-center gap-4 w-full"
                  >
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-[35%] border-none rounded-lg bg-slate-100"
                    />
                    <div className="w-[75%]">
                      <Link to={`/products/${product.productId}/description`}>
                        <h5 className="font-bold">{product.name}</h5>
                      </Link>
                      <p className="mt-2 font-semibold">$ {product.price}</p>

                      {/* plus minus quantity or delete option */}
                      <div className="flex justify-between items-center mt-4">
                        <div className="w-[60%] flex items-center justify-between border border-black py-1 px-2">
                          <button
                            disabled={product.quantity === 1}
                            onClick={() =>
                              handleUpdateQuantity(
                                product._id,
                                "minus",
                                product.quantity
                              )
                            }
                            className={`${
                              product.quantity === 1 && "text-gray-300"
                            }`}
                          >
                            <FaMinus />
                          </button>
                          <span className="font-bold text-lg">
                            {product.quantity}
                          </span>
                          <button
                            onClick={() =>
                              handleUpdateQuantity(
                                product._id,
                                "plus",
                                product.quantity
                              )
                            }
                          >
                            <FaPlus />
                          </button>
                        </div>

                        <button
                          onClick={() => handleRemoveFromCart(product._id)}
                        >
                          <FaRegTrashCan className="text-2xl text-gray-600 hover:text-black" />
                        </button>
                      </div>
                      {/* --------------- */}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="right-drawer-footer border-t-2 border-dashed py-3 px-2 mt-5 space-y-8">
            <div className="text-gray-700 text-sm font-bold flex justify-between items-center">
              <p>Subtotal:</p>
              <p>${parseFloat(subtotal).toFixed(2)}</p>
            </div>

            <Link to="/checkout">
              <button className="btn btn-neutral btn-block text-white">
                Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default RightSideDrawer;
