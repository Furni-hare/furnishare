import Link from "next/link";

export default function SignUp() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 via-purple-800 to-black text-white">
      {/* Sign Up Form */}
      <main className="w-full max-w-2xl bg-gray-800 p-16 rounded-lg shadow-lg mt-32 mb-32">
        <h1 className="text-5xl font-bold text-center mb-10">Sign Up</h1>

        <form action="#" method="post" className="space-y-10">
          {/* Full Name */}
          <div>
            <label htmlFor="full-name" className="block text-xl font-medium text-gray-300 mb-4">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="full-name"
              name="fullName"
              required
              className="w-full px-6 py-4 text-xl text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>

          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-xl font-medium text-gray-300 mb-4">
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="w-full px-6 py-4 text-xl text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter a username"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-xl font-medium text-gray-300 mb-4">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-6 py-4 text-xl text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter a password"
            />
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block text-xl font-medium text-gray-300 mb-4">
              Location (City) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              required
              className="w-full px-6 py-4 text-xl text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your city"
            />
          </div>

          {/* Payment Information */}
          <fieldset className="space-y-6">
            <legend className="text-xl font-medium text-gray-300">Payment Information (Optional)</legend>

            {/* Venmo */}
            <div>
              <label htmlFor="venmo" className="block text-lg text-gray-300 mb-2">
                Venmo Username
              </label>
              <input
                type="text"
                id="venmo"
                name="venmo"
                className="w-full px-6 py-4 text-lg text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your Venmo username"
              />
            </div>

            {/* CashApp */}
            <div>
              <label htmlFor="cashapp" className="block text-lg text-gray-300 mb-2">
                CashApp Username
              </label>
              <input
                type="text"
                id="cashapp"
                name="cashapp"
                className="w-full px-6 py-4 text-lg text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your CashApp username"
              />
            </div>
          </fieldset>

          <button
            type="submit"
            className="w-full py-5 bg-blue-500 text-xl font-bold text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-xl text-gray-300 mt-10">
          Already have an account?{' '}
          <Link href="/login/signIn" className="text-blue-400 hover:underline">
            Sign in
          </Link>
        </p>
      </main>
    </div>
  );
}
