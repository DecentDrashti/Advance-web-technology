export default function WhyUs() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center p-10">
      {/* Glass Container */}
      <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-10 shadow-2xl border border-white/20 max-w-6xl mx-auto text-white">

        {/* Heading */}
        <h2 className="text-5xl sm:text-7xl font-semibold tracking-tight text-red-300 underline mb-6">
          Why Work With Us?
        </h2>

        <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-3xl">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
        </p>

        {/* Links */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:flex gap-6 text-md font-semibold">
          {[
            "Open roles",
            "Internship program", 
            "Our values",
            "Meet our leadership",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-purple-300 "
            >
              {item} <span aria-hidden="true">→</span>
            </a>
          ))}
        </div>

        {/* Stats */}
        <dl className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            { label: "Offices worldwide", value: "12" },
            { label: "Full-time colleagues", value: "300+" },
            { label: "Hours per week", value: "40" },
            { label: "Paid time off", value: "Unlimited" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:scale-105 transition"
            >
              <dd className="text-4xl font-bold text-purple-300">
                {stat.value}
              </dd>
              <dt className="mt-2 text-gray-300">{stat.label}</dt>
            </div>
          ))}
        </dl>

      </div>
    </div>
  );
}
