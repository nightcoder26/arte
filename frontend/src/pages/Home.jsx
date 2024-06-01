import React from "react";
import Sidebar from "../components/Sidebar";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <Sidebar />
        <div>
          <p className="welcome-text">
            Welcome to Arte, <strong className="username">Username</strong>
          </p>
        </div>
        <div className="right-home">Right side suggestions</div>
      </div>
    </>
  );
};

export default Home;
