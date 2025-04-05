import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Youtube, Twitter, Instagram, Facebook, Mail, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const videos = [
  {
    title: "Discord Sings: Touchy Feely Fool by AJR",
    url: "https://www.youtube.com/embed/AlYDiQpEzU0"
  },
  {
    title: "Q&A with My Fans",
    url: "https://www.youtube.com/embed/VIDEO_ID_2"
  },
  {
    title: "Behind The Scenes: My Studio Setup",
    url: "https://www.youtube.com/embed/VIDEO_ID_3"
  }
];

export default function CreatorWebsite() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden text-center">
      <header className="sticky top-0 z-50 backdrop-blur bg-[#0a0a0a]/70 py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <img src="/media/AJRERWebsiteLogo.png" alt="AJREarlyReleases" className="w-44 animate-[float_4s_ease-in-out_infinite]" />
          <nav className="flex flex-wrap gap-3 justify-center">
            <SocialLink href="https://discord.gg/AJR" icon="fab fa-discord" label="Discord" />
            <SocialLink href="https://twitter.com/ajrearlyrelz" icon="fab fa-twitter" label="Twitter/X" />
            <SocialLink href="https://instagram.com/AJREarlyReleases" icon="fab fa-instagram" label="Instagram" />
            <SocialLink href="https://tiktok.com/@AJREarlyReleases" icon="fab fa-tiktok" label="TikTok" />
            <SocialLink href="https://youtube.com/@AJREarlyReleases" icon="fab fa-youtube" label="YouTube" />
            <SocialLink href="https://shop.ajrer.com" icon="fas fa-shopping-cart" label="Shop" />
          </nav>
        </div>
      </header>

      <main>
        <motion.section
          className="relative py-32 px-4 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat blur-md opacity-40"
              style={{ backgroundImage: 'url(/media/AJREREverythingEverywhereLandscape.PNG)', backgroundAttachment: 'fixed' }}
            ></div>
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent mb-4">
              AJREarlyReleases
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto">For fans, by a fan.</p>
          </div>
        </motion.section>

        <motion.section className="max-w-6xl mx-auto px-4 pb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-2xl font-bold mb-6 text-white">Featured Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div key={index} variants={fadeIn} className="w-full">
                <Card className="rounded-2xl shadow-xl overflow-hidden bg-[#151515]">
                  <CardContent className="p-0">
                    <div className="aspect-video">
                      <iframe
                        className="w-full h-full"
                        src={video.url}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white">{video.title}</h3>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="max-w-6xl mx-auto px-4 pb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
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

        <motion.section className="max-w-6xl mx-auto px-4 pb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-2xl font-bold mb-6 text-white">Join the AJREarlyReleases Discord</h2>
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

        <motion.section className="max-w-3xl mx-auto px-6 pb-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input type="email" placeholder="Enter your email" className="flex-1 rounded-xl px-4 py-2 shadow bg-white text-black" />
            <Button className="rounded-xl bg-white text-black hover:bg-gray-200">Subscribe</Button>
          </form>
        </motion.section>

        <motion.section className="bg-[#151515] rounded-2xl shadow-xl max-w-3xl mx-auto px-6 py-10 mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-2xl font-bold mb-2">About AJREarlyReleases</h2>
          <p className="text-white/80">
            Welcome to AJREarlyReleases—your home for all things AJR from exclusive videos to community events. We're a passionate crew bringing you fan-focused content, sneak peeks, and fun behind-the-scenes updates.
          </p>
        </motion.section>

        <footer className="text-center text-white/60 py-6">
          <p>&copy; {new Date().getFullYear()} AJREarlyReleases</p>
        </footer>
      </main>
    </div>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5 rounded-full hover:bg-white/10 transition-all"
    >
      <i className={`${icon} text-lg`}></i>
      <span className="hidden md:inline-block text-sm font-medium">{label}</span>
    </a>
  );
}
