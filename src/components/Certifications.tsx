import React from "react";
import { Award } from "lucide-react";

interface Certification {
  name: string;
  issuer: string;
  year?: string;
  id?: string;
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      name: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      year: "2024",
      id: "AZ-900",
    },
    {
      name: "ASP.NET Core Microservices",
      issuer: "Udemy",
      year: "2024",
    },
    {
      name: "Docker & Kubernetes",
      issuer: "Linux Academy",
      year: "2023",
    },
    {
      name: "OpenAI API & LangChain",
      issuer: "In Progress",
      year: "2025",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
      <div className="flex items-center mb-6">
        <Award className="w-6 h-6 text-purple-600 mr-3" />
        <h2 className="text-2xl font-semibold text-gray-800">Certifications</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="p-4 border border-purple-100 rounded-lg hover:bg-purple-50 transition-colors bg-gradient-to-br from-purple-50 to-white"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-purple-500 text-white">
                  <Award className="w-5 h-5" />
                </div>
              </div>
              <div className="ml-3 flex-1">
                <h3 className="text-sm font-bold text-gray-900">{cert.name}</h3>
                <p className="text-xs text-purple-600 font-medium mt-1">{cert.issuer}</p>
                {cert.id && (
                  <p className="text-xs text-gray-500 mt-1">
                    ID: <span className="font-mono">{cert.id}</span>
                  </p>
                )}
                {cert.year && (
                  <p className="text-xs text-gray-500 mt-1">
                    {cert.year === "In Progress" ? (
                      <span className="inline-block px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded-full">
                        In Progress
                      </span>
                    ) : (
                      `${cert.year}`
                    )}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
