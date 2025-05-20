import React from "react";
import Logo from "../assets/img/foodvilla.png";

const About = () => {
  return (
    <div className="container min-h-screen mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Welcome to Food Villa
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4">
          <p className="text-lg mb-4">
            At Food Villa, we're passionate about bringing you the best food
            products from around the world. Whether you're looking for gourmet
            snacks, fresh produce, or specialty ingredients, we've got you
            covered.
          </p>
          <p className="text-lg mb-4">
            Our mission is to make high-quality food accessible to everyone,
            while supporting local farmers and producers. Every product in our
            selection is curated with care, ensuring exceptional taste and
            freshness.
          </p>
        </div>
        <div className="md:w-1/2 p-4 flex justify-center items-center">
          <img
            src={Logo}
            alt="Food Villa"
            className="rounded-lg shadow-lg max-w-full h-auto"
            style={{ maxWidth: "400px" }} // Adjust max-width as needed
          />
        </div>
      </div>
    </div>
  );
};

export default About;
