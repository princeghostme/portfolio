import React from "react";
import { Zap, Target, Lightbulb } from "lucide-react";

const KeyStrengths: React.FC = () => {
  const strengths = [
    {
      title: "Full Stack Development",
      description: "Frontend + Backend expertise",
      icon: Zap,
      items: ["React & Angular", "ASP.NET Core", "Node.js", "TypeScript"],
    },
    {
      title: "Microservices & System Design",
      description: "Scalable architecture fundamentals",
      icon: Target,
      items: ["Microservices", "Event-Driven Systems", "CQRS Pattern", "API Gateway"],
    },
    {
      title: "Performance Optimization",
      description: "20-30% improvement in production",
      icon: Lightbulb,
      items: ["Query Optimization", "Caching Strategies", "Real-time Systems", "High Concurrency"],
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Key Strengths</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {strengths.map((strength, index) => {
          const Icon = strength.icon;
          return (
            <div
              key={index}
              className="p-6 rounded-lg border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all bg-gradient-to-br from-purple-50 to-white"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-purple-500 rounded-lg mr-3">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{strength.title}</h3>
                  <p className="text-xs text-gray-600">{strength.description}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {strength.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
        <h3 className="font-semibold text-gray-900 mb-3">Additional Expertise</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Problem Solving",
            "Continuous Learning",
            "AI/ML Integration",
            "Cloud Architecture",
            "DevOps",
            "System Design",
            "Team Collaboration",
            "Mentoring",
          ].map((skill, idx) => (
            <span
              key={idx}
              className="inline-block px-3 py-1.5 bg-white text-purple-700 rounded-full text-sm font-medium border border-purple-200 hover:border-purple-500 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyStrengths;
