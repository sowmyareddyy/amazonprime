import React, { useRef, useEffect } from "react";
import { FaPlay } from "react-icons/fa";

const InfoOverlay = ({ item, onClose }) => {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 text-white flex flex-col md:flex-row">
      {/* Video Section */}
      <div className="relative flex-1">
        <video
          ref={videoRef}
          src={item.src}
          poster={item.poster}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
        <button
          className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded"
          onClick={onClose}
        >
          ✖
        </button>
      </div>

      {/* Info Section */}
      <div className="p-6 md:w-[40%] bg-black bg-opacity-80">
        <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
        <p className="text-gray-300 mb-4">{item.description}</p>
        <div className="flex gap-4 text-sm mb-2">
          <span className="bg-white text-black px-2 py-1 rounded">Thriller</span>
          <span>⭐ 8.2 IMDb</span>
          <span>2h 13min</span>
          <span>2025</span>
        </div>
        <button className="mt-4 bg-white text-black px-5 py-2 rounded hover:bg-gray-300 flex items-center gap-2">
          <FaPlay />
          Play Now
        </button>
      </div>
    </div>
  );
};

export default InfoOverlay;
