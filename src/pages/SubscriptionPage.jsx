import React from "react";

const SubscriptionPage = () => {
  return (
    <div className="bg-[#1e2b3a] text-white min-h-screen flex flex-col items-center justify-center p-6">
      <img
        src="https://i.pinimg.com/736x/7b/68/b4/7b68b458c3f5cd875866f4b23561bd6e.jpg"
        alt="Prime"
        className="w-32 mb-6"
      />
      <h1 className="text-xl sm:text-2xl font-semibold text-center">
        New members, try Prime <span className="text-blue-400 font-bold">free for 30 days</span>
      </h1>
      <p className="mt-2 text-center text-sm">
        Free delivery, award-winning TV, exclusive deals, and more
      </p>
      <button className="bg-yellow-400 hover:bg-yellow-500 text-black mt-4 px-4 py-2 rounded font-bold">
        Start your free 30-day trial
      </button>
      <p className="mt-3 text-xs text-gray-300 text-center max-w-sm">
        Only ₹149/month plan trial after trial. Cancel anytime.
        <br />
        <button
          className="underline text-blue-300 mt-1"
          onClick={() => alert("More plans coming soon!")}
        >
          Explore other plans
        </button>
      </p>
    </div>
  );
};

export default SubscriptionPage;
