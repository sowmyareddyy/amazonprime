import React from "react";

const Section = ({ title, items = [] }) => {
  if (!Array.isArray(items)) return null;

  return (
    <div className="mb-10 px-6 relative z-10">
      <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="group relative bg-[#1f1f1f] rounded-lg overflow-hidden transition-transform duration-300 hover:z-50 hover:scale-[1.1] hover:-translate-y-6 shadow-md"
          >
            {/* Image */}
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-[230px] object-cover rounded-t-lg"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-80 text-white p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-300 mb-2 line-clamp-3">
                {item.description || "No description available."}
              </p>
              <div className="flex items-center gap-3">
                <button className="bg-white text-black text-sm px-4 py-1 rounded hover:bg-gray-300 transition">
                  ▶ Play Now
                </button>
                <span className="text-xs bg-gray-700 px-2 py-1 rounded">U/A 16+</span>
                <span className="text-xs text-gray-400">2022</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
