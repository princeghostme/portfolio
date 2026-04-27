import React from "react";

const AboutHeader: React.FC = () => (
  <div className="text-center mb-12">
    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
      Prince Yadav
    </h1>
    <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mb-6 rounded-full" />
    <p className="text-2xl text-purple-600 font-semibold mb-2">
      Senior Full Stack Developer
    </p>
    <p className="text-lg text-gray-700 mb-4">
      Backend-Focused | Microservices | Distributed Systems
    </p>
    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-6">
      <span className="flex items-center">
        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
        4+ Years of Experience
      </span>
      <span className="flex items-center">
        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
        10K+ Concurrent Users
      </span>
      <span className="flex items-center">
        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
        20-30% Performance Improvement
      </span>
    </div>
    <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
      Building scalable applications using ASP.NET Core, Node.js, React, and Angular. 
      Strong focus on backend engineering, system design, and performance optimization with hands-on frontend development experience.
    </p>
  </div>
);

export default AboutHeader;