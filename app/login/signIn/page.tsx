import Link from "next/link";

export default function SignIn() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 via-purple-800 to-black text-white">
      {/* Sign In Form */}
      <main className="w-full max-w-2xl bg-gray-800 p-16 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold text-center mb-10">Sign In</h1>

        <form action="#" method="post" className="space-y-10">
          <div>
            <label htmlFor="email" className="block text-xl font-medium text-gray-300 mb-4">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-6 py-4 text-xl text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-xl font-medium text-gray-300 mb-4">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-6 py-4 text-xl text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-between items-center">
            <div>
              <label className="flex items-center text-xl text-gray-300">
                <input
                  type="checkbox"
                  className="mr-3 text-blue-500 focus:ring-2 focus:ring-blue-500"
                />
                Remember me
              </label>
            </div>
            <Link href="#" className="text-xl text-blue-400 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-5 bg-blue-500 text-xl font-bold text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-xl text-gray-300 mt-10">
          Don’t have an account?{' '}
          <Link href="/signup" className="text-blue-400 hover:underline">
            Sign up
          </Link>
        </p>
      </main>
    </div>
  );
}
