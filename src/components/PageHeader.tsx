import { useState } from "react";
import { RESUME } from "../AppConstraint";
import GrowthStack from "./GrowthStack";
import { FiFileText } from "react-icons/fi";

const PageHeader = () => {
  const [isCreating, setIsCreating] = useState(false);

  const createResumeOnDemand = async () => {
    try {
      setIsCreating(true);
      const response = await fetch(RESUME.PDF);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Prince_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Unable to create resume:", error);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <header className="relative text-purple-900 py-16 md:py-32 bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center z-10 relative">
        {/* Badge */}
        <div className="mb-6 inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
          4+ Years of Experience
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900">
            Senior Full Stack Developer
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-center mb-4 font-medium text-purple-800/90 max-w-3xl">
          Building <span className="font-bold text-purple-900">scalable, high-performance systems</span> that handle 10K+ concurrent users.
        </p>

        {/* Secondary description */}
        <p className="text-lg text-center mb-12 text-gray-700 max-w-4xl leading-relaxed">
          Specialized in <span className="font-semibold text-purple-700">backend engineering</span>, <span className="font-semibold text-purple-700">microservices</span>, and <span className="font-semibold text-purple-700">performance optimization</span>. I design systems using <span className="font-semibold">ASP.NET Core, Node.js, React</span>, and <span className="font-semibold">cloud-native architectures</span>.
        </p>

        {/* Timeline Component */}
        <div className="mb-14 w-full">
          <GrowthStack />
        </div>

        {/* Create Resume Button */}
        <div className="flex flex-col items-center gap-4 justify-center w-full">
          <button
            type="button"
            onClick={createResumeOnDemand}
            disabled={isCreating}
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-purple-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-70"
          >
            <FiFileText className="h-5 w-5" />
            {isCreating ? "Creating Resume..." : "Create Resume"}
          </button>

          <p className="text-sm text-gray-600 max-w-md text-center">
            Click the button to generate your resume on demand. The PDF will download automatically.
          </p>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
