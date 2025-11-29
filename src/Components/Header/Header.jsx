import React, { useState } from "react";
import "./Header.css";
import logo from "../../Assets/logo.png";
import logo_light from "../../Assets/logo_light.png";
import { HashLink } from "react-router-hash-link";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", hash: "/" },
    { label: "About", hash: "/#about" },
    { label: "Education", hash: "/#education" },
    { label: "Work Exp", hash: "/#workex" },
    { label: "Research", hash: "/#research" },
    { label: "Presentations", hash: "/#presentations" },
    { label: "Achievements", hash: "/#achievements" },
    { label: "Leadership", hash: "/#positions" },
    { label: "Skills", hash: "/#skills" },
    { label: "Projects", hash: "/#projects" },
    { label: "Contact", hash: "/#contact" },
    { label: "Certifications", hash: "/#certifications" },
  ];

  const handleNavClick = (label) => {
    setActiveSection(label.toLowerCase());
    setMobileMenuOpen(false);
    // Scroll to top if Home is clicked
    if (label.toLowerCase() === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="header_box" id={props.light ? "lightid" : null}>
      <HashLink smooth to={"/"} className="header_logo_link">
        <img src={props.light ? logo_light : logo} className="header_logo" alt="Logo" />
      </HashLink>

      {/* Desktop Navigation */}
      <div className="header_links">
        {navItems.map((item) => (
          <HashLink
            key={item.label}
            smooth
            className={`header_link ${activeSection === item.label.toLowerCase() ? "active" : ""}`}
            to={item.hash}
            onClick={() => handleNavClick(item.label)}
          >
            {item.label}
          </HashLink>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="mobile_menu_btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {mobileMenuOpen ? (
          <AiOutlineClose className="menu_icon" />
        ) : (
          <AiOutlineMenu className="menu_icon" />
        )}
      </button>

      {/* Mobile Navigation */}
      <div className={`mobile_menu ${mobileMenuOpen ? "open" : ""}`}>
        <nav className="mobile_nav_links">
          {navItems.map((item) => (
            <HashLink
              key={item.label}
              smooth
              className={`mobile_nav_link ${activeSection === item.label.toLowerCase() ? "active" : ""}`}
              to={item.hash}
              onClick={() => handleNavClick(item.label)}
            >
              {item.label}
            </HashLink>
          ))}
        </nav>
      </div>

      {/* Theme Button */}
      <button
        className="themeBtn"
        onClick={() => {
          localStorage.setItem("theme", !props.light);
          props.setLight(!props.light);
        }}
        aria-label="Toggle theme"
      >
        {props.light ? (
          <BsFillMoonFill className="themeicon_light" />
        ) : (
          <BsSunFill className="themeicon" />
        )}
      </button>
    </div>
  );
}
