import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaWordpress,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-50"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="about-page-wrapper relative z-10 p-4 sm:p-6 md:p-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
          My Web Journey
        </h1>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2015"
            iconStyle={{ background: "#e34f26", color: "#fff" }}
            icon={<FaHtml5 />}
          >
            <h3 className="vertical-timeline-element-title font-bold text-black text-sm sm:text-base md:text-lg">
              HTML
            </h3>
            <p className="text-black text-xs sm:text-sm md:text-base">
              Started my web development journey learning HTML.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2016"
            iconStyle={{ background: "#1572B6", color: "#fff" }}
            icon={<FaCss3Alt />}
          >
            <h3 className="vertical-timeline-element-title font-bold text-black text-sm sm:text-base md:text-lg">
              CSS
            </h3>
            <p className="text-black text-xs sm:text-sm md:text-base">
              Enhanced my skills with CSS for responsive designs.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2017"
            iconStyle={{ background: "#F7DF1E", color: "#fff" }}
            icon={<FaJs />}
          >
            <h3 className="vertical-timeline-element-title font-bold text-black text-sm sm:text-base md:text-lg">
              JavaScript
            </h3>
            <p className="text-black text-xs sm:text-sm md:text-base">
              Dived deep into JavaScript to add interactivity to websites.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2018"
            iconStyle={{ background: "#61DBFB", color: "#fff" }}
            icon={<FaReact />}
          >
            <h3 className="vertical-timeline-element-title font-bold text-black text-sm sm:text-base md:text-lg">
              React.js
            </h3>
            <p className="text-black text-xs sm:text-sm md:text-base">
              Began building dynamic web apps with React.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2019"
            iconStyle={{ background: "#68A063", color: "#fff" }}
            icon={<FaNodeJs />}
          >
            <h3 className="vertical-timeline-element-title font-bold text-black text-sm sm:text-base md:text-lg">
              Node.js & MongoDB
            </h3>
            <p className="text-black text-xs sm:text-sm md:text-base">
              Ventured into backend development using Node.js and MongoDB.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2020"
            iconStyle={{ background: "#68A063", color: "#fff" }}
            icon={<SiMongodb />}
          >
            <h3 className="vertical-timeline-element-title font-bold text-black text-sm sm:text-base md:text-lg">
              WordPress
            </h3>
            <p className="text-black text-xs sm:text-sm md:text-base">
              Worked on various WordPress projects and CMS development.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021"
            iconStyle={{ background: "#21759B", color: "#fff" }}
            icon={<FaWordpress />}
          >
            <h3 className="vertical-timeline-element-title font-bold text-black text-sm sm:text-base md:text-lg">
              Client Communication & Companies
            </h3>
            <p className="text-black text-xs sm:text-sm md:text-base">
              Gained experience working with clients and companies like:
              <ul className="list-disc ml-4 sm:ml-6 mt-2">
                <li>Cross Poles Network (Jaipur)</li>
                <li>Code Epsilon Services Pvt Ltd</li>
              </ul>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default About;
