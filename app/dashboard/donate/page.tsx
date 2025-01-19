import Link from "next/link";
import React from "react";
import Navbar from "@/app/ui/navbar";

export default function Donate() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-900 via-purple-800 to-black">
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto flex flex-col items-center px-6 py-10">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Donate Furniture
        </h1>

        {/* Donation Form */}
        <form
          action="/api/donate" // Backend API endpoint to handle form submission (update as needed)
          method="POST"
          encType="multipart/form-data" // Enables uploading files with the form
          className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full space-y-6"
        >
          {/* Item Name */}
          <div>
            <label htmlFor="item-name" className="block text-gray-700 font-medium mb-2">
              Item Name <span className="text-red-500">*</span> {/* Required field indicator */}
            </label>
            <input
              type="text"
              id="item-name"
              name="itemName" // Name attribute used to access the field value on the backend
              required // Ensures the user cannot submit the form without entering this field
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the item's name" // Placeholder text inside the input field
            />
          </div>

          {/* Pickup Type */}
          <div>
            <label htmlFor="pickup-type" className="block text-gray-700 font-medium mb-2">
              Pickup Type <span className="text-red-500">*</span> {/* Required field indicator */}
            </label>
            <select
              id="pickup-type"
              name="pickupType" // Name attribute for backend data handling
              required // Ensures this field is selected before submission
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="roadside">Roadside Pickup</option> {/* Pickup option */}
              <option value="contact">Contact Owner</option> {/* Pickup option */}
            </select>
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block text-gray-700 font-medium mb-2">
              Location <span className="text-red-500">*</span> {/* Required field indicator */}
            </label>
            <input
              type="text"
              id="location"
              name="location" // Name attribute for backend data handling
              required // Ensures this field is filled before form submission
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="City or Address" // Placeholder text
            />
          </div>

          {/* Image Upload */}
          <div>
            <label htmlFor="image-upload" className="block text-gray-700 font-medium mb-2">
              Upload Item Image {/* Optional field for uploading an image */}
            </label>
            <input
              type="file" // File input for image uploads
              id="image-upload"
              name="image" // Name attribute for backend file handling
              accept="image/*" // Restricts the upload to image file types only
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Optional Description */}
          <div>
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
              Description (Optional) {/* Optional field for providing additional item details */}
            </label>
            <textarea
              id="description"
              name="description" // Name attribute for backend data handling
              rows={4} // Textarea with 4 rows for multiline input
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Add additional details about the item" // Placeholder for optional input
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit" // Submits the form
            className="w-full py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Submit {/* Button text */}
          </button>
        </form>
      </main>
    </div>
  );
}