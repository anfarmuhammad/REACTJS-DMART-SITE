import React, { useState } from "react";
import Logo from '/src/assets/download.png';

import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHomepage = location.pathname === "/";
  const isAboutpage = location.pathname === "/about";
  const isCategories = location.pathname === "/categories";
  const isSocial = location.pathname === "/social";
  const isFeedback = location.pathname === "/feedback";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full fixed top-0 bg-white shadow md:shadow-xl z-50">
      {/* Main Header */}
      <div className="h-24 flex items-center justify-between px-4 md:px-16">
        <img className="w-[100px] h-[50px]" src={Logo} alt="logo" />
        {/* Hamburger Icon */}
        <button
          className="text-2xl md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex items-center gap-8 font-bold">
          <li>
            <Link
              to="/"
              className={`${isHomepage ? "text-lime-800" : "text-black"}`}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`${isAboutpage ? "text-lime-800" : "text-black"}`}
            >
              ABOUT US
            </Link>
          </li>
          <li>
            <Link
              to="/categories"
              className={`${isCategories ? "text-lime-800" : "text-black"}`}
            >
              CATEGORIES
            </Link>
          </li>
          <li>
            <Link
              to="/social"
              className={`${isSocial ? "text-lime-800" : "text-black"}`}
            >
              SOCIAL OUTREACH
            </Link>
          </li>
          <li>
            <Link
              to="/feedback"
              className={`${isFeedback ? "text-lime-800" : "text-black"}`}
            >
              FEEDBACK
            </Link>
          </li>
        </ul>
        {/* Social Links (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://www.facebook.com/AvenueSupermarts/">
            <img
              src="https://img.icons8.com/?size=48&id=118497&format=png"
              alt="Facebook"
            />
          </a>
          <a href="https://www.linkedin.com/company/avenue-supermarts-ltd-dmart/">
            <img
              src="https://img.icons8.com/?size=48&id=xuvGCOXi8Wyg&format=png"
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col gap-4 p-4 font-bold">
            <li>
              <Link
                to="/"
                className={`${isHomepage ? "text-lime-800" : "text-black"}`}
                onClick={toggleMenu}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`${isAboutpage ? "text-lime-800" : "text-black"}`}
                onClick={toggleMenu}
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                to="/categories"
                className={`${isCategories ? "text-lime-800" : "text-black"}`}
                onClick={toggleMenu}
              >
                CATEGORIES
              </Link>
            </li>
            <li>
              <Link
                to="/social"
                className={`${isSocial ? "text-lime-800" : "text-black"}`}
                onClick={toggleMenu}
              >
                SOCIAL OUTREACH
              </Link>
            </li>
            <li>
              <Link
                to="/feedback"
                className={`${isFeedback ? "text-lime-800" : "text-black"}`}
                onClick={toggleMenu}
              >
                FEEDBACK
              </Link>
            </li>
          </ul>
          {/* Social Links (Mobile) */}
          <div className="flex gap-4 justify-center p-4">
            <a href="https://www.facebook.com/AvenueSupermarts/">
              <img
                src="https://img.icons8.com/?size=48&id=118497&format=png"
                alt="Facebook"
              />
            </a>
            <a href="https://www.linkedin.com/company/avenue-supermarts-ltd-dmart/">
              <img
                src="https://img.icons8.com/?size=48&id=xuvGCOXi8Wyg&format=png"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;

