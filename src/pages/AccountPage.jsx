import React from "react";

const AccountPage = () => {
  return (
    <div className="bg-[#f2f2f2] min-h-screen p-6 text-black">
      <div className="max-w-4xl mx-auto bg-white shadow-md p-6 rounded">
        <h1 className="text-2xl font-bold mb-4">What Are Prime Video Profiles?</h1>
        <p className="mb-4 text-gray-700">
          Prime Video Profiles allows you to access separate recommendations, season progress,
          and Watchlist based on individual profile activity.
        </p>
        <p className="mb-4 text-gray-700">
          You can create and manage multiple profiles with personalized content, watch history,
          and recommendations. Each profile can have its own parental controls and settings.
        </p>
        <ul className="list-disc pl-5 text-blue-600">
          <li>What Are Prime Video Kid's Profiles?</li>
          <li>What Devices Currently Support Prime Video Profiles?</li>
          <li>Create and Manage Prime Video Profiles via Website</li>
          <li>Create and Manage Prime Video Profiles on Connected Devices</li>
        </ul>
      </div>
    </div>
  );
};

export default AccountPage;
