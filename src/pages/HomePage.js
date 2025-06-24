import React from "react";

import HeroCarousel from "../components/HeroCarousel";
import Section from "../components/Section";
import videoData from "../data/videos.json";

const HomePage = ({ selectedProfile }) => {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Navbar is already included via Layout.jsx */}
      <HeroCarousel />
      <Section title="Featured" items={videoData.featured} />
      <Section title="Crime" items={videoData.crime} />
      <Section title="Continue Watching" items={videoData.continue} />
    </div>
  );
};

export default HomePage;