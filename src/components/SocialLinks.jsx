// components/SocialLinks.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faTwitter,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionRouterLink = motion(Link);
const MotionExternalLink = motion.a;

const SocialLink = ({ href, icon, label }) => {
  const isInternal = href.startsWith("/");

  const LinkComponent = isInternal ? MotionRouterLink : MotionExternalLink;

  return (
    <LinkComponent
      {...(isInternal
        ? { to: href }
        : { href, target: "_blank", rel: "noopener noreferrer" })}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5 rounded-full hover:bg-white/10 transition-all"
    >
      <FontAwesomeIcon icon={icon} className="text-white text-lg" />
      <span className="text-sm font-medium">{label}</span>
    </LinkComponent>
  );
};

const SocialLinks = () => (
  <>
    <SocialLink href="/discord" icon={faDiscord} label="Discord" />
    <SocialLink href="https://twitter.com/ajrearlyrelz" icon={faTwitter} label="Twitter/X" />
    <SocialLink href="https://instagram.com/AJREarlyReleases" icon={faInstagram} label="Instagram" />
    <SocialLink href="https://tiktok.com/@AJREarlyReleases" icon={faTiktok} label="TikTok" />
    <SocialLink href="https://youtube.com/@AJREarlyReleases" icon={faYoutube} label="YouTube" />
    <SocialLink href="https://shop.ajrer.com" icon={faShoppingCart} label="Shop" />
  </>
);

export default SocialLinks;
