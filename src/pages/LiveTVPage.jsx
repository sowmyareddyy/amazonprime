import React from "react";

const LiveTVPage = () => {
  const channels = ["BBC Kids", "BBC Player", "FanCode"];
  const programs = ["Swashbuckle", "H", "H", "I", "Go J...", "T", "S", "S", "S", "JoJ...", "B", "B"];

  return (
    <div className="p-6 bg-[#0f1115] text-white min-h-screen">
      {channels.map((channel, i) => (
        <div key={i} className="mb-8">
          <h2 className="font-semibold text-xl mb-3">{channel}</h2>
          <div className="flex gap-2 overflow-x-auto">
            <div className="bg-[#1a1c22] p-4 rounded w-40 flex flex-col items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA_-g1S5DQCu0XeZLTbwg_JSLjZZwL1IfUvQ&s"
                alt="Channel"
                className="h-6 mb-2"
              />
              <span className="text-xs text-gray-300">11 min left</span>
              <span className="text-sm font-bold">Swashbuckle</span>
              <div className="w-full h-1 mt-1 bg-gray-500 relative">
                <div className="absolute top-0 left-0 h-1 bg-red-500" style={{ width: "50%" }}></div>
              </div>
            </div>

            {programs.map((p, j) => (
              <div
                key={j}
                className="w-20 h-20 bg-[#1f2128] rounded flex items-center justify-center text-sm font-medium text-gray-300"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LiveTVPage;
