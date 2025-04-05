import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faTwitter,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faShoppingCart,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const MotionLink = motion.a;

export default function CreatorWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const API_KEY = "YOUR_YOUTUBE_API_KEY"; // 🔑 Replace this
      const CHANNEL_ID = "YOUR_CHANNEL_ID"; // 📺 Replace this

      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`
        );
        const data = await res.json();
        const videoItems = data.items.filter((item) => item.id.videoId);
        setVideos(videoItems);
      } catch (err) {
        console.error("Error fetching YouTube videos:", err);
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
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden text-center">
      <header className="sticky top-0 z-50 backdrop-blur bg-[#0a0a0a]/70 py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 relative">
          <a href="/">
            <img
              src="/media/AJRERWebsiteLogo.png"
              alt="AJREarlyReleases"
              className="w-44 animate-[float_4s_ease-in-out_infinite] hover:opacity-80 transition"
            />
          </a>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
          </button>

          <nav className="hidden md:flex flex-wrap gap-3 justify-center">
            <SocialLinks />
          </nav>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-0 w-full bg-[#0a0a0a] py-4 shadow-xl flex flex-col items-center gap-3 md:hidden"
              >
                <SocialLinks />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <main>
        <motion.section
          id="home"
          className="relative py-28 px-4 overflow-hidden"
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

        {/* ▶️ YouTube Carousel */}
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
                          title={video.snippet.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-white">
                          {video.snippet.title}
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

        <footer className="bg-[#0a0a0a] text-white border-t border-white/10 py-12 px-6 mt-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-3">
              <img
                src="/media/AJRERWebsiteLogo.png"
                alt="AJREarlyReleases"
                className="w-32"
              />
              <p className="text-sm text-white/60 max-w-xs">
                AJREarlyReleases is a fan-driven platform dedicated to celebrating AJR content,
                behind-the-scenes peeks, and merch drops. For fans, by a fan.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#home" className="hover:underline">Home</a></li>
                <li><a href="#videos" className="hover:underline">Featured Videos</a></li>
                <li><a href="#shop" className="hover:underline">Merch</a></li>
                <li><a href="#about" className="hover:underline">About</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="mailto:ajrearlyreleases1@gmail.com" className="hover:underline">Email Us</a></li>
                <li><a href="https://discord.gg/AJR" target="_blank" rel="noopener noreferrer" className="hover:underline"> Discord</a></li>
                <li><a href="https://twitter.com/ajrearlyrelz" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter/X</a></li>
                <li><a href="https://youtube.com/@AJREarlyReleases" target="_blank" rel="noopener noreferrer" className="hover:underline">YouTube</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center text-white/40 text-sm">
            &copy; {new Date().getFullYear()} AJREarlyReleases. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <MotionLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5 rounded-full hover:bg-white/10 transition-all"
    >
      <FontAwesomeIcon icon={icon} className="text-white text-lg" />
      <span className="text-sm font-medium">{label}</span>
    </MotionLink>
  );
}

function SocialLinks() {
  return (
    <>
      <SocialLink href="https://discord.gg/AJR" icon={faDiscord} label="Discord" />
      <SocialLink href="https://twitter.com/ajrearlyrelz" icon={faTwitter} label="Twitter/X" />
      <SocialLink href="https://instagram.com/AJREarlyReleases" icon={faInstagram} label="Instagram" />
      <SocialLink href="https://tiktok.com/@AJREarlyReleases" icon={faTiktok} label="TikTok" />
      <SocialLink href="https://youtube.com/@AJREarlyReleases" icon={faYoutube} label="YouTube" />
      <SocialLink href="https://shop.ajrer.com" icon={faShoppingCart} label="Shop" />
    </>
  );
}

