import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../images/ARTE_LOGO.png";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h1 className="font-bold text-sm sm:text-xl flex-wrap my-heading items-center justify-center">
        <span className="text-white arte-name">Arte</span>
        <span className="text-purple-500">.</span>
      </h1>

      <ul>
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
          <Link to="/myprofile">Profile</Link>
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
