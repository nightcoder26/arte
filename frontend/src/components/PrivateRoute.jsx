import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  // Check if token exists and is valid for manual login
  const isAuthenticated = !!token || (loggedInUser && loggedInUser.email);

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
