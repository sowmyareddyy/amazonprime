import React from "react";

function VideoCard({ title, thumbnail, badge }) {
  return (
    <div className="video-card bg-[#1a1f2a] w-40 sm:w-44 rounded-lg overflow-hidden shadow-md mb-4">
      {badge && (
        <div className="badge absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
          {badge}
        </div>
      )}
      <img
        src={thumbnail}
        alt={title}
        className="video-thumb w-full h-auto object-contain aspect-[3/4]"
      />
      <h4 className="video-title text-white text-sm font-medium text-center px-2 py-2">
        {title}
      </h4>
    </div>
  );
}

export default VideoCard;
