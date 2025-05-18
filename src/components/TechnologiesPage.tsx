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
  "Agile Methodologies",
  "Database Design",
  "Performance Optimization",
  "Code Review",
  "Technical Documentation",
  "Server Side Rendering (SSR)",
  "Client Side Rendering (CSR)",
  "Power Automate",
  "CAML Query",
  "Microservices Architecture",
  "Event-Driven Architecture",
  "Clean Architecture",
  "Chunked Data Transfer"
];

const TechnologiesDetails = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-teal-200 text-teal-700";
      case "Intermediate":
        return "bg-teal-100 text-teal-700";
      case "Basic":
        return "bg-teal-50 text-teal-700";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const categories = technologies.map(tech => tech.category);
  const levels = Array.from(new Set(technologies.flatMap(tech => tech.items.map(item => item.level))));

  const filteredTechnologies = technologies
    .filter(tech => (selectedCategory ? tech.category === selectedCategory : true))
    .map(tech => ({
      ...tech,
      items: tech.items.filter(item =>
        (searchTerm === '' ||
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.level.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedLevel ? item.level === selectedLevel : true)
      )
    }))
    .filter(tech => tech.items.length > 0);

  const filteredAdditionalSkills = additionalSkills.filter(skill =>
    searchTerm === '' || skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory(null);
    setSelectedLevel(null);
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto mt-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-900 mb-4">
            Full <span className="text-teal-600">Technical Breakdown</span>
          </h1>
          <div className="w-24 h-1.5 bg-teal-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-teal-700 max-w-3xl mx-auto">
            Comprehensive view of all technologies in my stack.
          </p>
        </div>

        <div className="mb-12 bg-teal-50 rounded-lg p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <label htmlFor="search" className="block text-sm font-medium text-teal-700 mb-1">
                Search Technologies
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search by name or level..."
                className="w-full px-4 py-2 border border-teal-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-teal-700 mb-1">
                Filter by Category
              </label>
              <select
                id="category"
                className="w-full px-4 py-2 border border-teal-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                value={selectedCategory || ''}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
              >
                <option value="">All Categories</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="level" className="block text-sm font-medium text-teal-700 mb-1">
                Filter by Level
              </label>
              <select
                id="level"
                className="w-full px-4 py-2 border border-teal-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                value={selectedLevel || ''}
                onChange={(e) => setSelectedLevel(e.target.value || null)}
              >
                <option value="">All Levels</option>
                {levels.map((level, index) => (
                  <option key={index} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>

          {(searchTerm || selectedCategory || selectedLevel) && (
            <div className="mt-4 text-right">
              <button
                onClick={clearFilters}
                className="text-teal-600 hover:text-teal-800 text-sm font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {filteredTechnologies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {filteredTechnologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition duration-300 overflow-hidden border border-teal-50"
              >
                <h3 className="text-xl font-semibold text-teal-800 mb-4 pb-2 border-b border-teal-100">
                  {tech.category}
                </h3>
                <ul className="space-y-3">
                  {tech.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex justify-between items-center">
                      <span className="text-teal-900 font-medium">{item.name}</span>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${getLevelColor(item.level)}`}>
                        {item.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-teal-50 rounded-lg mb-16">
            <p className="text-teal-700 text-lg">No technologies match your filters.</p>
          </div>
        )}

        {/* Additional Skills */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-teal-50">
          <h3 className="text-2xl font-semibold text-teal-800 mb-6 pb-2 border-b border-teal-100">
            Additional Skills
          </h3>
          <ul className="flex flex-wrap gap-4">
            {filteredAdditionalSkills.map((skill, index) => (
              <li
                key={index}
                className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesDetails;
