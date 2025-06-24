import React, { useState } from "react";

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      onLogin({ email });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
      <div className="w-full max-w-sm p-6 border border-gray-300 rounded shadow-sm">
        {/* Prime Video Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://static-00.iconduck.com/assets.00/primevideo-icon-2048x629-fn8b0w8w.png"
            alt="Prime Video"
            className="h-6"
          />
        </div>

        <h1 className="text-2xl font-medium mb-4">Sign in</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="text-sm font-bold text-black mb-1 block">
            Email or mobile phone number
          </label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-400 rounded px-2 py-2 mb-4 focus:outline-none focus:ring-1 focus:ring-yellow-500"
          />

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 rounded focus:outline-none"
          >
            Continue
          </button>
        </form>

        {/* Demo note */}
        <p className="text-sm text-gray-700 mt-4 text-center">
          For demo, you can use any random email or mobile number.
        </p>

        {/* Conditions note */}
        <p className="text-xs text-gray-700 mt-4">
          By continuing, you agree to the Amazon{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Conditions of Use
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Notice
          </a>
          .
        </p>

        {/* Help dropdown */}
        <div className="mt-4">
          <details className="text-sm text-blue-600 cursor-pointer">
            <summary className="hover:underline">Need help?</summary>
          </details>
        </div>

        {/* Divider */}
        <hr className="my-4" />

        {/* Create account CTA */}
        <p className="text-center text-sm text-gray-600">New to Amazon?</p>
        <button
          className="w-full border border-gray-400 rounded py-2 mt-2 text-sm hover:bg-gray-50"
          onClick={() => alert("Redirect to create account")}
        >
          Create your Amazon account
        </button>
      </div>

      {/* Footer */}
      <div className="mt-8 text-xs text-gray-600 text-center space-x-4">
        <a href="#" className="hover:underline">
          Terms and Privacy Notice
        </a>
        <a href="#" className="hover:underline">
          Send us feedback
        </a>
        <a href="#" className="hover:underline">
          Help
        </a>
        <p className="mt-2 text-gray-500">
          © 1996-2025, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
