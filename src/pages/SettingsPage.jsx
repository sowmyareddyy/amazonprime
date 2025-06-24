import React from "react";

const SettingsPage = () => {
  return (
    <div className="bg-[#f2f2f2] min-h-screen p-6 text-black">
      <div className="max-w-2xl mx-auto bg-white shadow-md p-6 rounded">
        <h2 className="text-xl font-bold mb-4">Change or update your personal info here</h2>

        <form className="space-y-4">
          <div>
            <label className="block font-medium">Country of citizenship</label>
            <select className="w-full border p-2 rounded">
              <option>Select country</option>
              <option>India</option>
              <option>USA</option>
            </select>
          </div>

          <div>
            <label className="block font-medium">Date of birth</label>
            <input type="date" className="w-full border p-2 rounded" />
          </div>

          <div>
            <label className="block font-medium">Residential address</label>
            <input type="text" className="w-full border p-2 rounded" placeholder="Enter address" />
          </div>

          <div>
            <label className="block font-medium">Mobile number</label>
            <input type="tel" className="w-full border p-2 rounded" placeholder="Enter mobile number" />
          </div>

          <button type="submit" className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600">
            Save
          </button>
        </form>

        <p className="mt-6 text-blue-600 text-sm">
          For any other setting, call our customer care.
        </p>
      </div>
    </div>
  );
};

export default SettingsPage;
