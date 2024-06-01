import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../images/ARTE_LOGO.png";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <aside className="sidebar">
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
    </aside>
    // <aside id="sidebar">
    //   <ul>
    //     <li>
    //       <a href="#">Home</a>
    //     </li>
    //     <li>
    //       <a href="#">About</a>
    //     </li>
    //     <li>
    //       <a href="#">Services</a>
    //     </li>
    //     <li>
    //       <a href="#">Contact</a>
    //     </li>
    //   </ul>
    // </aside>
  );
};

export default Sidebar;
