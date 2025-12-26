import Link from "next/link";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
<head>
<script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script>
</head>
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <nav className="relative bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img src="https://img.freepik.com/premium-vector/medical-care-health-care-icon-concept_313674-557.jpg?w=2000" alt="Sanjivani Ayurvedic" className="h-8 w-auto" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link href="/" aria-current="page" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Home</Link>
                  <Link href="/user" className="rounded-md px-3 py-2 text-sm font-medium text-white">Users</Link>
                  <Link href="/About" className="rounded-md px-3 py-2 text-sm font-medium text-white">About</Link>
                  <Link href="/Contact" className="rounded-md px-3 py-2 text-sm font-medium text-white">Contact</Link>
                  <Link href="/WhyUs" className="rounded-md px-3 py-2 text-sm font-medium text-white">Why our company?</Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Link href="/admin/dashboard" className="rounded-md px-3 py-2 text-sm font-medium text-white">Admin</Link>
              <Link href="/admin/users" className="rounded-md px-3 py-2 text-sm font-medium text-white">Users</Link>
              <button type="button" className="relative rounded-full p-1 text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                {/* <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-6">
                  <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" stroke-linecap="round" stroke-linejoin="round" />
                </svg> */}
              </button>
              <div className="relative ml-3">
                <div>
                  <Link href="/auth/login" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Login</Link>
                </div>
              </div>
              <div className="relative ml-3">
                <div>
                  <Link href="/auth/signup" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Sign Up</Link>
                </div>
            </div>
          </div>
        </div>
        </div>
      </nav>
      <div className="container mx-auto mt-4 px-4">
        <div className="grid gap-4">
          {/* <aside className="col-span-3 h-14 ">
            <div className="p-4 rounded-lg ">
              <h2 className="text-xl font-semibold mb-4">Sidebar</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/getstarted" className="text-blue-500 hover:underline">Get started</Link>
                </li>
                <li>
                  <Link href="/introduction" className="text-blue-500 hover:underline">Introduction</Link>
                </li>
              </ul>
            </div>
          </aside> */}
          <main className="">
            {/* <div className="relative isolate overflow-hidden  py-24 sm:py-32"><img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center" /> */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="text-white text-3xl  text-pretty">{children}</div>
            </div></div>
            {/* </div> */}
            </main>
        </div>
      </div>
      
    </body>
    </html>
      );
    }
    {/* //or in bootstrap
    // <div className="container">
    //   <div className="navbar navbar-expand-lg bg-body-tertiary">
    //   <div className="container-fluid ">
    //     <Link className="navbar-brand text" href="#">Navbar</Link>
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <Link className="nav-link active" aria-current="page" href="/">Home</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" href="/About">About</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" href="/Contact">Contact</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
  
    //   <div className="row">
    //   <div className="col-3">
    //     <h2>Sidebar</h2>
    //     <ul>
    //       <li><Link href="#">Get started</Link></li>
    //       <li><Link href="#">Introduction</Link></li>
    //     </ul> 
    //   </div>
    //   <div className="col-9">{children}</div>
    //   </div>
    //   </div> */}