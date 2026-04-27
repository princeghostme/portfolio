import React from "react";
import { TrendingUp, BarChart3, Clock, Layers3 } from "lucide-react";

const SystemDesignHighlights: React.FC = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
            Real-World Problem Solving & <span className="text-purple-600">Performance Impact</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            How I tackle complex challenges and deliver measurable improvements that impact business metrics
          </p>
        </div>

        {/* Performance Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {[
            { metric: "20-30%", label: "Performance Improvement", desc: "Through caching & optimization" },
            { metric: "10K+", label: "Concurrent Users", desc: "Supported simultaneously" },
            { metric: "4+", label: "Years Experience", desc: "Building scalable systems" },
            { metric: "100%", label: "Uptime Focus", desc: "With proper architecture" },
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-white rounded-xl border-2 border-purple-100 shadow-lg text-center hover:shadow-xl transition">
              <div className="text-4xl font-bold text-purple-600 mb-2">{item.metric}</div>
              <p className="font-bold text-gray-900">{item.label}</p>
              <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Real Scenario Case Studies */}
        <div className="mb-12 space-y-6">
          {/* Case Study 1: Concurrency Challenge */}
          <div className="p-8 bg-white rounded-xl shadow-lg border-l-4 border-green-500">
            <div className="flex items-start gap-4">
              <TrendingUp className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Case Study 1: Scaling to 10K Concurrent Users</h3>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Scenario:</span> A healthcare SaaS platform needed to handle 10,000 concurrent users accessing patient data simultaneously during peak hours.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-red-50 rounded-lg">
                    <p className="font-bold text-gray-900 mb-2">Problems Identified:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>✗ Database queries taking 2-3 seconds</li>
                      <li>✗ High memory consumption</li>
                      <li>✗ Connection pool exhaustion</li>
                      <li>✗ N+1 query problems</li>
                      <li>✗ API response times exceeding 5 seconds</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <p className="font-bold text-gray-900 mb-2">Solutions Implemented:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>✓ Redis caching (60% hit rate)</li>
                      <li>✓ Database indexing optimization</li>
                      <li>✓ Connection pooling tuning</li>
                      <li>✓ Batch queries & pagination</li>
                      <li>✓ Async processing for non-critical ops</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="font-bold text-blue-900 mb-2">📊 Results Achieved:</p>
                  <p className="text-sm text-blue-800">
                    Response times reduced from 5s to 1.2s (76% improvement), database load reduced by 70%, 
                    system maintained <span className="font-semibold">99.9% uptime</span> during peak load testing
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2: Query Optimization */}
          <div className="p-8 bg-white rounded-xl shadow-lg border-l-4 border-blue-500">
            <div className="flex items-start gap-4">
              <BarChart3 className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Case Study 2: API Performance Optimization (20-30% Improvement)</h3>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Scenario:</span> A fintech trading platform's critical trading API was responding in 800ms-1.2s, causing delays in order processing and affecting user experience.
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-indigo-500">
                    <p className="font-bold text-gray-900">Step 1: Analysis</p>
                    <p className="text-sm text-gray-700 mt-1">
                      Used SQL query profiling and application insights to identify slow queries, N+1 problems, and inefficient data fetching patterns
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-indigo-500">
                    <p className="font-bold text-gray-900">Step 2: Optimization</p>
                    <p className="text-sm text-gray-700 mt-1">
                      Added strategic indexes, optimized joins, implemented batch loading, and added Redis caching layer for frequently accessed data
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-indigo-500">
                    <p className="font-bold text-gray-900">Step 3: Load Testing</p>
                    <p className="text-sm text-gray-700 mt-1">
                      Simulated high load scenarios and refined caching strategies to ensure consistent performance under peak conditions
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="font-bold text-yellow-900 mb-2">📈 Results Achieved:</p>
                  <div className="text-sm text-yellow-800 space-y-1">
                    <p>• Average response time: 800ms → 560ms (30% improvement)</p>
                    <p>• P99 response time: 1200ms → 750ms (37% improvement)</p>
                    <p>• Database CPU reduced from 85% to 40% under peak load</p>
                    <p>• Throughput increased by 40% with same hardware</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 3: Architecture Scaling */}
          <div className="p-8 bg-white rounded-xl shadow-lg border-l-4 border-purple-500">
            <div className="flex items-start gap-4">
              <Layers3 className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Case Study 3: Legacy Monolith to Microservices Migration</h3>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Scenario:</span> A large enterprise system was hitting scaling limits with monolithic architecture, making it difficult to deploy features independently and scale specific components.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <p className="font-bold text-gray-900 mb-2">Architecture Changes:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>→ Monolith → Microservices (10+ services)</li>
                      <li>→ API Gateway for routing</li>
                      <li>→ Event-driven communication</li>
                      <li>→ Independent database per service</li>
                      <li>→ Docker + Kubernetes deployment</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="font-bold text-gray-900 mb-2">Benefits Realized:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>✓ Deploy features in minutes (vs hours)</li>
                      <li>✓ Scale specific services independently</li>
                      <li>✓ 5 parallel development teams</li>
                      <li>✓ Better fault isolation</li>
                      <li>✓ Technology flexibility per service</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="font-bold text-orange-900 mb-2">🎯 Business Impact:</p>
                  <p className="text-sm text-orange-800">
                    Feature deployment time reduced by 80%, system reliability improved to 99.95%, 
                    team velocity increased by 3x, infrastructure costs optimized through targeted scaling
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 4: Real-time Systems */}
          <div className="p-8 bg-white rounded-xl shadow-lg border-l-4 border-pink-500">
            <div className="flex items-start gap-4">
              <Clock className="w-8 h-8 text-pink-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Case Study 4: Building Real-time Collaborative Systems</h3>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Scenario:</span> Implemented real-time task management and chat systems where multiple users need to see live updates with sub-second latency.
                </p>

                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-lg text-sm text-gray-700">
                    <span className="font-bold">Technology Choices:</span> WebSockets + SignalR for ASP.NET, Socket.io for Node.js
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg text-sm text-gray-700">
                    <span className="font-bold">Challenges Solved:</span> Connection management, message ordering, offline support, state sync across clients
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg text-sm text-gray-700">
                    <span className="font-bold">Performance Features:</span> Message batching, delta updates, connection pooling, graceful degradation
                  </div>
                </div>

                <div className="mt-4 p-4 bg-pink-50 rounded-lg border border-pink-200">
                  <p className="font-bold text-pink-900 mb-1">✨ Delivered:</p>
                  <p className="text-sm text-pink-800">
                    Sub-100ms message delivery, support for 5000+ concurrent WebSocket connections per server, 
                    zero-downtime deployments with connection migration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Principles */}
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">My Core Principles for Building Scalable Systems</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Measure First",
                desc: "I profile and measure before optimizing. Data-driven decisions prevent premature optimization and focus effort on actual bottlenecks."
              },
              {
                title: "Design for Growth",
                desc: "Every system is designed assuming 10x growth. Microservices, caching, and async patterns are built in from day one."
              },
              {
                title: "Continuous Monitoring",
                desc: "Real-time dashboards and alerting systems ensure we catch issues before users notice. Application Insights, Datadog, etc."
              },
              {
                title: "Optimize Ruthlessly",
                desc: "Every 100ms matters in high-performance systems. I track and optimize network calls, database queries, and frontend rendering."
              },
              {
                title: "Fail Gracefully",
                desc: "Circuit breakers, fallbacks, and degradation strategies ensure one failing service doesn't take down the entire system."
              },
              {
                title: "Document & Share",
                desc: "Architecture decisions are documented. Team knowledge is shared so everyone understands the system and can contribute to optimization."
              },
            ].map((principle, idx) => (
              <div key={idx} className="p-4 bg-white rounded-lg">
                <h4 className="font-bold text-purple-700 mb-2">{principle.title}</h4>
                <p className="text-sm text-gray-700">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemDesignHighlights;
