const WorkExperience = () => {
    const experiences = [
        {
            company: "DynPro India",
            position: "Senior Software Developer",
            duration: "Nov 2025 – Present",
            location: "Bengaluru",
            responsibilities: [
                "Working on migration of legacy system to microservices using ASP.NET Core",
                "Contributed to API Gateway implementation and request routing",
                "Involved in authentication migration from Okta to Entra ID (JWT-based)",
                "Exploring token improvements using PASETO concepts",
                "Built AI assistant POC using LangChain (basic RAG)",
                "Improved performance by ~20–30% using caching and query optimization",
                "Collaborated with frontend teams and contributed to integration with Angular UI"
            ],
            features: [
                "Legacy to Microservices Migration",
                "API Gateway Implementation",
                "OAuth2 to Entra ID Migration",
                "AI Assistant POC (LangChain)",
                "Performance Optimization (20-30%)",
                "JWT/PASETO Token Management"
            ],
            technologies: ["ASP.NET Core", "Microservices", "API Gateway", "Entra ID", "JWT", "PASETO", "LangChain", "Redis", "Entity Framework Core"]
        },
        {
            company: "Aaneel Infotech",
            position: "Software Developer",
            duration: "Apr 2025 – Nov 2025",
            location: "Bengaluru",
            responsibilities: [
                "Developed full-stack features for healthcare SaaS platform",
                "Designed backend APIs supporting ~10K concurrent users",
                "Built React PWA with offline-first capabilities",
                "Worked on frontend performance and state management",
                "Contributed to system stability and performance improvements",
                "Mentored junior developers"
            ],
            features: [
                "Healthcare SaaS Platform",
                "10K+ Concurrent User Support",
                "React PWA (Offline-First)",
                "Real-time Features",
                "Performance Optimization",
                "Mentoring"
            ],
            technologies: ["React", ".NET Core", "Node.js", "PostgreSQL", "Redis", "WebSockets", "Azure", "SignalR"]
        },
        {
            company: "MITS Global",
            position: "Software Developer",
            duration: "Dec 2023 – Mar 2025",
            location: "Bengaluru",
            responsibilities: [
                "Developed backend workflows using AWS Lambda and SQS",
                "Built React-based dashboards with real-time updates (WebSockets)",
                "Improved API performance by ~20–30% through query optimization",
                "Implemented authentication using JWT with refresh tokens",
                "Optimized database queries for high-traffic systems",
                "Collaborated with cross-functional teams on complex features"
            ],
            features: [
                "AWS Lambda & SQS Integration",
                "Real-time Dashboards (WebSockets)",
                "Performance Optimization (20-30%)",
                "JWT Authentication",
                "Query Optimization",
                "High-Traffic Systems"
            ],
            technologies: ["React", "Node.js", "AWS Lambda", "AWS SQS", "JWT", "WebSockets", "PostgreSQL", "MongoDB"]
        },
        {
            company: "Enaviya Information Technologies",
            position: "Junior Software Developer",
            duration: "Feb 2022 – Dec 2023",
            location: "Bengaluru",
            responsibilities: [
                "Built and maintained Angular-based enterprise applications",
                "Improved UI performance and login experience",
                "Optimized backend queries for faster data retrieval",
                "Implemented responsive designs and accessibility features",
                "Contributed to code reviews and testing practices"
            ],
            features: [
                "Enterprise Applications",
                "UI Performance Optimization",
                "Query Optimization",
                "Responsive Design",
                "Accessibility Features"
            ],
            technologies: ["Angular", "TypeScript", "React", ".NET Core", "SQL Server", "HTML5", "CSS3"]
        },
        {
            company: "Add Innovation",
            position: "Software Developer Trainee",
            duration: "Aug 2021 – Dec 2021",
            location: "Noida",
            responsibilities: [
                "Built prototype for AI-based inspection system using Python + .NET UI",
                "Worked on improving detection outputs",
                "Collaborated with team on image processing algorithms",
                "Learned best practices in software development"
            ],
            features: [
                "AI-based Inspection System",
                "Python + .NET Integration",
                "Image Processing",
                "Detection Algorithm Enhancement"
            ],
            technologies: ["Python", ".NET", "Image Processing", "Machine Learning", "Windows Forms"]
        }
    ];

    return (
        <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
                        Professional <span className="text-purple-600">Experience</span>
                    </h1>
                    <div className="w-24 h-1.5 bg-purple-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-purple-700 max-w-3xl mx-auto">
                        My journey through diverse roles and responsibilities in software development
                    </p>
                </div>

                {/* Timeline */}
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative group">
                            <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                                    <h3 className="text-xl font-bold text-purple-800">{exp.position}</h3>
                                    <div className="flex items-center mt-1 sm:mt-0">
                                        <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                                            {exp.duration}
                                        </span>
                                    </div>
                                </div>
                                <h4 className="text-lg font-semibold text-purple-700 mt-1">{exp.company}</h4>
                                <p className="text-sm text-purple-500 mb-4">{exp.location}</p>

                                {/* Split Section */}
                                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4">
                                    <div className="md:col-span-4">
                                        <h5 className="text-purple-600 font-semibold mb-2">Responsibilities</h5>
                                        <ul className="space-y-2">
                                            {exp.responsibilities.map((item, i) => (
                                                <li key={i} className="flex items-start">
                                                    <div className="flex-shrink-0 mt-1.5">
                                                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                                    </div>
                                                    <p className="ml-2 text-gray-700">{item}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="md:col-span-1">
                                        <h5 className="text-purple-600 font-semibold mb-2">USPs/Features</h5>
                                        <ul className="space-y-1">
                                            {exp.features.map((item, i) => (
                                                <li key={i} className="text-gray-700 text-sm bg-purple-50 px-2 py-1 rounded-md">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-purple-100">
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, i) => (
                                            <span key={i} className="text-xs font-medium px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorkExperience;
