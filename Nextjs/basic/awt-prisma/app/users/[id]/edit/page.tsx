import { prisma } from '@/app/lib/prisma';
import { UpdateUserAction } from '@/app/action/UpdateUserAction';

export default async function EditUser(
  { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const user = await prisma.users.findFirst({ where: { UserID: Number(id) } } );
// export default async function EditUser({ params }: { params: { id: string } }) {
//   const user = await prisma.users.findUnique({ // findunique is not working here findUnique() ONLY works when the field you query is marked as:
//     where: { UserID: Number(params.id) },
//   });

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-6">
      
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 w-full max-w-md p-8">
        
        <h1 className="text-3xl font-extrabold text-indigo-700 text-center">
          Edit User
        </h1>

        <form action={UpdateUserAction} className="space-y-4 mt-6">
          
          {/* Hidden ID */}
          <input type="hidden" name="UserID" value={user.UserID} />

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Username
            </label>
            <input
              type="text"
              name="UserName"
              defaultValue={user.UserName}
              className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="Password"
              defaultValue={user.Password}
              className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-full bg-yellow-500 text-white font-medium hover:bg-yellow-600 transition"
          >
            Update User
          </button>
          <div className="text-center mt-6">
          <a
            href="/users"
            className="text-indigo-600 hover:underline font-medium"
          >
            ← Back to User Dashboard
          </a>
        </div>
        </form>
      </div>
    </div>
  );
}
