import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

// NOTE: Changed to .jpeg to match your memory list
const images = Array.from({ length: 20 }, (_, i) => `/images/${i + 1}.jpeg`);

const BackgroundSlideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed", // Stays in place
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1, // Sits behind everything
        overflow: "hidden",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }} // Changed from 0.3 to 1 for full visibility
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 40%",
          }}
        />
      </AnimatePresence>
    </Box>
  );
};

export default BackgroundSlideshow;
