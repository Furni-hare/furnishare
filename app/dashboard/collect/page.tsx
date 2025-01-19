import React from "react";
import Navbar from "@/app/ui/navbar";

// Mock database or API response for item listings
const allListings = [
    { id: 1, title: "Wooden Chair" }, // Example listing: Wooden Chair
    { id: 2, title: "Glass Coffee Table" }, // Example listing: Glass Coffee Table
    { id: 3, title: "Sofa Set" }, // Example listing: Sofa Set
    { id: 4, title: "Bookshelf" }, // Example listing: Bookshelf
    { id: 5, title: "Dining Table" }, // Example listing: Dining Table
    { id: 6, title: "Office Chair" }, // Example listing: Office Chair
    { id: 7, title: "TV Stand" }, // Example listing: TV Stand
  ];
  
  // Utility function for filtering listings
  function filterListings(query: string, radius: number) {
    // For now, this function only filters by title (case-insensitive)
    return allListings.filter((listing) =>
      listing.title.toLowerCase().includes(query.toLowerCase())
    );
  }
  
  export default async function CollectPage({ searchParams }: any) {
    // Extract the search query from the URL parameters
    const searchQuery = searchParams?.query || ""; // Default to an empty string if no query is provided
  
    // Extract and parse the radius from the URL parameters, defaulting to 10 miles if not specified
    const radius = parseInt(searchParams?.radius || "10", 10);
  
    // Filter listings based on the search query and radius
    const filteredListings = filterListings(searchQuery, radius);
  
    return (
      <div className="min-h-screen bg-gradient-to-r from-gray-900 via-blue-800 to-black p-8 text-white">
        {/* Top Navigation Bar */}
        <Navbar />
  
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-8 leading-none">
          Collect Items
        </h1>
  
        {/* Search Bar Section */}
        <section className="mb-8">
          <form method="get" className="flex flex-col space-y-4">
            {/* Search Query Input */}
            <div>
              <label
                htmlFor="search-bar"
                className="block text-lg font-semibold mb-2"
              >
                Search for specific items:
              </label>
              <input
                id="search-bar"
                name="query"
                type="text"
                placeholder="Search by keywords (e.g., 'chair', 'sofa')"
                defaultValue={searchQuery} // Pre-fill the search bar with the current query
                className="w-full p-4 bg-gray-800 text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
  
            {/* Search Radius Slider */}
            <div>
              <label
                htmlFor="range-slider"
                className="block text-lg font-semibold mb-2"
              >
                Search Radius: <span className="text-teal-400">{radius} miles</span>
              </label>
              <input
                id="range-slider"
                name="radius"
                type="range"
                min="1" // Minimum radius is 1 mile
                max="50" // Maximum radius is 50 miles
                defaultValue={radius} // Pre-fill the slider with the current radius
                className="w-full accent-teal-500 range-slider"
              />
            </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition duration-300"
            >
              Apply Filters
            </button>
          </form>
        </section>
  
        {/* Listings Section */}
        <section>
          {/* Section Title */}
          <h2 className="text-3xl font-semibold mb-6">
            {searchQuery
              ? `Results for "${searchQuery}"` // Show results for the query if provided
              : "Recent Postings in Your Area"} {/* Default message when no query is provided */}
          </h2>
  
          {/* Listings Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Check if there are filtered listings */}
            {filteredListings.length > 0 ? (
              // Render a card for each filtered listing
              filteredListings.map((listing) => (
                <div
                  key={listing.id} // Unique key for each item
                  className="p-6 bg-gray-800 rounded-lg shadow-xl flex flex-col items-center justify-center"
                >
                  {/* Placeholder for an image */}
                  <div className="w-24 h-24 bg-gray-600 rounded-md mb-4"></div>
                  {/* Listing Title */}
                  <h3 className="text-lg font-bold text-white">{listing.title}</h3>
                </div>
              ))
            ) : (
              // Message to display when no listings match the query
              <p className="text-lg text-gray-400 col-span-full text-center">
                No listings match your search.
              </p>
            )}
          </div>
        </section>
      </div>
    );
  }