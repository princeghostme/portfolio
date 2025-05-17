const WorkExperience = () => {
    const experiences = [
        {
            company: "MITS Global",
            position: "Senior Software Developer & Assistant Lead",
            duration: "Dec 2023 – Present",
            location: "Bangalore",
            responsibilities: [
                "Collaborated with Nuvama, a leading fintech client, to design and implement scalable and efficient software solutions",
                "Addressed and resolved issues within existing code, effectively rectifying previous problems and enhancing application performance",
                "Built multiple APIs and managed live issues, creating change requests to improve functionality and user experience",
                "Developed comprehensive reports and dashboards to provide insights on usage and performance metrics",
                "Leveraged React for dynamic front-end development and .NET Core for robust back-end services",
                "Optimized various services including login functionalities and API wrappers while restructuring code for improved maintainability",
                "Implemented best practices in software development including version control, automated testing, and code reviews"
            ],
            technologies: ["React", ".NET Core", "REST APIs", "Azure", "SQL Server", "Performance Optimization"]
        },
        {
            company: "Enaviya Information Technology",
            position: "Full Stack Developer (Junior to Mid-level)",
            duration: "Aug 2021 – Dec 2023",
            location: "Bangalore",
            responsibilities: [
                "Designed and developed full applications from scratch using .NET Core MVC with robust architecture",
                "Implemented dynamic web applications with JavaScript, TypeScript and Angular for client-side functionality",
                "Collaborated with SIS to record and maintain rental applications, delivering tailored solutions",
                "Worked with AU Bank on developing their banking application with essential features",
                "Served as SharePoint Developer for Aashirwad, streamlining workflows and data management",
                "Optimized existing applications for improved performance and maintainability",
                "Engaged in code reviews, version control, and testing to uphold quality standards"
            ],
            technologies: [".NET Core", "Angular", "TypeScript", "SharePoint", "SQL Server", "Azure"]
        },
        {
            company: "AddInnovation",
            position: "Full Stack Developer (Trainee to Junior)",
            duration: "Aug 2021 – Dec 2021",
            location: "Bangalore",
            responsibilities: [
                "Contributed to a product-based company specializing in image processing and AI/ML solutions",
                "Created and maintained applications with daily backups using PostgreSQL and Windows Forms",
                "Designed intuitive UI interfaces focusing on user experience and accessibility",
                "Collaborated with cross-functional teams to gather requirements and implement features",
                "Improved system reliability and user satisfaction through iterative development"
            ],
            technologies: [".NET", "PostgreSQL", "Windows Forms", "AI/ML", "Image Processing"]
        }
    ];

    return (
        <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
                        Professional <span className="text-rose-600">Experience</span>
                    </h1>
                    <div className="w-24 h-1.5 bg-rose-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-rose-700 max-w-3xl mx-auto">
                        My journey through diverse roles and responsibilities in software development
                    </p>
                </div>

                {/* Timeline */}
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative group">

                            {/* Content */}
                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-rose-50">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                                    <h3 className="text-xl font-bold text-rose-800">{exp.position}</h3>
                                    <div className="flex items-center mt-1 sm:mt-0">
                                        <span className="text-sm font-medium text-rose-600 bg-rose-100 px-3 py-1 rounded-full">
                                            {exp.duration}
                                        </span>
                                    </div>
                                </div>
                                <h4 className="text-lg font-semibold text-rose-700 mt-1">{exp.company}</h4>
                                <p className="text-sm text-rose-500 mb-4">{exp.location}</p>

                                <ul className="space-y-2 mt-4">
                                    {exp.responsibilities.map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <div className="flex-shrink-0 mt-1.5">
                                                <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                                            </div>
                                            <p className="ml-2 text-gray-700">{item}</p>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6 pt-4 border-t border-rose-100">
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, i) => (
                                            <span key={i} className="text-xs font-medium px-3 py-1 bg-rose-100 text-rose-700 rounded-full">
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
