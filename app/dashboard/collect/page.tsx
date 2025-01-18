import React from "react";

// Mock database or API response
const allListings = [
    { id: 1, title: "Wooden Chair" },
    { id: 2, title: "Glass Coffee Table" },
    { id: 3, title: "Sofa Set" },
    { id: 4, title: "Bookshelf" },
    { id: 5, title: "Dining Table" },
    { id: 6, title: "Office Chair" },
    { id: 7, title: "TV Stand" },
  ];
  
  // Utility function for filtering listings
  function filterListings(query: string, radius: number) {
    // Placeholder: Only filters by title in this example
    return allListings.filter((listing) =>
      listing.title.toLowerCase().includes(query.toLowerCase())
    );
  }
  
  export default async function CollectPage({ searchParams }: any) {
    const searchQuery = searchParams?.query || ""; // Extract search query
    const radius = parseInt(searchParams?.radius || "10", 10); // Default radius
  
    const filteredListings = filterListings(searchQuery, radius); // Filter listings server-side
  
    return (
      <div className="min-h-screen bg-gradient-to-r from-gray-900 via-blue-800 to-black p-8 text-white">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-8 leading-none">
          Collect Items
        </h1>
  
        {/* Search Bar */}
        <section className="mb-8">
          <form method="get" className="flex flex-col space-y-4">
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
                defaultValue={searchQuery}
                className="w-full p-4 bg-gray-800 text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
  
            {/* Range Slider */}
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
                    min="1"
                    max="50"
                    defaultValue={radius}
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
  
        {/* Listings */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">
            {searchQuery
              ? `Results for "${searchQuery}"`
              : "Recent Postings in Your Area"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredListings.length > 0 ? (
              filteredListings.map((listing) => (
                <div
                  key={listing.id}
                  className="p-6 bg-gray-800 rounded-lg shadow-xl flex flex-col items-center justify-center"
                >
                  <div className="w-24 h-24 bg-gray-600 rounded-md mb-4"></div>
                  <h3 className="text-lg font-bold text-white">{listing.title}</h3>
                </div>
              ))
            ) : (
              <p className="text-lg text-gray-400 col-span-full text-center">
                No listings match your search.
              </p>
            )}
          </div>
        </section>
      </div>
    );
  }