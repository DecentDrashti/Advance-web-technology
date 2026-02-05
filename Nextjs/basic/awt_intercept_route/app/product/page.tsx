import Link from "next/link";

export default async function product() {
//   const api=await fetch('https://6943a53269b12460f3156c83.mockapi.io/demo/student');
//   const data=await api.json();
  
//   console.log(data);
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center p-10">
      {/* Glass container */}
      <div className="backdrop-blur-lg bg-gray/10 rounded-3xl p-8 shadow-2xl border border-white/20 max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-gray-900 drop-shadow-lg mb-6">
          Get All Product (Mock API)
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
                <th className="py-3 px-6 text-left text-purple-300 font-semibold border-b border-white/20">
                    Actions
                </th>
              </tr>
            </thead>

            <tbody>
                <tr>
                  <td className="py-3 px-6 border-b border-white/10 text-gray-900">
                    1
                  </td>
                  <td className="py-3 px-6 border-b border-white/10 text-gray-900">
                    Product 1
                  </td>
                   <td>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 text-sm font-medium transition">
                      <Link href={`/product/${1}`}>View Details</Link>
                    </button>
                    <button className="ml-2 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 text-sm font-medium transition">
                      Delete
                    </button>
                    <button className="ml-2 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 text-sm font-medium transition">
                      Edit
                    </button>

                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-6 border-b border-white/10 text-gray-900">
                    2
                  </td>
                  <td className="py-3 px-6 border-b border-white/10 text-gray-900">
                    Product 2
                  </td>
                  <td>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 text-sm font-medium transition">
                     <Link href={`/product/${2}`}>View Details</Link>
                    </button>
                    <button className="ml-2 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 text-sm font-medium transition">
                      Delete
                    </button>
                    <button className="ml-2 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 text-sm font-medium transition">
                      Edit
                    </button>

                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-6 border-b border-white/10 text-gray-900">
                    3
                  </td>
                  <td className="py-3 px-6 border-b border-white/10 text-gray-900">
                    Product 3
                  </td>
                   <td>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 text-sm font-medium transition">
                      <Link href={`/product/${3}`}>View Details</Link>
                    </button>
                    <button className="ml-2 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 text-sm font-medium transition">
                      Delete
                    </button>
                    <button className="ml-2 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 text-sm font-medium transition">
                      Edit
                    </button>

                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-6 border-b border-white/10 text-gray-900">
                    4
                  </td>
                  <td className="py-3 px-6 border-b border-white/10 text-gray-900">
                    Product 4
                  </td>
                   <td>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 text-sm font-medium transition">
                      <Link href={`/product/${4}`}>View Details</Link>
                    </button>
                    <button className="ml-2 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 text-sm font-medium transition">
                      Delete
                    </button>
                    <button className="ml-2 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 text-sm font-medium transition">
                      Edit
                    </button>

                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-6 border-b border-white/10 text-gray-900">
                    5
                  </td>
                  <td className="py-3 px-6 border-b border-white/10 text-gray-900">
                    Product 5
                  </td>
                   <td>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 text-sm font-medium transition">
                      <Link href={`/product/${5}`}>View Details</Link>
                    </button>
                    <button className="ml-2 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 text-sm font-medium transition">
                      Delete
                    </button>
                    <button className="ml-2 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 text-sm font-medium transition">
                      Edit
                    </button>

                  </td>
                </tr>
            
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