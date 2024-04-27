import React, { useEffect, useState } from "react";
import "./NewProducts.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ProductCard from "../../../components/ProductCard/ProductCard";
import useProducts from "../../../hooks/useProducts";
import CardSkeleton from "../../../components/CardSkeleton/CardSkeleton";
import { Link } from "react-router-dom";

const NewProducts = () => {
  const [newProducts, setNewProducts] = useState([]);
  const [products, isProductsLoading] = useProducts();

  useEffect(() => {
    // filter only new products from all products
    const filteredNewProducts = products?.filter(
      (product) => product.newArrival === true
    );

    filteredNewProducts?.sort(
      (a, b) => new Date(b.addedAt) - new Date(a.addedAt)
    );
    setNewProducts(filteredNewProducts);
  }, [products]);

  return (
    <section className="mb-24 pt-10">
      <SectionTitle title={"New Arrivals"} />

      {isProductsLoading ? (
        <div className="grid grid-cols-2g gap-6 md:grid-cols-3 md:gap-x-16 gap-y-10 mt-14 mb-16 w-fit mx-auto">
          {/* iterate empty array of length 6 */}
          {[...Array(6)].map((_, idx) => (
            <CardSkeleton key={idx} height={"350px"} width={"330px"} />
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-x-16 gap-y-10 md:gap-y-20 mt-14 mb-16 w-full">
            {newProducts?.map((product, counter) => (
              <ProductCard
                counter={counter}
                key={product._id}
                cardData={product}
              />
            ))}
          </div>

          <Link to="/shop">
            <button className="btn btn-square btn-neutral mx-auto block w-[90%]">
              View all items
            </button>
          </Link>
        </>
      )}
    </section>
  );
};

export default NewProducts;
