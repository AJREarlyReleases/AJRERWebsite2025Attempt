import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Slider from "react-slick";
import { Helmet } from "react-helmet-async";
import Modal from "react-modal";

import { Card, CardContent } from "@/components/ui/card";
import he from "he";
import { motion, AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from "./components/Layout";
import DiscordPage from "./DiscordPage";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

Modal.setAppElement("#root"); // ensures accessibility

function HomePage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [isMinimized, setIsMinimized] = useState(false);

  const presetVideos = [
    { videoId: "AlYDiQpEzU0", title: "Discord Sings: 'Touchy Feely Fool' by AJR" },
    { videoId: "19MLacx95So", title: "AJR - The Maybe Man (Album Release Show) | 4K 60FPS" },
    { videoId: "WyzfA_7uV60", title: "Discord’s Smallest Violin - A Parody" },
    { videoId: "S0xRO5wR_EU", title: "The Lost AJR Performance at the White House" },
    { videoId: "ynoNzeajNY0", title: "AJR - One Spectacular Night Overture (Intro/Outro) | Visualizer" },
    { videoId: "drs-YEnZgss", title: "AJR performs 'Yes I'm A Mess' & 'Burn the House Down' (2024 NHL Stadium Series Performance)" },
    { videoId: "fr9bNFRu84Y", title: "AJR’s Full Set (LIVE from iHeartRadio’s Jingle Ball 2022)" }
  ];

  const openModal = (videoId) => {
    setActiveVideo(videoId);
    setModalIsOpen(true);
    setIsMinimized(false);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setActiveVideo(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeModal();
    if (e.key === "m") setIsMinimized((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const merchItems = [
    {
      id: 1,
      name: "Eyeroll Timoji Plushie",
      image: "https://shop.ajrer.com/cdn/shop/files/17821556653036785784_2048.jpg",
      url: "https://shop.ajrer.com/products/eyeroll-timoji-plushie",
    },
    {
      id: 2,
      name: "The Timoji Sticker Pack (First Generation)",
      image: "https://shop.ajrer.com/cdn/shop/files/2937283496686133020_2048.jpg",
      url: "https://shop.ajrer.com/products/the-timoji-sticker-pack-first-generation",
    },
    {
      id: 3,
      name: "Shushing Timoji Sticker",
      image: "https://shop.ajrer.com/cdn/shop/files/15556989263249797231_1200.jpg",
      url: "https://shop.ajrer.com/products/the-shushing-timoji-sticker",
    },
  ];  

  const videoSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };
  
  const merchSliderSettings = {
    ...videoSliderSettings,
    arrows: false, // override
    autoplay: false, // disable auto-scroll
  };  

  return (
    <Layout>
      <Helmet>
        <title>AJREarlyReleases</title>
        <meta name="description" content="AJREarlyReleases is a fan-driven account dedicated to celebrating AJR content." />
        <meta property="og:title" content="AJREarlyReleases" />
        <meta property="og:description" content="AJREarlyReleases is a fan-driven account dedicated to celebrating AJR content." />
        <meta property="og:image" content="https://ajrer.com/meta-cover.PNG" />
        <meta property="og:url" content="https://ajrer.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AJREarlyReleases" />
        <meta name="twitter:description" content="AJREarlyReleases is a fan-driven account dedicated to celebrating AJR content." />
        <meta name="twitter:image" content="https://ajrer.com/meta-cover.PNG" />
      </Helmet>

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
        <h2 className="text-2xl font-bold mb-6 text-white">Featured Videos</h2>
        <Slider {...videoSliderSettings}>
          {presetVideos.map((video) => (
            <div
              key={video.videoId}
              className="px-2 group cursor-pointer"
              onClick={() => openModal(video.videoId)}
            >
              <Card className="rounded-2xl shadow-xl overflow-hidden bg-[#151515]">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <img
                      src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white">
                      {video.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>

        <AnimatePresence>
          {modalIsOpen && activeVideo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className={`fixed z-50 bg-black shadow-xl transition-all duration-300 rounded-lg overflow-hidden ${
                isMinimized
                  ? "bottom-4 right-4 w-72 h-40"
                  : "inset-0 flex items-center justify-center bg-black/80 p-4"
              }`}
            >
              <div className="relative w-full h-full min-w-[300px] min-h-[180px]">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 text-white text-xl z-10"
                >
                  &times;
                </button>
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="absolute top-2 left-2 text-white text-sm bg-black/50 px-2 py-1 rounded z-10"
                >
                  {isMinimized ? "Maximize" : "Minimize"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
        <Slider {...merchSliderSettings}>
          {merchItems.map((item) => (
            <div
              key={item.id}
              className="px-2 group cursor-pointer"
            >
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <Card className="rounded-2xl shadow-xl overflow-hidden bg-[#151515] transition-transform duration-300 group-hover:scale-105">
                  <CardContent className="p-0">
                    <div className="relative aspect-video">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white text-center">{item.name}</h3>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>
          ))}
        </Slider>

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