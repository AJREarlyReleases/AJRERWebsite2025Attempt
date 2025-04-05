import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Slider from "react-slick";

import { Card, CardContent } from "@/components/ui/card";
import he from "he";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from "./components/Layout";
import DiscordPage from "./DiscordPage";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function HomePage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const API_KEY = "AIzaSyCwsfq638HVTH3fk2TKJ8cMuyq87AHt7y0";
    const CHANNEL_ID = "UC8HWVLdFyaeLcDUdAEmPg6g";

    async function fetchVideos() {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`
        );
        const data = await res.json();
        const videos = data.items?.filter((item) => item.id.videoId) || [];
        setVideos(videos);
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
      }
    }

    fetchVideos();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <Layout>
      <motion.section
        id="home"
        className="relative py-28 px-4 overflow-hidden flex items-center justify-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat blur-md opacity-40"
            style={{
              backgroundImage:
                "url(/media/AJREREverythingEverywhereLandscape.PNG)",
            }}
          ></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent mb-4">
            AJREarlyReleases
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto">
            For fans, by a fan.
          </p>
        </div>
      </motion.section>

      <motion.section
        id="videos"
        className="max-w-6xl mx-auto py-6 px-4 pb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-2xl font-bold mb-6 text-white">Latest Videos</h2>

        {videos.length > 0 ? (
          <Slider {...sliderSettings}>
            {videos.map((video) => (
              <div key={video.id.videoId} className="px-2">
                <Card className="rounded-2xl shadow-xl overflow-hidden bg-[#151515]">
                  <CardContent className="p-0">
                    <div className="aspect-video">
                      <iframe
                        loading="lazy"
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${video.id.videoId}`}
                        title={he.decode(video.snippet.title)}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white">
                        {he.decode(video.snippet.title)}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-white/50"></div>
          </div>
        )}
      </motion.section>

      <motion.section
        id="shop"
        className="max-w-6xl mx-auto px-4 pb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-2xl font-bold mb-6 text-white">Merch Highlights</h2>
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-[#151515] p-4 rounded-2xl shadow-xl overflow-hidden">
            <iframe
              src="https://shop.ajrer.com/collections/frontpage"
              title="AJRER Shopify"
              className="w-full h-[600px] rounded-xl border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="discord"
        className="max-w-6xl mx-auto px-4 pb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-2xl font-bold mb-6 text-white">
          Join the AJREarlyReleases Discord
        </h2>
        <div className="bg-[#151515] p-6 rounded-2xl shadow-xl">
          <iframe
            src="https://discord.com/widget?id=876952941553131560&theme=dark"
            width="100%"
            height="500"
            allowTransparency={true}
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            className="rounded-lg border border-white/10"
          ></iframe>
        </div>
      </motion.section>

      <motion.section
        id="about"
        className="bg-[#151515] rounded-2xl shadow-xl max-w-3xl mx-auto px-6 py-10 mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-2xl font-bold mb-2">About AJREarlyReleases</h2>
        <p className="text-white/80">
          Welcome to AJREarlyReleases—your home for all things AJR from exclusive videos to
          community events. Focused on bringing you fan-focused content, sneak peeks, and fun
          behind-the-scenes updates, AJRER is the largest fan account for AJR there is.
        </p>
      </motion.section>
    </Layout>
  );
}

function WrappedApp() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/discord" element={<DiscordPage />} />
    </Routes>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <WrappedApp />
      </Router>
    </HelmetProvider>
  );
}

export default App;