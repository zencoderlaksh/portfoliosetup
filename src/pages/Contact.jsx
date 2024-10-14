import React from "react";
import {
  Box,
  Flex,
  Heading,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

// Bubble animation background
const AnimatedBubble = () => (
  <motion.div
    className="bubble"
    initial={{ x: -200, y: -200, opacity: 0 }}
    animate={{ x: [0, 100, 300, 500], y: [0, 150, 0, 150], opacity: 0.5 }}
    transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
    style={{
      position: "absolute",
      background: "linear-gradient(to right, #ff7e5f, #feb47b)",
      width: "300px",
      height: "300px",
      borderRadius: "50%",
      filter: "blur(100px)",
    }}
  />
);

const Contact = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box position="relative" minH="100vh" py={10} px={[4, 6, 10]}>
      {/* Animated Background */}
      <Box
        overflow="hidden"
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        zIndex={-1}
      >
        <AnimatedBubble />
        <AnimatedBubble />
        <AnimatedBubble />
      </Box>

      {/* Contact Form */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        maxW={["100%", "600px"]}
        mx="auto"
        p={[4, 6, 8]}
        borderRadius="lg"
        boxShadow="lg"
        bg={isDark ? "gray.700" : "white"}
        zIndex={1}
      >
        <Heading
          as="h2"
          size={["lg", "xl"]}
          mb={6}
          color={isDark ? "white" : "gray.800"}
        >
          Contact Me
        </Heading>

        {/* Form */}
        <FormControl id="name" mb={4} isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Your Name"
            size="lg"
            variant="filled"
            focusBorderColor="teal.400"
          />
        </FormControl>

        <FormControl id="email" mb={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Your Email"
            size="lg"
            variant="filled"
            focusBorderColor="teal.400"
          />
        </FormControl>

        <FormControl id="message" mb={6} isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea
            placeholder="Your Message"
            size="lg"
            variant="filled"
            focusBorderColor="teal.400"
          />
        </FormControl>

        <Button colorScheme="teal" size="lg" px={8}>
          Send Message
        </Button>
      </Flex>
    </Box>
  );
};

export default Contact;
