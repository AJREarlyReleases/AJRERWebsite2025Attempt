// components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/10 py-12 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-3">
          <img
            src="/media/AJRERWebsiteLogo.png"
            alt="AJREarlyReleases"
            className="w-32"
          />
          <p className="text-sm text-white/60 max-w-xs">
            AJREarlyReleases is the largest fan-driven account dedicated to celebrating AJR content,
            sharing the latest updates, sneak peeks, concert videos, and more. For fans, by a fan.
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
            <li><a href="mailto:contact@ajrer.com" className="hover:underline">Email Us</a></li>
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
  );
};

export default Footer;
