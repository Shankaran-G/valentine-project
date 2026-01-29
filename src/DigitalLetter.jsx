import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box, Typography, Button } from "@mui/material";

const DigitalLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 10,
      }}
    >
      {!isOpen ? (
        /* --- ROLLED UP STATE --- */
        <motion.div
          whileHover={{ rotate: [0, -2, 2, 0], scale: 1.05 }}
          onClick={() => setIsOpen(true)}
          style={{
            cursor: "pointer",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Top Roller */}
          <Box
            sx={{
              width: 160,
              height: 24,
              bgcolor: "#5d4037",
              borderRadius: "12px",
              zIndex: 2,
              boxShadow: 3,
            }}
          />

          {/* Scroll Body */}
          <Box
            sx={{
              width: 140,
              height: 200,
              mt: -1,
              mb: -1,
              background:
                "linear-gradient(90deg, #d4a373 0%, #faedcd 50%, #d4a373 100%)",
              borderLeft: "2px solid #bc8a5f",
              borderRight: "2px solid #bc8a5f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            }}
          >
            <Box
              sx={{
                width: "120%",
                height: "45px",
                bgcolor: "#c9184a",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
                boxShadow: 2,
                transform: "rotate(-2deg)",
              }}
            >
              🎀 OPEN OUR LETTER
            </Box>
          </Box>

          {/* Bottom Roller */}
          <Box
            sx={{
              width: 160,
              height: 24,
              bgcolor: "#5d4037",
              borderRadius: "12px",
              zIndex: 2,
              boxShadow: 3,
            }}
          />
        </motion.div>
      ) : (
        /* --- UNROLLED STATE --- */
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          style={{ width: "100%", maxWidth: "650px", position: "relative" }}
        >
          {/* Top Handle */}
          <Box
            sx={{
              width: "100%",
              height: "30px",
              bgcolor: "#5d4037",
              borderRadius: "15px 15px 0 0",
            }}
          />

          {/* Parchment Background */}
          <Box
            sx={{
              background: "#fdf0d5",
              p: { xs: 4, md: 8 },
              borderLeft: "20px solid #bc8a5f",
              borderRight: "20px solid #bc8a5f",
              boxShadow: "inset 0 0 80px rgba(0,0,0,0.15)",
              position: "relative",
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Dancing Script', cursive",
                  mb: 4,
                  color: "#590d22",
                }}
              >
                To My Forever Mathukutyyy,
              </Typography>

              <Typography
                sx={{
                  fontFamily: "'Crimson Text', serif",
                  lineHeight: 2.2,
                  fontSize: "1.25rem",
                  color: "#432818",
                  textAlign: "justify",
                }}
              >
                My love, as we look through these 20 memories, my heart feels so
                full. Each image is a testament to the life we've built
                together. Thank you for every laugh, every quiet moment, and for
                being exactly who you are.
                <br />
                <br />
                This is just a digital scroll, but my love for you is written in
                the stars. Happy Valentine's Day!
              </Typography>

              {/* Wax Seal Signature */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  mt: 6,
                }}
              >
                <Box sx={{ textAlign: "right", mr: 2 }}>
                  <Typography
                    sx={{
                      fontFamily: "'Dancing Script', cursive",
                      fontSize: "1.8rem",
                      color: "#590d22",
                    }}
                  >
                    Yours Always,
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>Shankaran</Typography>
                </Box>
                {/* Visual Wax Seal */}
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    bgcolor: "#9d0208",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "3px solid #6a040f",
                    boxShadow: 2,
                    color: "white",
                    fontSize: "1.5rem",
                  }}
                >
                  ❤️
                </Box>
              </Box>

              <Box sx={{ textAlign: "center", mt: 6 }}>
                <Button
                  onClick={() => setIsOpen(false)}
                  sx={{ color: "#bc8a5f" }}
                >
                  Roll it back up
                </Button>
              </Box>
            </motion.div>
          </Box>

          {/* Bottom Handle */}
          <Box
            sx={{
              width: "100%",
              height: "30px",
              bgcolor: "#5d4037",
              borderRadius: "0 0 15px 15px",
            }}
          />
        </motion.div>
      )}
    </Box>
  );
};

export default DigitalLetter;
