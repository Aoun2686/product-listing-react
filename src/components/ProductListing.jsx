import React from "react";
import ProductCard from "./ProductCard";
import products from "../productsData";
import { Link } from "react-router-dom";

const ProductListing = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-2 text-3xl text-gray-800">
        <h1 className="text-gray-600">Batteries</h1>
        <Link to={"/"} className="text-base text-gray-600 hover:underline">
          View All Batteries
        </Link>
      </div>
      <div className="flex flex-wrap gap-4 justify-around">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
