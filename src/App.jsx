import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Masonry from "@mui/lab/Masonry";
import DigitalLetter from "./DigitalLetter";
import BackgroundSlideshow from "./BackgroundSlideshow";
import { motion } from "framer-motion";

const memories = [
  {
    title: "The Day We Met",
    date: "Jan 09, 2025",
    img: "/images/1.jpeg",
    desc: "Where it all began.",
  },
  {
    title: "First Bus Travel",
    date: "Jan 18, 2025",
    img: "/images/2.jpeg",
    desc: "I knew you were the one.",
  },
  {
    title: "First Proper Kiss",
    date: "Jan 19, 2025",
    img: "/images/3.jpeg",
    desc: "Unforgettable Day",
  },
  {
    title: "First Home Visit",
    date: "Jan 21, 2025",
    img: "/images/4.jpeg",
    desc: "Blessed Day with full of Happiness",
  },
  {
    title: "The Day We 🤫🥰😘😍",
    date: "Jan 22, 2025",
    img: "/images/5.jpeg",
    desc: "Mommyyyyyyyy",
  },
  {
    title: "Papa Born Day",
    date: "Feb 01, 2025",
    img: "/images/6.jpeg",
    desc: "All Fight End With Good Baby Born",
  },
  {
    title: "Your First Hottest Outfit",
    date: "Feb 02, 2025",
    img: "/images/7.jpeg",
    desc: "Sexyyyy",
  },
  {
    title: "My Uber Lady",
    date: "Feb 03, 2025",
    img: "/images/8.jpeg",
    desc: "First and Last Time This kind of pleasure",
  },
  {
    title: "Find Our Place",
    date: "Feb 06, 2025",
    img: "/images/9.jpeg",
    desc: "Its Have lots of Our Memories",
  },
  {
    title: "First Movie Date",
    date: "Feb 09, 2025",
    img: "/images/10.jpeg",
    desc: "Dudeeeee I Love Youuuu.",
  },
  {
    title: "First Valentines Day",
    date: "Feb 14, 2025",
    img: "/images/11.jpeg",
    desc: "Surprise Moments",
  },
  {
    title: "Gymastic Day",
    date: "Feb 17, 2025",
    img: "/images/12.jpeg",
    desc: "What A Strong Lady",
  },
  {
    title: "First Tamil&Sinhala New Year",
    date: "Apr 14, 2025",
    img: "/images/13.jpeg",
    desc: "Divine Beauty",
  },
  {
    title: "The Thiruvila Day at Nallur Murugan",
    date: "Aug 8, 2025",
    img: "/images/14.jpeg",
    desc: "Always Murugan",
  },
  {
    title: "First Train Travel",
    date: "Aug 10, 2025",
    img: "/images/15.jpeg",
    desc: "Alhooril Poothavele...",
  },
  {
    title: "Travel With Baasha",
    date: "Sep 05, 2025",
    img: "/images/16.jpeg",
    desc: "A Long Ride With Youuu Dr",
  },
  {
    title: "The Day Like Husband & Wifeee",
    date: "Oct 15, 2025",
    img: "/images/17.jpeg",
    desc: "Proud To Be Your Husband",
  },
  {
    title: "Long  Distance Bdya Gift",
    date: "Nov 10, 2025",
    img: "/images/18.jpeg",
    desc: "The Love You Gave All The Time",
  },
  {
    title: "Long Distance Bday Celebration of Yours",
    date: "Dec 08, 2025",
    img: "/images/19.jpeg",
    desc: "Unforgettable Day",
  },
  {
    title: "How Its Going",
    date: "Jan 21, 2025",
    img: "/images/20.jpeg",
    desc: "I Love Youuuuuuu More Than You Think...",
  },
];

const App = () => {
  const [loading, setLoading] = React.useState(true);
  const audioRef = React.useRef(null);
  const [showContent, setShowContent] = React.useState(false);
  React.useEffect(() => {
    // This simulates waiting for images to "check in"
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#fff5f7",
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          <FavoriteIcon sx={{ color: "#ff4d6d", fontSize: 100 }} />
        </motion.div>
      </Box>
    );
  }

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0;
      audioRef.current.play();

      let vol = 0;
      const fade = setInterval(() => {
        if (vol < 0.7) {
          vol += 0.02;
          audioRef.current.volume = vol;
        } else {
          clearInterval(fade);
        }
      }, 100);
    }
  };
  const startDate = new Date("2025-01-09");
  const today = new Date();
  const diffDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

  return (
    <Box
      sx={{
        bgcolor: "transparent",
        minHeight: "100vh",
        pb: 10,
        position: "relative",
      }}
    >
      <BackgroundSlideshow />
      <audio ref={audioRef} loop>
        <source src="/src/music/love.mp3" type="audio/mpeg" />
      </audio>
      {/* 1. Hero Section */}
      {/* Hero Section */}
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            background: "rgba(255,255,255,0.9)",
            borderRadius: "24px",
            padding: "60px 40px",
            textAlign: "center",
            boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
            backdropFilter: "blur(10px)",
            maxWidth: "420px",
            width: "90%",
          }}
        >
          <FavoriteIcon sx={{ color: "#ff4d6d", fontSize: 60, mb: 2 }} />

          <Typography
            variant="h3"
            sx={{ fontFamily: "serif", color: "#590d22", fontWeight: "bold" }}
          >
            To My Favorite Person
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, color: "#a4133c" }}>
            {diffDays} Days of loving you.
          </Typography>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              playMusic();
              setShowContent(true);
            }}
            style={{
              marginTop: "30px",
              background: "linear-gradient(135deg,#ff4d6d,#ff758f)",
              border: "none",
              color: "white",
              padding: "14px 32px",
              borderRadius: "30px",
              fontSize: "16px",
              cursor: "pointer",
              boxShadow: "0 8px 20px rgba(255,77,109,0.4)",
            }}
          >
            Explore 💕
          </motion.button>
        </motion.div>
      </Box>
      {showContent && (
        <Container maxWidth="md">
          {/* 2. Our Memories Grid */}
          <Typography
            variant="h4"
            align="center"
            sx={{ mb: 4, color: "#590d22" }}
          >
            Our Journey So Far
          </Typography>

          {/* Masonry Grid: 4 Columns on Desktop, 2 on Tablet, 1 on Mobile */}
          <Masonry
            columns={{ xs: 1, sm: 2, md: 4 }}
            spacing={2}
            sx={{ margin: 0 }}
          >
            {memories.map((item, index) => (
              <Card
                key={index}
                sx={{
                  borderRadius: 4,
                  boxShadow: "0 4px 20px rgba(255,182,193,0.2)",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)", // Added a "lift" on hover
                    boxShadow: "0 12px 30px rgba(255,77,109,0.3)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={item.img}
                  alt={item.title}
                  loading="lazy"
                  sx={{
                    width: "100%",
                    display: "block",
                    borderRadius: "16px 16px 0 0",
                  }}
                />
                <CardContent sx={{ p: 2, bgcolor: "white" }}>
                  <Typography variant="subtitle2" sx={{ color: "#ff4d6d" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    {item.date}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Masonry>

          {/* 3. The Digital Letter */}
          <DigitalLetter />
        </Container>
      )}
    </Box>
  );
};

export default App;
