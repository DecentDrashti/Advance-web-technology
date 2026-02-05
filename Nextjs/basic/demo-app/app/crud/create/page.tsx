// export default function CreatePost() {
//   return (
//     <div className="container">
//       <h3>Create Post</h3>

//       <form action="/create" method="post">
//         <div className="mb-3">
//           <label className="form-label">Title</label>
//           <input
//             name="title"
//             className="form-control"
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Body</label>
//           <textarea
//             name="body"
//             className="form-control"
//             required
//           />
//         </div>

//         <button className="btn btn-success">
//           Save
//         </button>
//       </form>
//     </div>
//   );
// }

import { AddUserAction } from '../action/AddUserAction';
import React from 'react';

export default function CreatePost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-6">
      
      {/* Glass Card */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 w-full max-w-md p-8">
        
        {/* Header */}
        <h1 className="text-3xl font-extrabold text-indigo-700 text-center">
          Add New post
        </h1>
        <p className="text-slate-600 mt-2 text-center mb-6">
          Fill in the details below to create a new post
        </p>

        {/* Form */}
        <form action={AddUserAction} className="space-y-4">
          
          <div>
            <label htmlFor="Title" className="block text-sm font-medium text-slate-700 mb-1">
              Title
            </label>
            <input type="text" name="Title" id="Title" placeholder="Enter title"className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition" required/>
          </div>

          <div>
            <label htmlFor="Body" className="block text-sm font-medium text-slate-700 mb-1">
              Body
            </label>
            <textarea
              name="Body"
              id="Body"
              placeholder="Enter body"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-full bg-green-500 text-white font-medium hover:bg-green-600 transition mt-4"
          >
            Add Post
          </button>
        </form>

        {/* Optional: Back to Dashboard */}
        <div className="text-center mt-6">
          <a
            href="/crud"
            className="text-indigo-600 hover:underline font-medium"
          >
            ← Back to User Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}

