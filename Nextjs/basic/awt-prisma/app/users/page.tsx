import { users } from '@/app/generated/prisma/browser';
import { prisma } from '@/app/lib/prisma';
import Link from 'next/link';
import DeleteButton from '@/app/ui/DeleteButton';
import React from 'react';

export default async function UserList() {
  const data = await prisma.users.findMany();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      
      {/* Header */}
      <header className="py-8 text-center">
        <h1 className="text-4xl font-extrabold text-indigo-700">
          User Dashboard
        </h1>
        <p className="text-slate-600 mt-2">
          Manage all registered users in one place
        </p>
      </header>

      {/* Card */}
      <main className="max-w-6xl mx-auto px-6 pb-10">
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-xl border border-white">
          
          {/* Card Header */}
          <div className="flex justify-between items-center px-6 py-5 border-b">
            <h2 className="text-xl font-semibold text-slate-800">
              Users
            </h2>

            {/* Add User Button */}
            <Link
              href="/users/add"
              className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 text-sm font-medium transition"
            >
              + Add User
            </Link>

            <span className="text-sm text-indigo-600 font-medium">
              Total: {data.length}
            </span>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                  <th className="px-6 py-3 text-left">ID</th>
                  <th className="px-6 py-3 text-left">Name</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>

              <tbody>
                {data.map((u: users) => (
                  <tr
                    key={u.UserID}
                    className="border-b hover:bg-indigo-50 transition"
                  >
                    <td className="px-6 py-4 font-semibold text-indigo-600">
                      {u.UserID}
                    </td>

                    <td className="px-6 py-4 text-slate-800 font-medium">
                      {u.UserName}
                    </td>

                    <td className="px-6 py-4 text-right space-x-3">
                      <Link
                        href={`/users/${u.UserID}`}
                        className="inline-block px-4 py-1.5 rounded-full bg-blue-500 text-white text-sm hover:bg-blue-600"
                      >
                        Details
                      </Link>

                      <DeleteButton id={u.UserID} />
                      <Link href={`/users/${u.UserID}/edit`}
                        className="inline-block px-4 py-1.5 rounded-full bg-yellow-500 text-white text-sm hover:bg-yellow-600">
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </main>
    </div>
  );
}
