import React from "react";

export default function Signup() {
  return (
    
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4">
      <div className="bg-white/20 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl w-full max-w-md border border-white/30">
        <h1 className="text-4xl font-bold text-center text-amber-200 drop-shadow-sm">
          Sanjivani Ayurvedic
        </h1>
        <h2 className="text-xl font-semibold mb-6 text-center text-white tracking-wide">
          Register Your Account
        </h2>

        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-white font-semibold mb-1">Full Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-white/70 focus:bg-white outline-none shadow-md"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-white font-semibold mb-1">Email Address</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg bg-white/70 focus:bg-white outline-none shadow-md"
              required
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-white font-semibold mb-1">Username</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-white/70 focus:bg-white outline-none shadow-md"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-white font-semibold mb-1">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded-lg bg-white/70 focus:bg-white outline-none shadow-md"
              required
            />
          </div>

          <button className="w-full bg-emerald-600 hover:bg-emerald-700 transition text-white py-3 rounded-xl font-bold shadow-lg">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}