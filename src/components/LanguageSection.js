import React from "react";
import "../styles/LanguageSection.css";

const languages = [
  { name: "Hindi", image: "/assets/banners/hindi.jpg" },
  { name: "English", image: "/assets/banners/english.jpg" },
  { name: "Telugu", image: "/assets/banners/telugu.jpg" },
  { name: "Tamil", image: "/assets/banners/tamil.jpg" }
];

const LanguageSection = () => {
  return (
    <div className="language-section">
      <h5 className="section-title">Watch in Your Language</h5>
      <div className="language-grid">
        {languages.map((lang, idx) => (
          <div className="language-card" key={idx}>
            <img src={lang.image} alt={lang.name} className="language-img" />
            <p className="language-name">{lang.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSection;
