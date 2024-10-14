import React from "react";
import { Box, Heading, Text, SimpleGrid, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Motion configuration for skill cards
const cardVariants = {
  offscreen: { scale: 0.9, opacity: 0 },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

// Skills data
const skills = [
  {
    id: 1,
    title: "Web Dev",
    description: "Building responsive and interactive websites.",
    icon: "🖥️", // You can replace this with actual icons from a library
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Creating user-friendly interfaces with a focus on user experience.",
    icon: "🎨",
  },
  {
    id: 3,
    title: "Full-Stack Dev",
    description: "Developing complete web solutions",
    icon: "🛠️",
  },
  {
    id: 4,
    title: "Content Creation",
    description: "Crafting engaging content for websites and social media.",
    icon: "✍️",
  },
];

// Card component for displaying skills
const SkillCard = ({ title, description, icon }) => (
  <motion.div
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.8 }}
    variants={cardVariants}
  >
    <Box
      borderWidth="1px"
      borderRadius="lg"
      bg="gray.700"
      p={6}
      boxShadow="lg"
      textAlign="center"
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
    >
      <Text fontSize="2xl">{icon}</Text>
      <Heading as="h3" size="lg" mt={4} color="white">
        {title}
      </Heading>
      <Text mt={2} color="gray.200">
        {description}
      </Text>
    </Box>
  </motion.div>
);

const WhatIDo = () => {
  return (
    <Box
      bg="gray.800"
      py={16}
      px={8}
      position="relative"
      overflow="hidden"
      minH="100vh"
    >
      {/* Background effect */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9))"
        zIndex={-1}
      />

      <Heading as="h2" size="2xl" mb={8} textAlign="center" color="teal.400">
        What I Do
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            title={skill.title}
            description={skill.description}
            icon={skill.icon}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default WhatIDo;
