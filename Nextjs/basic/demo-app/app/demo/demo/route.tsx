import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const pool = await connectDB();

    const result = await pool
      .request()
      .query("SELECT * FROM demo");

    // ✅ ALWAYS return array
    return NextResponse.json(result.recordset || []);
  } catch (error: any) {
    console.error(error);

    // ✅ EVEN on error, return array
    return NextResponse.json([], { status: 500 });
  }
}



// import sql from "mssql";
// import { connectDB } from "@/lib/db";
// type demo={
//     id:string;
//     name:string;
//     email:string;
// }

// export default async function user() {
// //   const api=await fetch('https://6943a53269b12460f3156c83.mockapi.io/demo/student');
// //   const data=await api.json();
//     const result = await sql.query`
//       SELECT * FROM demo`;

//     const data = result.recordset;
  
// //   console.log(data);
//   return (
//     <div
//       className="min-h-screen w-full bg-cover bg-center p-10">
//       {/* Glass container */}
//       <div className="backdrop-blur-lg bg-gray/10 rounded-3xl p-8 shadow-2xl border border-white/20 max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold text-gray-900 drop-shadow-lg mb-6">
//             Get All Users (From SQL Server)
//         </h1>
//         <div className="overflow-hidden rounded-xl border border-white/20">
//             <table className="min-w-full bg-gray/10 backdrop-blur-lg text-white">
//             <thead className="bg-grey/20">
//                 <tr>
//                 <th className="py-3 px-6 text-left text-purple-300 font-semibold border-b border-white/20">
//                     ID
//                 </th>
//                 <th className="py-3 px-6 text-left text-purple-300 font-semibold border-b border-white/20">
//                     Name
//                 </th>
//                 <th className="py-3 px-6 text-left text-purple-300 font-semibold border-b border-white/20">
//                     Email
//                 </th>
//                 </tr>
//             </thead>
//             </table>
//         </div>
//       </div>
//     </div>
//   );

//   }
