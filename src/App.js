import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/home/Home";
import Navigation from "./components/navigation/Navigation";
import Shop from "./pages/shop/Shop";
import Login from "./pages/auth/Login";
import Checkout from "./pages/checkout/Checkout";

const App = () => {
  return (
    <>
      <div className="App">
        <ToastContainer
          position="top-center"
          theme="colored"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="auth" element={<Login />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
