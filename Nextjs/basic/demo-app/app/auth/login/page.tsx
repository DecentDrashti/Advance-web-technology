"use client";

export default function Login() {
  return (
    <>
      <div
        className="min-h-screen w-full bg-cover bg-center flex items-center justify-center p-5">
        {/* Glass Card */}
        <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/20 w-96">

          <h1 className="text-3xl font-bold text-center text-white drop-shadow-sm tracking-wide">
            Sanjivani Ayurvedic
          </h1>

          <h2 className="text-xl text-center text-purple-200 font-semibold mt-2 mb-6">
            Let’s Get Started
          </h2>

          <form className="space-y-5">

            {/* Email */}
            <div>
              <label className="block text-white font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-300
                           focus:bg-white/30 border border-white/20 outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-white font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                required
                className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-300
                           focus:bg-white/30 border border-white/20 outline-none"
                placeholder="Enter your password"
              />
            </div>

            {/* Login Button */}
            <button
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-xl
                         shadow-lg hover:shadow-purple-700/40 transition-all duration-300"
            >
              Login
            </button>

          </form>

        </div>
      </div>
    </>
  );
}
