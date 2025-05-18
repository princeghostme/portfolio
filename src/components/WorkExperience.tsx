const WorkExperience = () => {
    const experiences = [
        {
            company: "AaNeel Infotech",
            position: "Full Stack Developer (Senior)",
            duration: "Apr 2025 – Present",
            location: "Bangalore",
            responsibilities: [
                "Collaborated with cross-functional teams to develop and deploy scalable healthcare and insurance software solutions for U.S.-based hospitals and providers",
                "Contributed to AaNeelCare modules like EMR export, and patient portals used by hospitals across the U.S.",
                "Built and maintained .NET Core and Express.js APIs for electronic medical records and data synchronization",
                "Developed and optimized React-based front-end interfaces ensuring responsiveness and HIPAA compliance",
                "Implemented secure integrations using Amazon S3, SQL Server, and MongoDB for health data storage and retrieval",
                "Enhanced system performance and maintainability through refactoring, code reviews, and CI/CD practices",
                "Ensured compliance with healthcare standards such as CMS, HIPAA while working with protected health data"
            ],
            features: [
                "EMR(Electronic Medical Records) export",
                "Clinical Document/Progress Note system",
                // "Patient portal enhancements",
                // "Insurance claim tracker",
                // "Disease Search with IMO data by US government",
                // "Appointment scheduler",
            ],
            technologies: ["React",".NET Core Apis","Express Apis","Azure","SQL Server","CosmosDb","Performance Optimization","Version Control"]
        },
        {
            company: "MITS Global",
            position: "Full Stack Developer (Senior & Team Lead)",
            duration: "Dec 2023 – March 2025",
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
            features: [
                "Optimized performance (Nuvama)",
                "Live fixes (Nuvama)",
                "Mutual fund module (Nuvama)",
                "Client investment tracking (Nuvama)",
                "Transaction audit (Nuvama)",
                "Order routing (Nuvama)",
                "KYC integration (Nuvama)",
                "Wealth dashboard (Nuvama)",
                "Real-time updates (Nuvama)",
            ],

            technologies: ["React", ".NET Core Apis", "Express Apis", "Web/REST APIs", "Amazon S3", "SQL Server","PostgreSQL", "MongoDB", "Performance Optimization", "Version Control"]
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
            features: [
                "Rental app (SIS India)",
                "Banking app (AUB Bank)",
                "Auction Management System(Inhouse product)",
                "SharePoint workflows (Ashirvad, Marico India)",
                "Performance boost (Qatar Airways,SIS India)",
                "Angular/React UIs setup (Vedanta,SIS India)",
                'CRM and ERP modules (Vedanta, SIS India,Ashirvad,Hindustan Zinc)',

            ],
            technologies: [".NET Core", "Angular", "React","SharePoint","PostgreSQL", "SQL","CosmosDb","Azure","Azure Table Storage","Key Vaults","Power platform","Azure Blob Storage"]
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
            features: [
                "Image processor",
                "Backup system",
                "Windows UI",
                "AI-based module"
            ],
            technologies: [".NET", "PostgreSQL", "Windows Forms", "AI/ML", "Image Processing"]
        }
    ];

    return (
        <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">
                        Professional <span className="text-red-600">Experience</span>
                    </h1>
                    <div className="w-24 h-1.5 bg-red-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-red-700 max-w-3xl mx-auto">
                        My journey through diverse roles and responsibilities in software development
                    </p>
                </div>

                {/* Timeline */}
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative group">
                            <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                                    <h3 className="text-xl font-bold text-red-800">{exp.position}</h3>
                                    <div className="flex items-center mt-1 sm:mt-0">
                                        <span className="text-sm font-medium text-red-600 bg-red-100 px-3 py-1 rounded-full">
                                            {exp.duration}
                                        </span>
                                    </div>
                                </div>
                                <h4 className="text-lg font-semibold text-red-700 mt-1">{exp.company}</h4>
                                <p className="text-sm text-red-500 mb-4">{exp.location}</p>

                                {/* Split Section */}
                                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4">
                                    <div className="md:col-span-4">
                                        <h5 className="text-red-600 font-semibold mb-2">Responsibilities</h5>
                                        <ul className="space-y-2">
                                            {exp.responsibilities.map((item, i) => (
                                                <li key={i} className="flex items-start">
                                                    <div className="flex-shrink-0 mt-1.5">
                                                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                                    </div>
                                                    <p className="ml-2 text-gray-700">{item}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="md:col-span-1">
                                        <h5 className="text-red-600 font-semibold mb-2">USPs/Features</h5>
                                        <ul className="space-y-1">
                                            {exp.features.map((item, i) => (
                                                <li key={i} className="text-gray-700 text-sm bg-red-50 px-2 py-1 rounded-md">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-red-100">
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, i) => (
                                            <span key={i} className="text-xs font-medium px-3 py-1 bg-red-100 text-red-700 rounded-full">
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
