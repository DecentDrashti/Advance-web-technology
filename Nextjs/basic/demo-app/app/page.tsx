// export default async function introduction() {
//   const api=await fetch('https://6943a53269b12460f3156c83.mockapi.io/demo/student');
//   const data=await api.json();
  
//   console.log(data);
//   return (
//    <>
//     <h1 className="text-4xl">Lets have get all by id data of mock api</h1>
//     <table className="table-auto border-collapse border border-slate-400 ">
//       <thead>
//         <tr>
//           <th className="border border-slate-300 ">ID</th>
//           <th className="border border-slate-300 ">Name</th>
//         </tr>
//       </thead>
//       <tbody className="tbody">
//         <tr>
//         </tr>
//         {data.map((item: { id: number; name: string })=>(
//           <tr key={item.id}>
//             <td className="border border-slate-300 ">{item.id}</td>
//             <td className="border border-slate-300 ">{item.name}</td>
//         </tr>
//         ))}
//       </tbody>
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
      </tbody> */}
      
type User = {
  id: number;
  name: string;
  email: string;
};

export default async function Home() {
  const res = await fetch("http://localhost:3000/demo", {
    cache: "no-store",
  });

  console.log(res.json());
  const data: User[] = (await res.json());
  // console.log(data);

  return (
    <div style={{ padding: "20px" }}>
      <h1>User List</h1>

      {data.length === 0 ? (
        <p>No users found</p>
      ) : (
        <table border={1} cellPadding={10} cellSpacing={0}>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
            </tr>
          </thead>

          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}



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
