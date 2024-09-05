import React, { useEffect, useMemo, useState } from "react";
import ProductItem from "../ProductCard/ProductCard";
import { IProductItem } from "../../types";
import "./PLP.css";
import Grid from "@mui/material/Grid2";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { getProducts } from "../../reducers/productsSlice";

const PLP = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const loading = useSelector((state: RootState) => state.products.loading);
  // const [products, setProducts] = useState<Array<IProductItem>>([]);

  console.log("value of products ==>", products, loading);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const response = await fetch("https://fakestoreapi.com/products");
  //     const data = await response.json();
  //     console.log("data ==>", data);
  //     setProducts(data);
  //   };
  //   fetchProducts();
  // }, []);

  useEffect(() => {
    console.log("inside useEffect");
    // dispatch({ type: "GET_PRODUCTS" });
    console.log("action returned ==>", getProducts());
    dispatch(getProducts());
  }, []);

  const bundledByCategory = useMemo(() => {
    return products?.reduce(
      (ac: { [category: string]: IProductItem[] }, cv) => {
        const { category }: { category: string } = cv;
        if (ac[category as keyof IProductItem]) {
          ac[category as keyof IProductItem].push(cv);
        } else {
          ac[category as keyof IProductItem] = [cv] as Array<IProductItem>;
        }
        return ac;
      },
      {}
    );
  }, [products, loading]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="PLPWrapper">
      <Grid container spacing={2}>
        {Object.keys(bundledByCategory)?.map((category) => {
          return bundledByCategory[category]?.map((products) => {
            return <ProductItem {...products} key={products.id} />;
          });
        })}
      </Grid>
    </div>
  );
};

export default PLP;
