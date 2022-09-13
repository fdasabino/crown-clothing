import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { checkUserSession } from "./store/user/userAction";
import { useDispatch } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/home/Home";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import Shop from "./pages/shop/Shop";
import Login from "./pages/auth/login/Login";
import SignUp from "./pages/auth/sign-up/SignUp";
import Checkout from "./pages/checkout/Checkout";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
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
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="auth" element={<Login />} />
          <Route path="auth/signup" element={<SignUp />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
