"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [impactCount, setImpactCount] = useState(1000); // Placeholder for impacted people count

  // Simulate dynamically updating the impact count
  useEffect(() => {
    const interval = setInterval(() => {
      setImpactCount((prevCount) => prevCount + Math.floor(Math.random() * 10)); // Simulate growth
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-r from-blue-900 via-purple-800 to-black">
      {/* Header */}
      <header className="w-full z-10 mt-7">
        <nav className="container mx-auto px-4 py-5 bg-opacity-80 bg-gray-900 rounded-xl shadow-2xl flex justify-between items-center backdrop-blur-md mb-12">
          {/* Left Side: Logo */}
          <div>
            <Link href="/" className="text-4xl font-extrabold text-white hover:text-blue-400">
              FurniShare
            </Link>
          </div>

          {/* Right Side: Navigation Links */}
          <div className="flex space-x-8">
            <Link href="/signup">
              <button className="px-6 py-2 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out">
                Sign Up
              </button>
            </Link>
            <Link href="/login/signin">
              <button className="px-6 py-2 text-lg font-semibold text-blue-500 border-2 border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
                Sign In
              </button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Section */}
      <main className="flex flex-col items-center justify-center flex-grow z-10">
        <h1 className="text-6xl font-extrabold text-white mb-10 text-center">
          Donate. Collect. Share.
        </h1>
        <p className="text-3xl text-gray-300 mb-10 mt-10 text-center leading-relaxed">
          Transforming communities, one furniture piece at a time.
        </p>
        <button className="mt-5 w-64 px-12 py-6 text-4xl font-semibold text-white bg-blue-500 rounded-2xl shadow-2xl hover:bg-blue-600 transition duration-300 ease-in-out">
          Get Started
        </button>
      </main>

      {/* Impact Bar */}
      <footer className="w-full bg-gray-900 bg-opacity-80 backdrop-blur-md shadow-xl py-4 mt-10 z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">
            Impact: <span className="text-blue-400">{impactCount.toLocaleString()}</span> people have benefited from FurniShare.
          </h2>
          <div className="relative w-full bg-gray-700 h-6 rounded-full overflow-hidden">
            <div
              className="bg-blue-500 h-full rounded-full"
              style={{ width: `${Math.min((impactCount / 10000) * 100, 100)}%` }}
            ></div>
          </div>
        </div>
      </footer>
    </div>
  );
}