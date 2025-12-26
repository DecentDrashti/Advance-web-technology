export default function About() {
   return (
    <div
      className="min-h-screen w-full bg-cover bg-center p-10"
    >
      {/* Glass Container */}
      <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20 max-w-4xl mx-auto text-white">

        <h1 className="text-4xl font-bold text-red-300 underline mb-6 text-center">
          About Lorem Ipsum
        </h1>

        {/* Image */}
        <img
          src="https://tse2.mm.bing.net/th/id/OIP.Lhj7TBKW6seJr-BYO90--QHaFj?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Lorem Ipsum"
          className="w-full max-w-xl mx-auto rounded-2xl shadow-lg mb-6"
        />

        {/* Content */}
        <p className="leading-relaxed space-y-4">
          <span className="block">
            <span className="font-semibold text-purple-300">
              Why do designers and developers use Lorem Ipsum?
            </span>
            <br />
            Lorem Ipsum serves several important functions, especially when it
            comes to design mockups and prototyping.
          </span>

          <span className="block">
            <span className="font-semibold text-purple-300">
              Focus on visual elements:
            </span>
            <br />
            By using placeholder text, designers and developers can focus on the
            overall design of the layout without worrying about the specific
            content. This allows them to evaluate typography, spacing, and text
            alignment.
          </span>

          <span className="block">
            <span className="font-semibold text-purple-300">
              Consistency:
            </span>
            <br />
            Lorem Ipsum mimics the structure of normal text, providing a
            consistent placeholder for headings, paragraphs, and bullet points.
          </span>

          <span className="block">
            <span className="font-semibold text-purple-300">
              Avoid distractions:
            </span>
            <br />
            Meaningful content can distract designers during layout creation.
            Lorem Ipsum prevents this by offering neutral text that doesn’t
            interfere with the design process.
          </span>
        </p>

      </div>
    </div>
  );
}