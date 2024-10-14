import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import ProfileImage from "../assets/images/Snapchat-670300024.jpg";
import WhatIDo from "../components/WhatIDo";

const Home = () => {
  const { scrollYProgress } = useViewportScroll();

  // Parallax effect for the text on the left
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="home-page-wrapper">
      <div className="top-banner-section flex flex-col md:flex-row justify-between items-center bg-gray-800 p-6 md:p-10 min-h-screen relative">
        {/* Left Content - Animated Text */}
        <motion.div
          style={{ y: yTransform }}
          className="left-content text-left mb-8 md:mb-0 md:mr-10"
        >
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-one text-[2.5rem] sm:text-[3rem] lg:text-[4rem] font-bold text-white"
          >
            Hello,
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
            className="text-two text-[3rem] sm:text-[4rem] lg:text-[5rem] font-bold text-blue-400"
          >
            I am a Web Developer
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            className="text-three text-[1.1rem] sm:text-[1.3rem] lg:text-[1.5rem] text-gray-300"
          >
            With over 2 years of experience in the SaaS and PaaS industries, I
            specialize in creating dynamic and responsive front-end
            applications. I have a deep understanding of modern JavaScript
            frameworks like React.js, and a keen focus on user experience and
            interface design. I’ve collaborated with teams to deliver
            high-quality products that scale.
          </motion.div>
        </motion.div>

        {/* Right Content - Animated Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="right-content"
        >
          <motion.div
            className="image-container w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 overflow-hidden rounded-full shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <img
              className="img-fluid w-full h-full object-cover"
              src={ProfileImage}
              alt="Profile"
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="whatido mt-10">
        <WhatIDo />
      </div>
    </div>
  );
};

export default Home;
