export default async function introduction() {
  const api=await fetch('https://6943a53269b12460f3156c83.mockapi.io/demo/student');
  const data=await api.json();
  console.log(data);
  return (
   <>
    <h1 className="text-4xl">Lets have data of mock api</h1>
    <table className="table-auto border-collapse border border-slate-400 ...">
      <thead>
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
      </tbody>
          </table>

   
   </>
  );
}