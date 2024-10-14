import React from "react";
import { Box, Heading, Text, Image, Flex, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const PortfolioCard = ({ title, img }) => (
  <motion.div
    whileHover={{ scale: 1.05, rotateZ: 2 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    style={{
      margin: "15px",
      borderRadius: "12px",
      background: "rgba(255, 255, 255, 0.1)",
      transformOrigin: "center",
    }}
  >
    <Box
      maxW={["100%", "350px"]}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="2xl"
      p={5}
      bgGradient="linear(to-br, gray.700, gray.900)"
    >
      <Image src={img} alt={title} borderRadius="lg" />
      <Heading as="h3" size="md" mt={4} color="teal.300">
        {title}
      </Heading>
      <Text mt={3} color="gray.300">
        This is a captivating project showcase with smooth animations.
      </Text>
    </Box>
  </motion.div>
);

const PortfolioSlider = ({ projects, category }) => {
  React.useEffect(() => {
    gsap.to(".portfolio-slider", {
      x: -100,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".portfolio-slider",
        start: "top 80%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <Box mb={16} position="relative">
      <Heading
        as="h2"
        size="lg"
        mb={8}
        textAlign="center"
        color="teal.200"
        transform="skewY(-3deg)"
      >
        {category} Projects
      </Heading>
      <Flex
        className="portfolio-slider"
        overflowX="auto"
        justifyContent="center"
        alignItems="center"
        flexWrap={["wrap", "nowrap"]}
        sx={{
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {projects.map((project) => (
          <PortfolioCard
            key={project.id}
            title={project.title}
            img={project.img}
          />
        ))}
      </Flex>
    </Box>
  );
};

const Portfolio = () => {
  return (
    <Box
      bg="gray.900"
      py={20}
      px={[5, 10]}
      position="relative"
      overflow="hidden"
      minH="100vh"
      zIndex={1}
    >
      {/* Background Visuals */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1.5 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
        style={{
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.15), transparent)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          position: "absolute",
          top: "10%",
          left: "50%",
          filter: "blur(150px)",
          zIndex: -1,
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.5, scale: 1.2 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
        style={{
          background:
            "radial-gradient(circle, rgba(0, 255, 255, 0.1), transparent)",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          position: "absolute",
          top: "70%",
          left: "30%",
          filter: "blur(180px)",
          zIndex: -1,
        }}
      />

      <Heading
        as="h1"
        size={["xl", "2xl"]}
        mb={12}
        textAlign="center"
        color="teal.400"
        fontFamily="'Poppins', sans-serif"
        transform="skewY(-2deg)"
      >
        My Creative Portfolio
      </Heading>

      <PortfolioSlider projects={personalProjects} category="Personal" />
      <PortfolioSlider
        projects={professionalProjects}
        category="Professional"
      />
    </Box>
  );
};

// Dummy data for projects
const personalProjects = [
  {
    id: 1,
    title: "Personal Project 1",
    img: "https://dummyimage.com/300x200/000/fff",
  },
  {
    id: 2,
    title: "Personal Project 2",
    img: "https://dummyimage.com/300x200/000/fff",
  },
];

const professionalProjects = [
  {
    id: 1,
    title: "Professional Project 1",
    img: "https://dummyimage.com/300x200/000/fff",
  },
  {
    id: 2,
    title: "Professional Project 2",
    img: "https://dummyimage.com/300x200/000/fff",
  },
];

export default Portfolio;
