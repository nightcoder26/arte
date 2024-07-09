import React from "react";
import Sidebar from "../components/Sidebar";
import "./Home.css";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";

const Home = () => {
  const userString = localStorage.getItem("loggedInUser");
  const user = JSON.parse(userString);
  const name = user.name;
  // console.log(user);
  let profileURL = "";

  if (userString) {
    const user = JSON.parse(userString);
    profileURL = user.photoURL;
  }
  return (
    <>
      <div className="home-container">
        <Sidebar />
        <div className="main-content">
          <p className="welcome-text">
            Welcome to Arte, <strong className="username">{name}</strong>
          </p>
        </div>
        <div className="right-home">
          <div className="little-nav">
            <div className="search-bar">
              <IoSearch className="search-icon" />
              <input type="text" placeholder="search" />
            </div>
            <div className="notification">
              <IoMdNotificationsOutline className="notification-icon" />
            </div>
            <div className="message">
              <AiOutlineMessage className="message-icon" />
            </div>
          </div>
          <div className="profile-home">
            <p className="profile-text">My profile</p>

            {profileURL ? (
              <img src={profileURL} alt="Profile" className="profile-image" />
            ) : (
              <p>No profile image available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
