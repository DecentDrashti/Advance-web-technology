// "use client";

// import Link from "next/link";

type User={
    id:string;
    name:string;
    emailaddress:string;
}
export default async function UserPage({params}:{params:{id:string}}){
    const {id}=await params;
    const api=await fetch(`https://6943a53269b12460f3156c83.mockapi.io/demo/student/${id}`);
    if(!api.ok){
        throw new Error('Failed to fetch user data');
    }
    const data:User=await api.json();
    return(

        <div className="min-h-screen w-full bg-cover bg-center p-10">
      {/* Glass Container */}
      <div className="backdrop-blur-lg bg-gray/10 rounded-3xl p-8 shadow-2xl border border-white/20 max-w-xl mx-auto">

        <h1 className="text-4xl font-bold text-white drop-shadow-lg mb-6">
          User Details
        </h1>
        
        {/* Back Button */}
         {/* <Link
            href="/user"
            className="px-4 py-2 rounded-xl bg-purple-600/80 hover:bg-purple-700 text-white font-semibold
                       shadow-lg hover:shadow-purple-700/40 transition-all duration-300"
          >
            ← Back
          </Link>
        */}

        {/* Details Card */}
        <div className="space-y-4 text-white text-lg">
          <div className="flex justify-between border-b border-white/20 pb-2">
            <span className="font-semibold text-purple-300">ID</span>
            <span>{data.id}</span>
          </div>

          <div className="flex justify-between border-b border-white/20 pb-2">
            <span className="font-semibold text-purple-300">Name</span>
            <span>{data.name}</span>
          </div>

          <div className="flex justify-between border-b border-white/20 pb-2">
            <span className="font-semibold text-purple-300">Email</span>
            <span>{data.emailaddress}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
// }
//         <>
//         <h1 className="text-4xl">User Details</h1>
//         <div className="mt-4 p-4 border border-slate-400 rounded-lg">
//             <p><span className="font-semibold">ID:</span> {data.id}</p>
//             <p><span className="font-semibold">Name:</span> {data.name}</p>
//             <p><span className="font-semibold">Email:</span> {data.emailaddress}</p>
//         </div>
//         </>
//     )
// }