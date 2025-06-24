import React, { useState } from "react";
import "../styles/CategoryTabs.css";

const tabs = ["Home", "Movies", "TV Shows", "Live TV", "My Stuff"];

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="category-tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab-button ${activeTab === tab ? "active" : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
