import React, { useEffect, useState } from "react";
import ProductItem from "../ProductCard/ProductCard";
import { IProductItem } from "../../types";
import "./PLP.css";

const PLP = () => {
  const [products, setProducts] = useState<Array<IProductItem>>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log("data ==>", data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="PLPWrapper">
      {products?.length > 0 &&
        products?.map((item, idx) => {
          return <ProductItem key={idx} {...item} />;
        })}
    </div>
  );
};

export default PLP;
