import React from "react";
import ".././assets/css/MainComp.css";
import Shooter from ".././assets/images/shooter.png";
export default function MainPage() {
  return (
    <div className="archery-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>WELCOME TO ARCHERY ABDO</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet pellentesque risus
            sollicitudin parturient suspendisse ut.
          </p>
          <button>Get To Know Us More</button>
        </div>
        <div className="hero-image">
          <img src={Shooter} alt="Archery" />
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <div className="service-card">
          <i className="service-icon">📊</i>
          <h3>Coaching Programs</h3>
        </div>
        <div className="service-card">
          <i className="service-icon">🏹</i>
          <h3>Archery Workshops</h3>
        </div>
        <div className="service-card">
          <i className="service-icon">📋</i>
          <h3>Membership Plans</h3>
        </div>
      </div>
    </div>
  );
}
