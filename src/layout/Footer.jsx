import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="flex justify-between items-center">
          {/* Left Section - Copyright */}
          <div className="text-sm">
            © {new Date().getFullYear()} Laksh Yadav. All rights reserved.
          </div>

          {/* Right Section - Social Links with Icons */}
          <div className="flex space-x-4">
            <motion.a
              href="https://github.com/zencoderlaksh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={24} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/laksh-yadav-8a234a152/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={24} />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/yadavlakshya86/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram size={24} />
            </motion.a>

            <motion.a
              href="https://www.facebook.com/lakshya.yadav.336"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFacebook size={24} />
            </motion.a>
          </div>
        </div>

        {/* Optional - Middle Section */}
        <div className="mt-4 text-center text-sm text-gray-400">
          Designed & Built by Laksh Yadav
        </div>
      </div>
    </footer>
  );
};

export default Footer;
