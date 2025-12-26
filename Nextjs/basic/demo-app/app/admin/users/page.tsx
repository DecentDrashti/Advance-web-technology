"use client";

export default function Users() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center p-10">
      {/* Glass container */}
      <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20">

        <h1 className="text-4xl font-bold text-white drop-shadow-lg mb-6">
          Manage Users in Admin Panel
        </h1>

        <div className="overflow-hidden rounded-xl border border-white/20 shadow-xl">
          <table className="min-w-full backdrop-blur-lg bg-white/10 text-white">
            <thead className="bg-white/20">
              <tr>
                <th className="py-3 px-4 text-left font-semibold border-b border-white/20">
                  ID
                </th>
                <th className="py-3 px-4 text-left font-semibold border-b border-white/20">
                  Name
                </th>
                <th className="py-3 px-4 text-left font-semibold border-b border-white/20">
                  Email Address
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="hover:bg-white/20 transition">
                <td className="py-3 px-4 border-b border-white/10">1</td>
                <td className="py-3 px-4 border-b border-white/10">John Doe</td>
                <td className="py-3 px-4 border-b border-white/10">JohnDoe@gmail.com</td>
              </tr>

              <tr className="hover:bg-white/20 transition">
                <td className="py-3 px-4 border-b border-white/10">2</td>
                <td className="py-3 px-4 border-b border-white/10">Jane Smith</td>
                <td className="py-3 px-4 border-b border-white/10">janesmith@gmail.com</td>
              </tr>

              <tr className="hover:bg-white/20 transition">
                <td className="py-3 px-4 border-b border-white/10">3</td>
                <td className="py-3 px-4 border-b border-white/10">Alice Johnson</td>
                <td className="py-3 px-4 border-b border-white/10">alice@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}