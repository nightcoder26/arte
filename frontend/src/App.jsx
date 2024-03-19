import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Landing from "./pages/Landing";
import Assessments from "./pages/Assessments";
import Chats from "./pages/Chats";
import Connect from "./pages/Connect";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import Settings from "./pages/Settings";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/assessments" element={<Assessments />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
