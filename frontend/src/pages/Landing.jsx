import React from "react";
import Navbar from "../components/Navbar";

const Landing = () => {

  return (
    <>
      
      <div className="bg-gray-800">

        {/* navbar */}
        <div className="fixed w-screen">
          <Navbar />
        </div>

        {/* banner */}
        <div className="pt-12">
          <div className=" p-3 h-[70vh] flex flex-col items-center justify-center bg-gray-800 text-white">
              <h1 className="text-5xl font-bold mb-4 sm:text-center">Collaborative Learning Platform for Skill Exchange</h1>
              <h1 className="text-xl sm:text-2xl mb-8">Find & share skills with peers. Together, we thrive.</h1>
              <a href="#" className="px-4 py-2 bg-gray-500 text-center rounded-md hover:bg-gray-400">Get started with Arte </a>
          </div>
        </div>

        {/* features */}
        <div className="min-h-[500px]">
          
        </div>

      </div>
      
    </>
  )
};

export default Landing;
