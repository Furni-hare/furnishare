{/*import TopBar from "@/components/TopBar";*/}
export default function Home() {
    const mockListings = [
      { id: 1, name: "Wooden Chair" },
      { id: 2, name: "Glass Coffee Table" },
    ];
  
    const mockCollections = [
      { id: 1, name: "Vintage Lamp" },
      { id: 2, name: "Bookshelf" },
    ];
  
    const mockRadius = 10; // Default mile radius (static for now)
  
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-900 via-purple-800 to-black p-8 text-white">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-12">
          Welcome to FurniShare
        </h1>
  
        {/* Current Listings */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Your Current Listings</h2>
          {mockListings.length > 0 ? (
            <ul className="space-y-4">
              {mockListings.map((listing) => (
                <li
                  key={listing.id}
                  className="p-6 bg-gray-800 rounded-lg shadow-xl hover:scale-105 transform transition duration-300"
                >
                  {listing.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-300">You have no current listings.</p>
          )}
        </section>
  
        {/* Past Collections */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Your Past Collections</h2>
          {mockCollections.length > 0 ? (
            <ul className="space-y-4">
              {mockCollections.map((collection) => (
                <li
                  key={collection.id}
                  className="p-6 bg-gray-800 rounded-lg shadow-xl hover:scale-105 transform transition duration-300"
                >
                  {collection.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-300">No past collections yet.</p>
          )}
        </section>
  
        {/* Settings */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Settings</h2>
          <div className="p-6 bg-gray-800 rounded-lg shadow-xl">
            <p className="mb-4">
              <span className="font-bold text-teal-400">Mile Radius for Postings:</span>{" "}
              {mockRadius} miles
            </p>
            <p className="text-gray-400">
              Listings beyond this radius will not appear in your feed.
            </p>
          </div>
        </section>
      </div>
    );
  }