import React from "react";
import { Code2, Zap, Users, Lightbulb } from "lucide-react";

const ProfessionalSummary: React.FC = () => (
  <div className="bg-white rounded-xl shadow-md p-8 transition-all hover:shadow-lg border border-purple-50">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
    
    <div className="space-y-6">
      {/* Main summary */}
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed text-lg">
          I'm a <span className="font-semibold text-purple-700">Senior Full Stack Developer</span> with 4+ years of experience building <span className="font-semibold">scalable, high-performance applications</span> that power businesses across healthcare, fintech, and enterprise sectors. 
          My primary focus is <span className="font-semibold text-purple-700">backend engineering and system design</span>, but I bring hands-on expertise in modern frontend technologies as well.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          I specialize in designing systems that handle <span className="font-semibold">~10K concurrent users</span> while optimizing for speed and reliability. 
          I've consistently delivered <span className="font-semibold">20-30% performance improvements</span> through intelligent caching strategies, query optimization, and architectural refinements.
        </p>
      </div>

      {/* Key highlights with icons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-purple-50 rounded-lg border border-purple-100 flex gap-3">
          <Code2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Microservices Architecture</h4>
            <p className="text-sm text-gray-700">
              Design and implement modular service-oriented architectures with event-driven communication using Kafka and message queues
            </p>
          </div>
        </div>
        
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 flex gap-3">
          <Zap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Performance Optimization</h4>
            <p className="text-sm text-gray-700">
              Optimize database queries, implement Redis caching, and leverage async patterns to achieve significant speed improvements
            </p>
          </div>
        </div>

        <div className="p-4 bg-green-50 rounded-lg border border-green-100 flex gap-3">
          <Users className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Team Collaboration</h4>
            <p className="text-sm text-gray-700">
              Mentor junior developers, conduct code reviews, and communicate complex technical concepts effectively
            </p>
          </div>
        </div>

        <div className="p-4 bg-orange-50 rounded-lg border border-orange-100 flex gap-3">
          <Lightbulb className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Continuous Learning</h4>
            <p className="text-sm text-gray-700">
              Actively explore emerging technologies like RAG, LLM APIs, and modern architectural patterns
            </p>
          </div>
        </div>
      </div>

      {/* My approach section */}
      <div className="mt-8 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg border border-purple-200">
        <h3 className="font-bold text-gray-900 mb-4">My Approach to Development</h3>
        <div className="space-y-3">
          <div className="flex gap-3">
            <span className="text-purple-600 font-bold">1.</span>
            <div>
              <span className="font-semibold text-gray-900">Understand Requirements Deeply</span>
              <p className="text-sm text-gray-700 mt-1">
                I start by thoroughly analyzing requirements, identifying bottlenecks, and understanding user workflows to design solutions that scale
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-purple-600 font-bold">2.</span>
            <div>
              <span className="font-semibold text-gray-900">Design for Scalability</span>
              <p className="text-sm text-gray-700 mt-1">
                Every system is designed with future growth in mind. I leverage microservices, event-driven architecture, and cloud-native patterns
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-purple-600 font-bold">3.</span>
            <div>
              <span className="font-semibold text-gray-900">Optimize & Monitor</span>
              <p className="text-sm text-gray-700 mt-1">
                After implementation, I continuously monitor performance, identify optimization opportunities, and refine the system based on real-world usage
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-purple-600 font-bold">4.</span>
            <div>
              <span className="font-semibold text-gray-900">Maintain Code Quality</span>
              <p className="text-sm text-gray-700 mt-1">
                I follow SOLID principles, implement comprehensive testing, conduct regular code reviews, and document everything for team maintainability
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key metrics */}
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <div className="text-2xl font-bold text-purple-700">4+</div>
          <p className="text-sm text-gray-600">Years Experience</p>
        </div>
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <div className="text-2xl font-bold text-blue-700">10K+</div>
          <p className="text-sm text-gray-600">Concurrent Users</p>
        </div>
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="text-2xl font-bold text-green-700">20-30%</div>
          <p className="text-sm text-gray-600">Perf Improvement</p>
        </div>
      </div>

      {/* AI focus */}
      <div className="p-5 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-yellow-700">🤖 Currently Exploring AI:</span> I'm actively working on integrating AI-assisted features using <span className="font-semibold">RAG (Retrieval-Augmented Generation)</span> and <span className="font-semibold">LLM APIs</span>, focusing on practical implementations like AI chatbots, intelligent search, and content generation for real-world applications.
        </p>
      </div>

      {/* Tech stack overview */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="font-bold text-gray-900 mb-4">Core Tech Stack</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { category: "Backend", techs: "ASP.NET Core, Node.js, C#" },
            { category: "Frontend", techs: "React, Angular, TypeScript" },
            { category: "Databases", techs: "SQL Server, PostgreSQL, MongoDB" },
            { category: "Cloud & DevOps", techs: "Azure, AWS, Docker, CI/CD" },
          ].map((item, idx) => (
            <div key={idx} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <p className="font-semibold text-purple-700 text-sm">{item.category}</p>
              <p className="text-xs text-gray-600 mt-1">{item.techs}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ProfessionalSummary;