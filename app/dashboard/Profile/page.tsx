import React from "react";
import Navbar from "@/app/ui/navbar";

export default function ProfilePage() {
  // Mock profile data for demonstration purposes
  const mockProfile = {
    name: "John Doe",
    username: "johnny123",
    location: "New York City",
    venmo: "john-doe",
    cashapp: "cash.john",
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-purple-800 to-black p-8 text-white">
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Page Title */}
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-12">
        Profile & Account Settings
      </h1>

      {/* Profile Container */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl">
        {/* Account Settings Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 leading-relaxed">
            Account Information
          </h2>
          <ul className="space-y-4">
            {/* Displaying Name */}
            <li className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <strong>Name:</strong> {mockProfile.name}
            </li>

            {/* Displaying Username */}
            <li className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <strong>Username:</strong> {mockProfile.username}
            </li>

            {/* Displaying Location with a fallback if not provided */}
            <li className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <strong>Location:</strong>{" "}
              {mockProfile.location ? mockProfile.location : "Not provided"}
            </li>
          </ul>
        </section>

        {/* Payment Information Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 leading-relaxed">
            Payment Information
          </h2>
          <ul className="space-y-4">
            {/* Displaying Venmo information with a fallback */}
            <li className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <strong>Venmo:</strong>{" "}
              {mockProfile.venmo ? mockProfile.venmo : "Not provided"}
            </li>

            {/* Displaying CashApp information with a fallback */}
            <li className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <strong>CashApp:</strong>{" "}
              {mockProfile.cashapp ? mockProfile.cashapp : "Not provided"}
            </li>
          </ul>
        </section>

        {/* Update Profile Button */}
        <div className="mt-6 text-center">
          <button className="px-8 py-4 bg-teal-500 text-white text-lg font-semibold rounded-lg shadow-xl hover:bg-teal-600 transition duration-300">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
}