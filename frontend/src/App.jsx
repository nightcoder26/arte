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
import OAuth from "./components/OAuth";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/google-o-auth" element={<OAuth />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/assessments"
            element={
              <PrivateRoute>
                <Assessments />
              </PrivateRoute>
            }
          />
          <Route
            path="/chats"
            element={
              <PrivateRoute>
                <Chats />
              </PrivateRoute>
            }
          />
          <Route
            path="/connect"
            element={
              <PrivateRoute>
                <Connect />
              </PrivateRoute>
            }
          />
          <Route
            path="/myprofile"
            element={
              <PrivateRoute>
                <MyProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
