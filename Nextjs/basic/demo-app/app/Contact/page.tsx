import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center p-10"
    >
      {/* Glass Container */}
      <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20 max-w-4xl mx-auto">

        <h1 className="text-4xl font-semibold text-purple-300 underline mb-6 text-center">
          Contact Lorem Ipsum
        </h1>

        {/* Section 1 */}
        <h2 className="text-3xl font-semibold text-purple-300 mb-3">
          A Quick Example of Lorem Ipsum Text
        </h2>

        <p className="leading-relaxed mb-6">
          Here’s a classic example of the Lorem Ipsum text:
          <br /><br />
          <span className="italic text-gray-200">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </span>
          <br /><br />
          Though it may look like gibberish, this text is structured similarly
          to a normal paragraph, making it an excellent tool for design
          purposes. It maintains the length and visual flow that real text
          would, making it a useful placeholder for layout testing.
        </p>

        {/* Section 2 */}
        <h2 className="text-3xl font-semibold text-purple-300 mb-3">
          Contact Us
        </h2>

        <p className="mb-4">
          If you have any questions or would like to learn more about our
          services, please feel free to reach out to us:
        </p>

        {/* Contact Info */}
        <div className="space-y-2">
          <p>
            <span className="font-semibold text-purple-300">Email:</span>{" "}
            <a
              href="mailto:abc@gmail.com"
              className="underline hover:text-purple-200"
            >
              abc@gmail.com
            </a>
          </p>

          <p>
            <span className="font-semibold text-purple-300">Phone:</span>{" "}
            <a
              href="tel:+1234567890"
              className="underline hover:text-purple-200"
            >
              +1234567890
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}