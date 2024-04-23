import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../images/2.png";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <img src={logo2} alt="ARTE Logo" width={200} align="center" />
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/connect">Connect</Link>
        </li>
        <li>
          <Link to="/chats">Chats</Link>
        </li>
        <li>
          <Link to="/rooms">Rooms</Link>
        </li>
        <li>
          <Link to="/myprofile">Profile</Link>
        </li>
        <li>
          <Link to="/assessments">Assessments</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
