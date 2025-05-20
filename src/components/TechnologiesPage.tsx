import { useState } from 'react';

const technologies = [
  {
    category: "Languages",
    items: [
      { name: "HTML/CSS", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "C#", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
      { name: "SQL", level: "Advanced" }
    ]
  },
  {
    category: "Frameworks",
    items: [
      { name: "ASP.NET Core", level: "Advanced" },
      { name: "ASP.NET MVC", level: "Advanced" },
      { name: "React", level: "Advanced" },
      { name: "Node.js", level: "Intermediate" },
      { name: "Entity Framework", level: "Advanced" },
      { name: "Express", level: "Intermediate" },
      { name: "Blazor", level: "Intermediate" }
    ]
  },
  {
    category: "Backend Technologies",
    items: [
      { name: "RESTful APIs", level: "Advanced" },
      { name: "Web APIs", level: "Advanced" },
      { name: "WebSockets", level: "Intermediate" },
      { name: "SignalR", level: "Intermediate" },
      { name: "OAuth/JWT", level: "Advanced" },
      { name: "API Gateway", level: "Intermediate" }
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "SQL Server", level: "Advanced" },
      { name: "Azure SQL", level: "Intermediate" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "Redis", level: "Intermediate" },
      { name: "ClickHouse", level: "Basic" },
      { name: "Cosmos DB", level: "Basic" }
    ]
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "Azure", level: "Intermediate" },
      { name: "Azure App Services", level: "Intermediate" },
      { name: "Azure Blob Storage", level: "Intermediate" },
      { name: "Azure DevOps", level: "Intermediate" },
      { name: "CI/CD Pipelines", level: "Intermediate" },
      { name: "Docker", level: "Basic" },
      { name: "Amazon S3", level: "Basic" }
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Visual Studio", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
      { name: "Git/GitHub", level: "Advanced" },
      { name: "Bitbucket", level: "Intermediate" },
      { name: "Postman", level: "Advanced" },
      { name: "Swagger", level: "Advanced" },
      { name: "Jenkins", level: "Intermediate" },
      { name: "SharePoint", level: "Intermediate" }
    ]
  },
  {
    category: "API Performance",
    items: [
      { name: "Caching Strategies", level: "Intermediate" },
      { name: "API Rate Limiting", level: "Intermediate" },
      { name: "Response Optimization", level: "Intermediate" },
      { name: "Load Balancing", level: "Intermediate" },
      { name: "Query Optimization", level: "Advanced" },
      { name: "Asynchronous Processing", level: "Advanced" }
    ]
  },
  {
    category: "UI/UX",
    items: [
      { name: "Bootstrap", level: "Advanced" },
      { name: "Tailwind CSS", level: "Intermediate" },
      { name: "jQuery", level: "Intermediate" },
      { name: "UI/UX Principles", level: "Intermediate" }
    ]
  }
];

const additionalSkills = [
  // Software Development Practices
  "Agile Methodologies",
  "Scrum & Sprint Planning",
  "Code Review",
  "Technical Documentation",
  "Clean Architecture",
  "Design Patterns (SOLID, Repository, CQRS)",
  "Test-Driven Development (TDD)",
  "Dependency Injection",
  "Version Control (Git, Bitbucket)",

  // System Design & Architecture
  "Microservices Architecture",
  "Event-Driven Architecture",
  "Domain-Driven Design (DDD)",
  "API Gateway Pattern",
  "Authentication & Authorization (JWT, OAuth2)",
  "Rate Limiting & Throttling",
  "Caching Strategies (Redis, Memory Cache)",

  // Database & Data Flow
  "Database Design",
  "Performance Optimization",
  "Query Optimization",
  "Chunked Data Transfer",
  "CAML Query",
  "ETL Pipelines",
  "Data Migration",

  // Frontend/Rendering Strategies
  "Server Side Rendering (SSR)",
  "Client Side Rendering (CSR)",
  "Component-Based UI Architecture",

  // DevOps & Cloud
  "CI/CD Pipelines",
  "Azure DevOps",
  "Docker & Containerization",
  "Infrastructure as Code (IaC)",
  "Monitoring & Logging (App Insights, Log Analytics)",

  // Microsoft & Integration Tools
  "Power Automate",
  "SharePoint Workflow",
  "Timer Jobs",
  "Integration with 3rd-party APIs (Razorpay, ClickHouse, etc.)",

  // Project/Team Management
  "Task Estimation & Prioritization",
  "Mentoring Junior Developers",
  "Client Communication & Demos",
  "Technical Leadership in Cross-functional Teams",
  "Requirements Gathering & Analysis"
];

const TechnologiesDetails = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showLevelDropdown, setShowLevelDropdown] = useState(false);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-purple-200 text-purple-800";
      case "Intermediate":
        return "bg-purple-100 text-purple-700";
      case "Basic":
        return "bg-purple-50 text-purple-600";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const categories = technologies.map(tech => tech.category);
  const levels = Array.from(new Set(technologies.flatMap(tech => tech.items.map(item => item.level))));

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const toggleLevel = (level: string) => {
    if (selectedLevels.includes(level)) {
      setSelectedLevels(selectedLevels.filter(l => l !== level));
    } else {
      setSelectedLevels([...selectedLevels, level]);
    }
  };

  const filteredTechnologies = technologies
    .filter(tech => (selectedCategories.length > 0 ? selectedCategories.includes(tech.category) : true))
    .map(tech => ({
      ...tech,
      items: tech.items.filter(item =>
        (searchTerm === '' ||
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.level.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedLevels.length > 0 ? selectedLevels.includes(item.level) : true)
      )
    }))
    .filter(tech => tech.items.length > 0);

  const filteredAdditionalSkills = additionalSkills.filter(skill =>
    searchTerm === '' || skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setSelectedLevels([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
            Full <span className="text-purple-600">Technical Breakdown</span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-purple-700 max-w-3xl mx-auto">
            Comprehensive view of all technologies in my stack with proficiency levels
          </p>
        </div>

        <div className="mb-12 bg-white rounded-xl p-6 shadow-lg border border-purple-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <label htmlFor="search" className="block text-sm font-medium text-purple-700 mb-1">
                Search Technologies
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  placeholder="Search by name or level..."
                  className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-2.5 text-purple-400 hover:text-purple-600"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-purple-700 mb-1">
                Filter by Category
              </label>
              <button
                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                className="w-full px-4 py-2 border border-purple-200 rounded-lg flex justify-between items-center hover:bg-purple-50 transition"
              >
                <span>
                  {selectedCategories.length > 0 
                    ? `${selectedCategories.length} selected` 
                    : "All Categories"}
                </span>
                <svg 
                  className={`w-4 h-4 ml-2 transition-transform ${showCategoryDropdown ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showCategoryDropdown && (
                <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-lg py-1 border border-purple-100 max-h-60 overflow-auto">
                  {categories.map((category, index) => (
                    <div key={index} className="px-4 py-2 hover:bg-purple-50 flex items-center">
                      <input
                        type="checkbox"
                        id={`category-${index}`}
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-purple-300 rounded"
                      />
                      <label htmlFor={`category-${index}`} className="ml-3 text-sm text-purple-700">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-purple-700 mb-1">
                Filter by Level
              </label>
              <button
                onClick={() => setShowLevelDropdown(!showLevelDropdown)}
                className="w-full px-4 py-2 border border-purple-200 rounded-lg flex justify-between items-center hover:bg-purple-50 transition"
              >
                <span>
                  {selectedLevels.length > 0 
                    ? `${selectedLevels.length} selected` 
                    : "All Levels"}
                </span>
                <svg 
                  className={`w-4 h-4 ml-2 transition-transform ${showLevelDropdown ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showLevelDropdown && (
                <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-lg py-1 border border-purple-100">
                  {levels.map((level, index) => (
                    <div key={index} className="px-4 py-2 hover:bg-purple-50 flex items-center">
                      <input
                        type="checkbox"
                        id={`level-${index}`}
                        checked={selectedLevels.includes(level)}
                        onChange={() => toggleLevel(level)}
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-purple-300 rounded"
                      />
                      <label htmlFor={`level-${index}`} className="ml-3 text-sm text-purple-700">
                        {level}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {(searchTerm || selectedCategories.length > 0 || selectedLevels.length > 0) && (
            <div className="mt-4 flex justify-between items-center">
              <div className="flex flex-wrap gap-2">
                {selectedCategories.map((category, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800"
                  >
                    {category}
                    <button 
                      onClick={() => toggleCategory(category)}
                      className="ml-1.5 inline-flex text-purple-400 hover:text-purple-600"
                    >
                      ×
                    </button>
                  </span>
                ))}
                {selectedLevels.map((level, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800"
                  >
                    {level}
                    <button 
                      onClick={() => toggleLevel(level)}
                      className="ml-1.5 inline-flex text-purple-400 hover:text-purple-600"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <button
                onClick={clearFilters}
                className="text-purple-600 hover:text-purple-800 text-sm font-medium flex items-center"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Clear all
              </button>
            </div>
          )}
        </div>

        {filteredTechnologies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {filteredTechnologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 overflow-hidden border border-purple-100 transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-purple-800 mb-4 pb-2 border-b border-purple-100 flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                  {tech.category}
                </h3>
                <ul className="space-y-3">
                  {tech.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex justify-between items-center group">
                      <span className="text-purple-900 font-medium group-hover:text-purple-600 transition">
                        {item.name}
                      </span>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${getLevelColor(item.level)} shadow-sm`}>
                        {item.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl shadow-md mb-16 border border-purple-100">
            <svg className="mx-auto h-12 w-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="mt-2 text-lg font-medium text-purple-800">No technologies found</h3>
            <p className="mt-1 text-purple-600">Try adjusting your search or filter criteria</p>
            <div className="mt-6">
              <button
                onClick={clearFilters}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Clear all filters
              </button>
            </div>
          </div>
        )}

        {/* Additional Skills */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-purple-100">
          <div className="flex items-center mb-6">
            <h3 className="text-2xl font-semibold text-purple-800">
              Additional Skills & Competencies
            </h3>
            <span className="ml-3 bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {filteredAdditionalSkills.length} skills
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {filteredAdditionalSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-white text-purple-800 px-4 py-2 rounded-lg text-sm font-medium shadow-sm border border-purple-100 hover:shadow-md transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesDetails;