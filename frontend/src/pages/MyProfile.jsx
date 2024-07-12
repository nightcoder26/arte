import React from "react";
import "./MyProfile.css";
import Sidebar from "../components/Sidebar";
import logo2 from "../images/2.png";

const MyProfile = () => {
  return (
    <div className="profile-container">
      <Sidebar />
      <div className="profile-content">
        <p className="profile-head">My Profile</p>
        <div className="picture">
          <p className="your-picture-sections">Profile picture</p>
          <div className="picture-options">
            <img src={logo2} alt="Profile" className="profile-image" />
            <div className="upload">
              <p>Upload a picture</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
