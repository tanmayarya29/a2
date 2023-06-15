import "./styles.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Products } from "./Products";
import { Product } from "./Product";
import { ProtectedRoute } from "./ProtectedRoute";
import { LoginPage } from "./LoginPage";
export default function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "kminchelle",
        password: "0lelplR",
        // expiresInMins: 60, // optional
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setLoggedIn(true);
        navigate("/products");
      })
      .catch(() => {
        setLoggedIn(false);
        navigate("/login");
      });
  }, []);

  return (
    <Routes>
      <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Route>
    </Routes>
  );
}
