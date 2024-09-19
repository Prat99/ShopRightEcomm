import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import { Suspense, lazy } from "react";
import { Typography } from "@mui/material";

const Checkout = lazy(() => import("../components/Checkout/Checkout"));
const Cart = lazy(() => import("../components/Cart/Cart"));

export const Root = () => {
  return (
    <Suspense fallback={<Typography>Loading route...</Typography>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
};
