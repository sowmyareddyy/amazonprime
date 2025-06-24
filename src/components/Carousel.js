import React from "react";

import VideoCard from "./VideoCard";

const Carousel = ({ title, videos }) => {
  return (
    <div className="carousel">
      <h4 className="carousel-title">{title}</h4>
      <div className="carousel-row">
        {videos.map((video, idx) => (
          <VideoCard key={idx} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
