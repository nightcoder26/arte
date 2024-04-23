import React from "react";
import "./MyProfile.css"; // Import CSS file for styling
import logo from "../images/ARTE_LOGO.png";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import logo2 from "../images/2.png";
const MyProfile = () => {
  return (
    <div className="profile-container">
      <Sidebar />
      <div className="profile-content">
        <h2>My Profile</h2>
        <div>
          <img src={logo} />
        </div>
        {/* <p>Navbar User info , badges, skills, basic profile info </p> */}
        {/* <div>
          <h3>User Information</h3>
          <p>Name</p>
          <p>Username</p>
          <p>Email</p>
          <p>Bio</p>
        </div> */}
        {/* <div>
          <h3>Skills Listing</h3>
          <ul>
            <li>ReactJS</li>
            <li>Node.js</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div>
          <h3>Connection Requests/Notifications</h3>
          <p>No pending requests</p>
        </div>
        <div>
          <h3>Published Work</h3>
          <p>No published work</p>
        </div>
        <div>
          <h3>Activity Feed</h3>
          <p>No recent activity</p>
        </div> */}
      </div>
    </div>
  );
};

export default MyProfile;
