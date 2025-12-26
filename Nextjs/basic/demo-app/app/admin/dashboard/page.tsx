"use client";

export default function Dashboard() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center p-10">
      {/* Glass container to keep content readable */}
      <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20">

        <h1 className="text-4xl font-bold text-gray-900 drop-shadow-lg">
          Welcome to Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">

          {/* USER STATS */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300">
            <h2 className="text-xl font-semibold text-white mb-3">User Statistics</h2>
            <p className="text-gray-200">
              Total Users: <span className="font-semibold text-white">1,234</span>
            </p>
            <p className="text-gray-200">
              Active Users: <span className="font-semibold text-white">567</span>
            </p>
          </div>

          {/* SALES OVERVIEW */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300">
            <h2 className="text-xl font-semibold text-white mb-3">Sales Overview</h2>
            <p className="text-gray-200">
              Total Sales: <span className="font-semibold text-white">$45,678</span>
            </p>
            <p className="text-gray-200">
              Monthly Growth: <span className="font-semibold text-white">12%</span>
            </p>
          </div>

          {/* SERVER STATUS */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300">
            <h2 className="text-xl font-semibold text-white mb-3">Server Status</h2>
            <p className="text-gray-200">
              Uptime: <span className="font-semibold text-white">99.9%</span>
            </p>
            <p className="text-gray-200">
              Response Time: <span className="font-semibold text-white">200ms</span>
            </p>
          </div>

          {/* RECENT ACTIVITIES */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300">
            <h2 className="text-xl font-semibold text-white mb-3">Recent Activities</h2>
            <ul className="list-disc list-inside text-gray-200 space-y-1">
              <li>User JohnDoe signed up.</li>
              <li>Order #1234 has been shipped.</li>
              <li>New blog post published.</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
