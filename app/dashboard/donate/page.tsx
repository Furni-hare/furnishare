import Link from "next/link";
import React from "react";

export default function Donate() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-900 via-purple-800 to-black">
      {/* Top Navigation Bar */}
      <header className="w-full bg-gray-900 bg-opacity-90 py-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center px-6">
          {/* Navigation Links */}
          <div className="flex space-x-8">
            <Link href="/" className="text-xl text-white hover:text-blue-400">
              Furnishare
            </Link>
            <Link href="/donate" className="text-xl text-blue-500 font-bold">
              Donate
            </Link>
            <Link href="/collect" className="text-xl text-white hover:text-blue-400">
              Collect
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto flex flex-col items-center px-6 py-10">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Donate Furniture
        </h1>
        <form
          action="/api/donate" // Update this action endpoint for your backend API
          method="POST"
          encType="multipart/form-data"
          className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full space-y-6"
        >
          {/* Item Name */}
          <div>
            <label htmlFor="item-name" className="block text-gray-700 font-medium mb-2">
              Item Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="item-name"
              name="itemName"
              required
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the item's name"
            />
          </div>

          {/* Pickup Type */}
          <div>
            <label htmlFor="pickup-type" className="block text-gray-700 font-medium mb-2">
              Pickup Type <span className="text-red-500">*</span>
            </label>
            <select
              id="pickup-type"
              name="pickupType"
              required
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="roadside">Roadside Pickup</option>
              <option value="contact">Contact Owner</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block text-gray-700 font-medium mb-2">
              Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              required
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="City or Address"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label htmlFor="image-upload" className="block text-gray-700 font-medium mb-2">
              Upload Item Image
            </label>
            <input
              type="file"
              id="image-upload"
              name="image"
              accept="image/*"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Optional Description */}
          <div>
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
              Description (Optional)
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Add additional details about the item"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}