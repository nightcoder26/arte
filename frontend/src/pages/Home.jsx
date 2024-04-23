import React from "react";
import Sidebar from "../components/Sidebar";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <Sidebar />
        <p className="welcome-text">
          Welcome to Arte, <strong className="username">Username</strong>
        </p>
      </div>
    </>
  );
};

export default Home;
