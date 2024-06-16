import React from "react";
import Navbar from "../components/Navbar";
import "./Landing.css";
import hands from "../images/learn.jpg";
import { LuHeartHandshake } from "react-icons/lu";
import { FaUserGroup } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";

const Landing = () => {
  return (
    <>
      <div className="landing-bg">
        <div className="navbar-fixed">
          <Navbar />
        </div>

        <div className="banner-container">
          <div className="banner-content">
            <h1 className="banner-title">
              Welcome to <strong className="arte-strong">Arte</strong>
            </h1>
            <div className="banner-subtitles">
              <h1 className="banner-subtitle">
                Meet new people<strong className="arte-strong">.</strong>
              </h1>
              <h1 className="banner-subtitle">
                Learn new skills<strong className="arte-strong">.</strong>
              </h1>
              <h1 className="banner-subtitle">
                Grow together<strong className="arte-strong">.</strong>
              </h1>
            </div>

            <h1 className="banner-description">
              Arte is a platform for people to connect
              <strong className="arte-strong">,</strong>
              <br /> collaborate and learn from each other.
            </h1>
            {/* <a href="/signup" className="signup-button">
              Get started with Arte
            </a> */}
            <button className="signup-button no-underline group relative shadow-md  rounded-full p-px text-base font-semibold leading-6  text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(255,255,255,1)_0%,rgba(255,255,255,0.5)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="started-button-div relative flex space-x-2 items-center z-10 rounded-full bg-purple-600 py-3 px-5 ring-1 ring-white/10 ">
                <span>{`Get started with Arte`}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                  ></path>
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-white-400/0 via-white-400/90 to-white-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </button>
          </div>
        </div>

        {/* features */}
        <section class="features-section">
          <div class="features">
            <h2 className="key-features">What's In It For You</h2>
            <div class="boxes">
              <div class="feature-card ">
                <div className="heading-icon">
                  <h3>Collaboration</h3>
                  <LuHeartHandshake className="icon" />
                </div>

                <p>Connect with others to exchange skills and knowledge</p>
              </div>
              <div class="feature-card">
                <div className="heading-icon">
                  <h3>Study Groups</h3>
                  <FaUserGroup className="icon" />
                </div>
                <p>Learn by joining and scheduling study sessions</p>
              </div>
              <div class="feature-card">
                <div className="heading-icon">
                  <h3> Feedback</h3>
                  <FaShareAlt className="icon" />
                </div>
                <p>Share your work and receive feedback from the community</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Landing;
