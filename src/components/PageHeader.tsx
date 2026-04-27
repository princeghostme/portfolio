import { RESUME } from "../AppConstraint";
import GrowthStack from "./GrowthStack";
import { FiDownload, FiArrowRight } from "react-icons/fi";

const PageHeader = () => {
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
          Building{" "}
          <span className="font-bold text-purple-900">
            scalable, high-performance systems
          </span>{" "}
          that handle 10K+ concurrent users
        </p>
        
        {/* Secondary description */}
        <p className="text-lg text-center mb-12 text-gray-700 max-w-4xl leading-relaxed">
          Specialized in <span className="font-semibold text-purple-700">backend engineering</span>, <span className="font-semibold text-purple-700">microservices architecture</span>, and <span className="font-semibold text-purple-700">performance optimization</span>. 
          I design and develop systems using <span className="font-semibold">ASP.NET Core, Node.js, React</span>, and <span className="font-semibold">cloud technologies</span>. 
          Currently exploring <span className="font-semibold text-purple-700">AI-assisted features with RAG & LLM APIs</span>.
        </p>

        {/* Timeline Component */}
        <div className="mb-14 w-full">
          <GrowthStack />
        </div>

        {/* Enhanced Resume Button */}
        <div className="flex gap-4 justify-center w-full">
          <div>
            <a
              href={RESUME.PDF}
              download="Prince_Resume.pdf"
              className="relative flex items-center px-8 py-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="text-lg font-semibold text-purple-900 group-hover:text-purple-700 transition-colors">
                Download Resume (pdf format)
              </span>
              <div className="ml-3 flex items-center space-x-2">
                <FiDownload className="w-5 h-5 text-purple-600 group-hover:text-purple-800 transition-colors" />
                <FiArrowRight className="w-4 h-4 text-purple-600 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
              </div>
            </a>
          </div>
          <div>
            <a
              href={RESUME.DOCX}
              download="Prince_Resume.docx"
              className="relative flex items-center px-8 py-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="text-lg font-semibold text-purple-900 group-hover:text-purple-700 transition-colors">
                Download Resume (word format)
              </span>
              <div className="ml-3 flex items-center space-x-2">
                <FiDownload className="w-5 h-5 text-purple-600 group-hover:text-purple-800 transition-colors" />
                <FiArrowRight className="w-4 h-4 text-purple-600 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
