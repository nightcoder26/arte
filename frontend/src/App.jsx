import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/contact" element={<div>contact</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
