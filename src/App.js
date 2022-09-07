import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/home/Home";
import Navigation from "./components/navigation/Navigation";
import Shop from "./pages/shop/Shop";
import Login from "./pages/auth/Login";
import Checkout from "./pages/checkout/Checkout";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "./utils/firebase";
import { setCurrentUser } from "./store/user/userAction";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
        toast.success(`Logged in as: \n ${user.email}`);
      }
      dispatch(setCurrentUser(user));
    });
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="auth" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
