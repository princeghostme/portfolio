import React from "react";
import { GitBranch, Layers, Zap, Database } from "lucide-react";

const ProjectMethodology: React.FC = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
            How I Build <span className="text-purple-600">Projects & Systems</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A detailed look at my development process, architectural decisions, and how I approach building scalable, maintainable solutions
          </p>
        </div>

        {/* Architecture Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Planning & Design Phase */}
          <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-blue-500">
            <div className="flex items-start gap-4">
              <Layers className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Phase 1: Planning & Architecture</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><span className="font-semibold">Requirements Analysis:</span> Understanding business goals, user workflows, and performance requirements</p>
                  <p><span className="font-semibold">System Design:</span> Designing microservices, defining API contracts, planning data flow</p>
                  <p><span className="font-semibold">Tech Stack Selection:</span> Choosing appropriate tools based on scalability, team expertise, and project needs</p>
                  <p><span className="font-semibold">Architecture Patterns:</span> Implementing event-driven, CQRS, API Gateway, and other patterns as needed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Development & Implementation */}
          <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-purple-500">
            <div className="flex items-start gap-4">
              <GitBranch className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Phase 2: Development & Implementation</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><span className="font-semibold">Modular Development:</span> Building independent services that can be developed and deployed separately</p>
                  <p><span className="font-semibold">Code Quality:</span> Following SOLID principles, design patterns, and maintaining code reviews</p>
                  <p><span className="font-semibold">Testing:</span> Unit tests, integration tests, and end-to-end testing for reliability</p>
                  <p><span className="font-semibold">CI/CD Pipeline:</span> Automated testing and deployment using GitHub Actions or Azure DevOps</p>
                </div>
              </div>
            </div>
          </div>

          {/* Performance & Optimization */}
          <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-green-500">
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Phase 3: Performance & Optimization</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><span className="font-semibold">Query Optimization:</span> Analyzing slow queries, adding indexes, and optimizing database access patterns</p>
                  <p><span className="font-semibold">Caching Strategy:</span> Implementing Redis caching for frequently accessed data and reducing database load</p>
                  <p><span className="font-semibold">Async Processing:</span> Using background jobs and message queues for non-blocking operations</p>
                  <p><span className="font-semibold">Load Testing:</span> Simulating high concurrency to identify bottlenecks and ensure system stability</p>
                </div>
              </div>
            </div>
          </div>

          {/* Monitoring & Maintenance */}
          <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-orange-500">
            <div className="flex items-start gap-4">
              <Database className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Phase 4: Monitoring & Maintenance</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><span className="font-semibold">Logging & Observability:</span> Comprehensive logging using Application Insights or similar tools</p>
                  <p><span className="font-semibold">Performance Metrics:</span> Tracking API response times, error rates, and system health</p>
                  <p><span className="font-semibold">Alerting:</span> Setting up alerts for anomalies and critical issues</p>
                  <p><span className="font-semibold">Continuous Improvement:</span> Regular reviews and optimizations based on production data</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Integration Deep Dive */}
        <div className="mb-12 p-8 bg-white rounded-xl shadow-lg border-2 border-purple-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Technology & Implementation Details</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Backend Architecture */}
            <div>
              <h4 className="text-lg font-bold text-purple-700 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                Backend Architecture
              </h4>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-semibold text-gray-900">ASP.NET Core Services</p>
                  <p className="text-xs mt-1">Entity Framework for ORM, async/await patterns, dependency injection for loose coupling</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-semibold text-gray-900">Node.js / Express</p>
                  <p className="text-xs mt-1">Lightweight, high-performance APIs, perfect for microservices and real-time features</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-semibold text-gray-900">API Gateway Pattern</p>
                  <p className="text-xs mt-1">Centralized routing, authentication, rate limiting, and request/response transformation</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-semibold text-gray-900">Message Queue Integration</p>
                  <p className="text-xs mt-1">Kafka, Azure Service Bus for async communication between services</p>
                </div>
              </div>
            </div>

            {/* Data & Caching Layer */}
            <div>
              <h4 className="text-lg font-bold text-blue-700 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Data & Caching Strategy
              </h4>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-gray-900">Database Optimization</p>
                  <p className="text-xs mt-1">SQL Server, PostgreSQL with proper indexing, query optimization, and connection pooling</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-gray-900">Redis Caching</p>
                  <p className="text-xs mt-1">In-memory caching for frequent queries, sessions, and real-time data (20-30% perf improvement)</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-gray-900">NoSQL Solutions</p>
                  <p className="text-xs mt-1">MongoDB for flexible schemas, Cosmos DB for global scale and multi-region support</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-gray-900">Vector Databases</p>
                  <p className="text-xs mt-1">For AI/ML features, semantic search, and embeddings (Pinecone, Weaviate)</p>
                </div>
              </div>
            </div>

            {/* Frontend & Real-time */}
            <div>
              <h4 className="text-lg font-bold text-green-700 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                Frontend & Real-time Systems
              </h4>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-semibold text-gray-900">React Architecture</p>
                  <p className="text-xs mt-1">Component-based design, Redux for state management, hooks for side effects</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-semibold text-gray-900">Angular Applications</p>
                  <p className="text-xs mt-1">Enterprise solutions with dependency injection, RxJS observables, reactive forms</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-semibold text-gray-900">Real-time Communication</p>
                  <p className="text-xs mt-1">WebSockets for live updates, SignalR for ASP.NET Core real-time features</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-semibold text-gray-900">PWA & Offline Support</p>
                  <p className="text-xs mt-1">Service workers for offline functionality and improved user experience</p>
                </div>
              </div>
            </div>

            {/* Security & DevOps */}
            <div>
              <h4 className="text-lg font-bold text-red-700 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                Security & DevOps
              </h4>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="p-3 bg-red-50 rounded-lg">
                  <p className="font-semibold text-gray-900">Authentication</p>
                  <p className="text-xs mt-1">JWT, OAuth2, OIDC with Entra ID, Okta integration for SSO</p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg">
                  <p className="font-semibold text-gray-900">Containerization</p>
                  <p className="text-xs mt-1">Docker for consistent environments, Kubernetes for orchestration</p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg">
                  <p className="font-semibold text-gray-900">CI/CD Pipeline</p>
                  <p className="text-xs mt-1">GitHub Actions, Azure DevOps for automated testing and deployments</p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg">
                  <p className="font-semibold text-gray-900">Cloud Infrastructure</p>
                  <p className="text-xs mt-1">Azure (App Services, Functions), AWS (EC2, Lambda, RDS) for scalable deployment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Project Examples */}
        <div className="p-8 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Real Project Examples</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Healthcare Platform Example */}
            <div className="bg-white p-6 rounded-lg">
              <h4 className="text-lg font-bold text-purple-700 mb-3">Healthcare SaaS Platform</h4>
              <p className="text-sm text-gray-700 mb-3">
                <span className="font-semibold">Challenge:</span> Support ~10K concurrent users with real-time data updates for patient care
              </p>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold text-gray-900">Solution Architecture:</span></p>
                <ul className="text-gray-700 space-y-1 ml-3">
                  <li>• React PWA for offline-first capabilities</li>
                  <li>• ASP.NET Core microservices for scalability</li>
                  <li>• SignalR for real-time patient updates</li>
                  <li>• Redis caching for frequently accessed medical data</li>
                  <li>• PostgreSQL with optimized indexes</li>
                  <li>• Achieved 20-30% performance improvement</li>
                </ul>
              </div>
            </div>

            {/* Fintech Platform Example */}
            <div className="bg-white p-6 rounded-lg">
              <h4 className="text-lg font-bold text-purple-700 mb-3">Fintech Trading Platform</h4>
              <p className="text-sm text-gray-700 mb-3">
                <span className="font-semibold">Challenge:</span> Handle high-frequency trading data with real-time market updates
              </p>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold text-gray-900">Solution Architecture:</span></p>
                <ul className="text-gray-700 space-y-1 ml-3">
                  <li>• Microservices for trading, portfolio, orders</li>
                  <li>• SignalR/WebSockets for real-time market data</li>
                  <li>• Message queues for async order processing</li>
                  <li>• Redis for caching market data</li>
                  <li>• Azure SQL for transactional consistency</li>
                  <li>• JWT-based secure authentication</li>
                </ul>
              </div>
            </div>

            {/* AI Integration Example */}
            <div className="bg-white p-6 rounded-lg">
              <h4 className="text-lg font-bold text-purple-700 mb-3">AI-Assisted E-Commerce</h4>
              <p className="text-sm text-gray-700 mb-3">
                <span className="font-semibold">Challenge:</span> Integrate intelligent search and recommendations using AI
              </p>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold text-gray-900">Solution Architecture:</span></p>
                <ul className="text-gray-700 space-y-1 ml-3">
                  <li>• RAG pipeline with vector embeddings</li>
                  <li>• LangChain for AI orchestration</li>
                  <li>• React frontend for chat interface</li>
                  <li>• Node.js backend for API integration</li>
                  <li>• Product catalog in vector DB</li>
                  <li>• Conversation memory for context</li>
                </ul>
              </div>
            </div>

            {/* Microservices Example */}
            <div className="bg-white p-6 rounded-lg">
              <h4 className="text-lg font-bold text-purple-700 mb-3">Microservices Migration</h4>
              <p className="text-sm text-gray-700 mb-3">
                <span className="font-semibold">Challenge:</span> Migrate monolithic legacy system to microservices
              </p>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold text-gray-900">Solution Architecture:</span></p>
                <ul className="text-gray-700 space-y-1 ml-3">
                  <li>• API Gateway for centralized routing</li>
                  <li>• Independent ASP.NET Core services</li>
                  <li>• Event-driven communication with Service Bus</li>
                  <li>• Entra ID for authentication migration</li>
                  <li>• Docker & Kubernetes for deployment</li>
                  <li>• CI/CD with GitHub Actions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Key Technologies Used */}
        <div className="mt-12 p-6 bg-white rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Technologies & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Backend", items: "ASP.NET Core, Node.js, Express" },
              { label: "Frontend", items: "React, Angular, TypeScript" },
              { label: "Databases", items: "SQL Server, PostgreSQL, MongoDB" },
              { label: "Cloud", items: "Azure, AWS, Docker, Kubernetes" },
              { label: "Real-time", items: "WebSockets, SignalR, Kafka" },
              { label: "AI/ML", items: "LangChain, OpenAI, Vector DB" },
              { label: "DevOps", items: "GitHub Actions, Azure DevOps" },
              { label: "Security", items: "JWT, OAuth2, OIDC, Entra ID" },
            ].map((tech, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-purple-300 transition">
                <p className="font-bold text-purple-700 text-sm mb-2">{tech.label}</p>
                <p className="text-xs text-gray-600">{tech.items}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMethodology;
