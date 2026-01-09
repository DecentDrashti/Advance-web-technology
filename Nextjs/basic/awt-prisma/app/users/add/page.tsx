import { AddUserAction } from '@/app/action/AddUserAction';
import React from 'react';

export default function AddUser() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-6">
      
      {/* Glass Card */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 w-full max-w-md p-8">
        
        {/* Header */}
        <h1 className="text-3xl font-extrabold text-indigo-700 text-center">
          Add New User
        </h1>
        <p className="text-slate-600 mt-2 text-center mb-6">
          Fill in the details below to create a new user
        </p>

        {/* Form */}
        <form action={AddUserAction} className="space-y-4">
          
          <div>
            <label htmlFor="UserName" className="block text-sm font-medium text-slate-700 mb-1">
              Username
            </label>
            <input type="text" name="UserName" id="UserName" placeholder="Enter username"className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition" required/>
          </div>

          <div>
            <label htmlFor="Password" className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <input type="password"
              name="Password"
              id="Password"
              placeholder="Enter password"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-full bg-green-500 text-white font-medium hover:bg-green-600 transition mt-4"
          >
            Add User
          </button>
        </form>

        {/* Optional: Back to Dashboard */}
        <div className="text-center mt-6">
          <a
            href="/users"
            className="text-indigo-600 hover:underline font-medium"
          >
            ← Back to User Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}
