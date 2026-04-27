const Internship = () => {
    const experiences = [
        {
            type: "Trainee Position",
            company: "Add Innovation",
            position: "Software Developer Trainee",
            duration: "Aug 2021 – Dec 2021",
            description:
                "Contributed to a product-based company specializing in image processing and AI/ML solutions.",
            responsibilities: [
                "Built prototype for AI-based inspection system using Python + .NET UI",
                "Worked on improving detection outputs and algorithm accuracy",
                "Collaborated with team on image processing implementations",
                "Learned best practices in software development and system design",
            ],
            features: ["AI-based inspection", "Python + .NET", "Image processing", "Machine learning"],
            technologies: ["Python", ".NET", "Image Processing", "Machine Learning", "Windows Forms"],
        },
        {
            type: "Internship",
            company: "IoT-Based Government Project",
            position: "Backend Developer",
            duration: "Project Highlight",
            description: "Backend APIs and device integration for IoT government solution with real-time monitoring.",
            responsibilities: [
                "Developed REST APIs for device communication and data collection",
                "Integrated with Azure IoT Hub for IoT device management",
                "Built data processing pipeline for sensor data",
                "Implemented real-time monitoring and alerting system",
                "Optimized database queries for high-frequency data ingestion",
            ],
            features: ["IoT integration", "Real-time monitoring", "Data pipeline", "Device management"],
            technologies: [".NET Core", "Azure IoT Hub", "Azure Functions", "SQL Server", "REST APIs"],
        },
    ];

    return (
        <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
                        <span className="text-purple-600">Trainee & Internship</span> Experiences
                    </h1>
                    <div className="w-24 h-1.5 bg-purple-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-purple-700 max-w-3xl mx-auto">
                        Early career experiences that shaped my professional foundation
                    </p>
                </div>

                {/* Experience Cards */}
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative group">
                            {/* Card */}
                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-purple-50 overflow-hidden">
                                {/* Ribbon for type */}
                                <div
                                    className={`absolute top-0 right-0 px-4 py-1 text-xs font-bold text-white ${
                                        exp.type === "Internship" ? "bg-blue-600" : "bg-emerald-600"
                                    }`}
                                >
                                    {exp.type}
                                </div>

                                {/* Header */}
                                <div className="pr-10">
                                    <h3 className="text-xl font-bold text-purple-800">{exp.position}</h3>
                                    <h4 className="text-lg font-semibold text-purple-700">{exp.company}</h4>
                                    <p className="text-sm text-purple-500 mb-3">{exp.duration}</p>
                                    <p className="text-gray-700 mb-4">{exp.description}</p>
                                </div>

                                {/* Responsibilities */}
                                <div className="mb-4">
                                    <h5 className="text-sm font-semibold text-purple-700 uppercase tracking-wider mb-2">
                                        Key Contributions
                                    </h5>
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

                                {/* Technologies */}
                                <div className="pt-3 border-t border-purple-100">
                                    <h5 className="text-sm font-semibold text-purple-700 uppercase tracking-wider mb-2">
                                        Skills Gained
                                    </h5>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-xs font-medium px-3 py-1 bg-purple-100 text-purple-700 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="pt-3 border-t border-purple-100 mt-4">
                                    <h5 className="text-sm font-semibold text-purple-700 uppercase tracking-wider mb-2">
                                        Key Highlights
                                    </h5>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.features.map((item, i) => (
                                            <span
                                                key={i}
                                                className="text-xs font-medium px-3 py-1 bg-purple-50 text-purple-800 border border-purple-200 rounded-full"
                                            >
                                                {item}
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

export default Internship;
