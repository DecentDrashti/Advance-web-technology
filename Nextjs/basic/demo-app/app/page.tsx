export default async function Home() {
  const api=await fetch('http://localhost:5059/api/AdminApi');
  // const api=await fetch('https://6943a53269b12460f3156c83.mockapi.io/demo/student');
  const data=await api.json();  
  console.log(data);
  return (
   <>
    <h1 className="text-4xl">Lets have get all by .net data of api</h1>
    <table className="table-auto border-collapse border border-slate-400 ">
      <thead>
        <tr>
          <th className="border border-slate-300 ">ID</th>
          <th className="border border-slate-300 ">Name</th>
        </tr>
      </thead>
      <tbody className="tbody">
        <tr>
        </tr>
        {data.map((item: { adminId: number; fullName: string })=>(
          <tr key={item.adminId}>
            <td className="border border-slate-300 ">{item.adminId}</td>
            <td className="border border-slate-300 ">{item.fullName}</td>
        </tr>
        ))}
      </tbody>
       {/* <thead>
        <tr>
          <th className="border border-slate-300 ">ID</th>
          <th className="border border-slate-300 ">Name</th>
          </tr>
          </thead>
      <tbody>
        {data.map((item: { id: number; name: string })=>(
          <tr key={item.id}>
            <td className="border border-slate-300 ">{item.id}</td>
            <td className="border border-slate-300 ">{item.name}</td>
          </tr>
        ))}
      </tbody>  */}
    </table>   
  </>
  );
} 
//mysql 
// import { Types } from "mongoose";

// type students = {
//   ID: number;
//   Name: string;
//   Email: string;
//   Age: number;
// };

// export default async function Home() {
//   const res = await fetch("http://localhost:3000/api/student");
//   const data = await res.json();
//   const User: students[] = await data.students;
//   console.log(User);
//   return (
//     <div>
//       <h1>Students List</h1>

//       {User.length === 0 ? (
//         <p>No students found</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
//           {User.map((i) => (
//             <div
//               key={i.ID}
//               className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow"
//             >
//               <h2 className="text-xl font-semibold text-gray-800 mb-2">{i.Name}</h2>
//               <p className="text-gray-600"><span className="font-medium">ID:</span> {i.ID}</p>
//               <p className="text-gray-600"><span className="font-medium">Email:</span> {i.Email}</p>
//               <p className="text-gray-600"><span className="font-medium">Age:</span> {i.Age}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }



 
// export default async function Home() { 
//     const data = await prisma.students.findMany();
//      console.log("Hello Prisma");
//      console.log(data);
//   return ( 
//     <div>  <h1>Hello</h1>
        {/* <ul> 
      { 
        data.map((u:students)=>( 
            <li key={u.ID}>{u.Name}</li> 
        )) 
      } 
      </ul>  */}
  //   </div> 
  // )}


    // <>
    //   {/* Background Section */}
    //   <div
    //     className="min-h-screen bg-cover bg-center flex items-center justify-center p-6">
    //     <div className="bg-white/20 backdrop-blur-xl p-10 rounded-2xl shadow-xl max-w-3xl text-white">
    //       {/* Heading */}
    //       <h1 className="text-4xl font-bold text-center mb-4 text-red-300 underline">
    //         Welcome to Lorem Ipsum!
    //       </h1>

    //       {/* Paragraph 1 */}
    //       <p className="leading-relaxed mb-4">
    //         In the world of web development and design, creating aesthetically 
    //         pleasing and functional layouts often requires the use of 
    //         placeholder text. One of the most commonly used forms of filler 
    //         text is Lorem Ipsum—a set of scrambled, Latin-like words that have 
    //         no real meaning. It helps designers focus on visual elements 
    //         without being distracted by actual content.
    //         <br /><br />
    //         Today, automation plays a huge role in improving efficiency. 
    //         Instead of manually generating text, developers now use 
    //         Lorem Ipsum JSON APIs to fetch structured placeholder text 
    //         instantly. It allows teams to experiment, test, and build layouts 
    //         quickly—all with a simple API request.
    //       </p>

    //       {/* Image */}
    //       <img
    //         src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg"
    //         alt="Lorem Ipsum"
    //         className="rounded-xl my-6 shadow-lg w-full"
    //       />

    //       {/* Subheading */}
    //       <h2 className="text-3xl font-bold text-red-300 underline mb-3">
    //         Let's Get Into the History
    //       </h2>

    //       {/* Paragraph 2 */}
    //       <p className="leading-relaxed">
    //         The text originates from a work by the Roman philosopher Cicero, 
    //         titled “De Finibus Bonorum et Malorum” (The Extremes of Good and 
    //         Evil), written in 45 BC. Over centuries, the original Latin text 
    //         was altered and jumbled to form what we now know as Lorem Ipsum. 
    //         Its primary purpose is not meaning, but resemblance to natural 
    //         language—allowing designers to create realistic mockups without 
    //         real content.
    //       </p>
    //     </div>
    //   </div>
    // </>
//   );
// }
