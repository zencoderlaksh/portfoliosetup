import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Animated Name as Logo */}
        <div className="text-xl font-bold">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              color: "#ffffff",
              textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            }}
          >
            <motion.div
              animate={{
                color: ["#00BFFF", "#FF1493", "#32CD32", "#FFD700", "#00BFFF"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                display: "inline-block",
                textShadow: "0px 0px 15px rgba(255, 255, 255, 0.7)",
              }}
            >
              Laksh Yadav
            </motion.div>
          </motion.div>
        </div>

        {/* Toggle button for mobile view */}
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            type="button"
            className="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
              />
            </svg>
          </button>
        </div>

        {/* Desktop navbar links */}
        <div className={`hidden md:flex space-x-6 md:space-x-8`}>
          <Link
            to="/"
            className="block py-2 px-4 text-white hover:bg-gray-700 rounded-md"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 px-4 text-white hover:bg-gray-700 rounded-md"
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className="block py-2 px-4 text-white hover:bg-gray-700 rounded-md"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="block py-2 px-4 text-white hover:bg-gray-700 rounded-md"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <Link to="/" className="block py-2 px-4 text-white hover:bg-gray-700">
          Home
        </Link>
        <Link
          to="/about"
          className="block py-2 px-4 text-white hover:bg-gray-700"
        >
          About
        </Link>
        <Link
          to="/portfolio"
          className="block py-2 px-4 text-white hover:bg-gray-700"
        >
          Portfolio
        </Link>
        <Link
          to="/contact"
          className="block py-2 px-4 text-white hover:bg-gray-700"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
