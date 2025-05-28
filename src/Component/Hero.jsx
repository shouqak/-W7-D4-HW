// components/Hero.js
import React from "react";
import { Link } from "react-router";

export default function Hero() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-24 px-6 text-white h-screen"
      style={{
        backgroundImage:
          "url('https://wallpapercave.com/wp/wp2249212.jpg ')", 
      }}
    >
     {/*  <div className="max-w-3xl mx-auto text-center  p-8 rounded-lg">
       
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200">
          Dive into the world of Stars Hollow. Meet the characters, their quirks, and their stories.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Link
            to="/characters"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition transform hover:scale-105 focus:outline-none"
          >
            Browse Characters
          </Link>
          <Link
            to="/login"
            className="px-6 py-3 border-2 border-white text-white font-semibold rounded-md shadow-md hover:bg-white hover:bg-opacity-20 transition transform hover:scale-105 focus:outline-none"
          >
            Login to Add Your Own
          </Link>
        </div>
      </div> */}
    </section>
  );
}