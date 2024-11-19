import React from "react";
import { motion } from "framer-motion";
import ProfileImage from "../assets/images/Snapchat-670300024.jpg";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import BackgroundAnimation from "../components/BackgroundAnimation";
import Cert1 from "../assets/images/Frontend-certificate-sheriyans-1.png";
import Cert2 from "../assets/images/Backend-Certificate-1.png";
import Cert3 from "../assets/images/Udemy.jpg";
import Cert4 from "../assets/images/Frontend-certificate-sheriyans-1.png";
import Cert5 from "../assets/images/Backend-Certificate-1.png";
import Cert6 from "../assets/images/Udemy.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import { Autoplay } from "swiper/modules";
import KeyHighlights from "../components/KeyHighlights";

const Home = () => {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
  });

  // Certificates array
  const certificates = [Cert1, Cert2, Cert3, Cert4, Cert5, Cert6];

  const stats = [
    { label: "Projects Completed", value: 3 },
    { label: "Years of Experience", value: 2 },
    { label: "Skills Acquired", value: 5 },
    { label: "Happy Clients", value: 10 },
    { label: "Certifications", value: 6 },
  ];

  // Blog data array
  const blogs = [
    {
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*BCtxoa2InpbdBo92b3X9xg.png", // Replace with actual image URLs
      title: "Top 5 Frontend Languages in 2025",
      link: "https://lakshyadav-53483.medium.com/top-5-frontend-languages-in-2025-76582fb3a7e1",
      description:
        "Explore the top frontend languages that will shape the web development landscape in 2025.",
    },
    {
      imageUrl: "https://your-image-url.com/blog2.jpg", // Replace with actual image URLs
      title: "Building Scalable React Apps",
      link: "https://lakshyadav-53483.medium.com/building-scalable-react-apps-1234567890ab",
      description:
        "Learn how to structure React applications for better scalability and performance.",
    },
    // Add more blog objects here as needed
  ];

  return (
    <div className="home-page-wrapper relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <BackgroundAnimation />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Top Banner */}
        <div className="top-banner-section flex flex-col md:flex-row justify-between items-center p-6 md:p-10 min-h-screen">
          {/* Left Content */}
          <motion.div
            className="left-content text-left mb-8 md:mb-0 md:mr-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] font-bold text-black">
              Hello,
            </h1>
            <h2 className="text-[3rem] sm:text-[4rem] lg:text-[5rem] font-bold text-blue-400">
              I am a Web Developer
            </h2>
            <p className="text-[1.1rem] sm:text-[1.3rem] lg:text-[1.5rem] text-black">
              With over 2 years of experience in the SaaS and PaaS industries, I
              specialize in creating dynamic and responsive front-end
              applications. Let’s build amazing things together!
            </p>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="right-content"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="image-container w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 overflow-hidden rounded-full shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <img
                className="img-fluid w-full h-full object-cover"
                src={ProfileImage}
                alt="Profile"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Quick Profile Summary Section */}
        <motion.div
          ref={statsRef}
          className="profile-summary text-black py-10 px-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: statsInView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-item"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold">
                <CountUp end={statsInView ? stat.value : 0} suffix="+" />
              </h3>
              <p className="text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Horizontal Gallery Section */}
        <div className="relative z-10">
          {/* Horizontal Gallery Section */}
          <div className="gallery-slider py-10">
            <h2 className="text-3xl font-bold text-center mb-6">
              Certifications & Achievements
            </h2>
            {/* Swiper Component */}
            <Swiper
              spaceBetween={50} // Space between images
              slidesPerView={3}
              loop={true} // Enables infinite loop
              autoplay={{
                delay: 1000, // Auto slide every 3 seconds
                disableOnInteraction: false, // Continue autoplay after user interaction
              }}
              modules={[Autoplay]} // Import autoplay module for Swiper
              breakpoints={{
                320: { slidesPerView: 1 }, // For small screens
                768: { slidesPerView: 2 }, // For medium screens
                1024: { slidesPerView: 3 }, // For large screens
              }}
            >
              {certificates.map((certificate, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    className="gallery-item flex-shrink-0 border-black"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <img
                      src={certificate}
                      alt={`Certificate ${index + 1}`}
                      className="w-full h-full rounded-md object-cover transition-transform duration-300 transform hover:scale-110 border-4"
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Key Highlights Section */}
        <KeyHighlights />

        {/* Tech Blogs Section */}
        <div className="tech-blogs py-10">
          <h2 className="text-3xl font-bold text-center mb-6">My Tech Blogs</h2>
          <div className="blogs-container grid sm:grid-cols-2 lg:grid-cols-3 gap-4 px-5">
            {blogs.map((blog, index) => (
              <motion.div
                key={index}
                className="blog-item bg-white rounded-lg shadow-md p-4"
                whileHover={{ scale: 1.05 }}
              >
                {/* Blog Preview with Link */}
                <a href={blog.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                  <p className="text-sm">{blog.description}</p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
