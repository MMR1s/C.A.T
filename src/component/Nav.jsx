import React, { useState } from "react";
import "../assets/css/Nav.css"; // Simplified path
import Logo from "../assets/images/logo.png"; // Simplified path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faCogs,
  faEnvelope,
  faBars, // Add hamburger icon
  faTimes, // Add close icon
} from "@fortawesome/free-solid-svg-icons"; // Updated icon

function Nav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Toggle dropdown state
  };

  return (
    <nav className="navbar">
      {/* Show links only in dropdown for mobile */}
      <ul className={`nav-links left ${dropdownOpen ? "hidden" : "hidden"}`}>
        <li>
          <a href="#home" onClick={() => setDropdownOpen(false)}>
            <FontAwesomeIcon icon={faHome} /> Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setDropdownOpen(false)}>
            <FontAwesomeIcon icon={faInfoCircle} /> About
          </a>
        </li>
      </ul>
      <div className="nav-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <ul className={`nav-links right ${dropdownOpen ? "hidden" : "hidden"}`}>
        <li>
          <a href="#services" onClick={() => setDropdownOpen(false)}>
            <FontAwesomeIcon icon={faCogs} /> Services
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setDropdownOpen(false)}>
            <FontAwesomeIcon icon={faEnvelope} /> Contact
          </a>
        </li>
      </ul>
      <div className="hamburger" onClick={toggleDropdown}>
        <FontAwesomeIcon icon={dropdownOpen ? faTimes : faBars} />
      </div>
      {/* Dropdown Menu */}
      <div className={`dropdown ${dropdownOpen ? "active" : ""}`}>
        <a href="#home" onClick={() => setDropdownOpen(false)}>
          <FontAwesomeIcon icon={faHome} /> Home
        </a>
        <a href="#about" onClick={() => setDropdownOpen(false)}>
          <FontAwesomeIcon icon={faInfoCircle} /> About
        </a>
        <a href="#services" onClick={() => setDropdownOpen(false)}>
          <FontAwesomeIcon icon={faCogs} /> Services
        </a>
        <a href="#contact" onClick={() => setDropdownOpen(false)}>
          <FontAwesomeIcon icon={faEnvelope} /> Contact
        </a>
      </div>
    </nav>
  );
}

export default Nav;
