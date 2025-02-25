import About from "./page/About";
import Home from "./page/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Product from "./page/Product";
import Detail from "./page/Detail";
import Login from "./page/Login";
import User from "./page/User";
import { useState } from "react";

const RouterPractice = () => {
  const [check] = useState(true);
  const PrivateRoute = () => {
    return check == true ? <User /> : <Navigate to="/login" />;
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
        <Route path="product/:id" element={<Detail />} />
        <Route path="login" element={<Login />} />
        <Route path="user" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
};

export default RouterPractice;
