// components/About.js
import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

export default function About() {
  return (
    <>
    <Navbar/>
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-700 mb-8">
          About This App
        </h2>

        <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
          <p className="text-lg text-gray-700">
            Welcome to the <strong className="text-amber-800">Gilmore Girls Character Explorer</strong> — your go-to hub for everything Stars Hollow!
          </p>

          <p className="text-gray-700">
            We built this app out of love for one of the most iconic TV shows ever made. Whether you're a lifelong fan or just discovering the quirky charm of Lorelai, Rory, and the whole Stars Hollow crew, this app lets you explore their personalities, stories, and relationships in a fun and interactive way.
          </p>

          <p className="text-gray-700">
            From coffee addicts to fast talkers, we've got every character you know and love — and maybe a few you haven't met yet. Dive into their world, discover new favorites, or even add your own characters to the mix!
          </p>

          <p className="text-gray-700">
            So grab a cup of coffee ☕️, settle in, and start exploring the wonderful world of <em>Gilmore Girls</em>.
          </p>

       
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}