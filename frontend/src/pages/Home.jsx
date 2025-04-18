import React from "react";
import pizza from "../assets/pizza.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleStart = () => {
    navigate("/addrecipe");
  };
  return (
    <section className="hero d-flex align-items-center">
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left Section - Text with Bottom Margin */}
          <div className="col-md-6 text-left mb-4">
            <h1 className="fw-bold">Welcome to Our Website</h1>
            <p className="lead">
              Experience the best of our services with ease and convenience.
            </p>
            <button className="btn btn-primary" onClick={handleStart}>
              Get Started
            </button>
          </div>

          {/* Right Section - Image */}
          <div className="col-md-6">
            <img src={pizza} alt="Hero Image" className="img-fluid w-80" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
