import React, { useState } from "react";

const initialProfiles = [
  {
    id: "sowmya",
    name: "Sowmya",
    avatar:
      "https://i.pinimg.com/736x/7b/c5/03/7bc5033c74a96a161f1283de506b817c.jpg",
  },
  {
    id: "kids",
    name: "Kids",
    avatar:
      "https://i.pinimg.com/736x/c6/99/31/c699318ead25a55a908e0cd2f1c2a5f7.jpg",
  },
  {
    id: "Guest1",
    name: "Guest 1",
    avatar:
      "https://i.pinimg.com/736x/61/54/76/61547625e01d8daf941aae3ffb37f653.jpg",
  },
  {
    id: "guest2",
    name: "Guest 2",
    avatar:
      "https://i.pinimg.com/736x/b4/0b/51/b40b51418293936a6e0ad09ffa229cb7.jpg",
  },
];

const ProfileSelection = ({ onProfileSelect }) => {
  const [profiles, setProfiles] = useState(initialProfiles);
  const [editingId, setEditingId] = useState(null);
  const [tempName, setTempName] = useState("");

  const startEditing = (id, currentName) => {
    setEditingId(id);
    setTempName(currentName);
  };

  const saveName = (id) => {
    const updated = profiles.map((p) =>
      p.id === id ? { ...p, name: tempName } : p
    );
    setProfiles(updated);
    setEditingId(null);
  };

  return (
    <div className="min-h-screen bg-[#0F171E] flex flex-col items-center justify-center px-4">
      <h1 className="text-white text-4xl md:text-5xl font-light mb-12">
        Who's Watching?
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="flex flex-col items-center hover:scale-105 transition"
          >
            <div
              onClick={() => onProfileSelect(profile.name)}
              className="cursor-pointer"
            >
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-transparent hover:border-white object-cover shadow-md"
              />
            </div>

            {editingId === profile.id ? (
              <div className="mt-3 flex flex-col items-center">
                <input
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  className="text-black px-2 py-1 rounded text-center"
                />
                <button
                  onClick={() => saveName(profile.id)}
                  className="text-sm mt-1 bg-blue-500 px-2 py-1 rounded hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            ) : (
              <>
                <p className="text-white mt-3 text-lg">{profile.name}</p>
                <button
                  onClick={() => startEditing(profile.id, profile.name)}
                  className="text-xs mt-1 text-gray-300 hover:text-white underline"
                >
                  Edit Profile
                </button>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-16 text-blue-400 text-sm text-center space-x-4">
        <a
          href="https://www.primevideo.com/help/ref=atv_hp_nd_cnt"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-blue-300"
        >
          Terms and Privacy Notice
        </a>
        <span className="text-blue-400">·</span>
        <a
          href="https://www.amazon.com/gp/help/customer/contact-us"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-blue-300"
        >
          Send us feedback
        </a>
        <span className="text-blue-400">·</span>
        <a
          href="https://www.primevideo.com/help"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-blue-300"
        >
          Help
        </a>
        <div className="mt-2">
          © 1996–2025, Amazon.com, Inc. or its affiliates
        </div>
      </footer>
    </div>
  );
};

export default ProfileSelection;
