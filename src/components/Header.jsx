// components/Header.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
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
  );
};

export default Header;
