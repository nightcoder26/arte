import React from "react";
import user1 from "../images/2.png";
import user2 from "../images/2.png";
import user3 from "../images/2.png";
import "./Connect.css";
import Sidebar from "../components/Sidebar";
const Connect = () => {
  return (
    <div className="connect-container">
      <Sidebar />
      <div className="connect-full">
        <h2>Connect</h2>

        <div className="search-filter">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button className="search-button">Search</button>
          </div>
          <div className="filter-options">
            <select>
              <option value="all">All</option>
              <option value="skill1">Skill 1</option>
              <option value="skill2">Skill 2</option>
              <option value="skill3">Skill 3</option>
            </select>
          </div>
        </div>
        <div className="match-box">
          <h3>Matches for You</h3>
          <div className="match-cards">
            <div className="match-card">
              <img src={user1} alt="User 1" />
              <p>User 1</p>
            </div>
            <div className="match-card">
              <img src={user2} alt="User 2" />
              <p>User 2</p>
            </div>
            <div className="match-card">
              <img src={user3} alt="User 3" />
              <p>User 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
