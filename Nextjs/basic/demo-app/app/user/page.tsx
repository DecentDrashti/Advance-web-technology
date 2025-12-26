import Link from "next/link";

export default async function user() {
  const api=await fetch('https://6943a53269b12460f3156c83.mockapi.io/demo/student');
  const data=await api.json();
  
//   console.log(data);
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center p-10">
      {/* Glass container */}
      <div className="backdrop-blur-lg bg-gray/10 rounded-3xl p-8 shadow-2xl border border-white/20 max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-gray-900 drop-shadow-lg mb-6">
          Get All Users (Mock API)
        </h1>

        <div className="overflow-hidden rounded-xl border border-white/20">
          <table className="min-w-full bg-gray/10 backdrop-blur-lg text-white">
            <thead className="bg-grey/20">
              <tr>
                <th className="py-3 px-6 text-left text-purple-300 font-semibold border-b border-white/20">
                  ID
                </th>
                <th className="py-3 px-6 text-left text-purple-300 font-semibold border-b border-white/20">
                  Name
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((student: any) => (
                <tr
                  key={student.id}
                  className="hover:bg-white/20 transition-all duration-200"
                >
                  <Link
                      href={`/user/${student.id}`}
                      className="text-white hover:text-purple-200"
                    >
                  <td className="py-3 px-6 border-b border-white/10">
                    
                      {student.id}
                    
                  </td>
                  <td className="py-3 px-6 border-b border-white/10">
                    {student.name}
                  </td>
                  </Link>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
  //  <>
  //   <h1 className="text-4xl">Lets have get all by id data of mock api</h1>
  //   <table className="table-auto border-collapse border border-slate-400 ">
  //     <thead>
  //       <tr>
  //         <th className="border border-slate-300 ">ID</th>
  //         <th className="border border-slate-300 ">Name</th>
  //       </tr>
  //     </thead>
  //     <tbody className="tbody">
  //       <tr>
  //       </tr>
  //       {data.map((student:any)=>(
  //         <tr key={student.id}>
  //           <td className="border border-slate-300 "><Link href={`/user/${student.id}`}>{student.id}</Link></td>
  //           <td className="border border-slate-300 ">{student.name}</td>
  //       </tr>
  //       ))}
  //     </tbody>
  //     </table>

   
  //  </>
  // )};