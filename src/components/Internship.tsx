const Internship = () => {
    const experiences = [
        {
            type: "Internship",
            company: "Hindalco",
            position: "IT Trainee",
            duration: "Feb 2021 – Jul 2021",
            description:
                "Participated in developing an updated Employee Management System while gaining valuable enterprise software development experience.",
            responsibilities: [
                "Shortened project timelines by six months through effective collaboration with the IT team",
                "Analyzed the existing system and integrated new tools without affecting current data",
                "Enhanced operational efficiency of the internal employee management system",
                "Gained experience in requirements gathering, system design, and user training",
            ],
            features: ["Legacy modernization", "Data-safe integration", "Process automation"],
            technologies: ["System Analysis", "Data Migration", "User Training", "Process Improvement"],
        },
        {
            type: "Internship",
            company: "Lithoera Technology",
            position: "Full Stack Intern",
            duration: "Aug 2020 – Dec 2020",
            description: "Contributed to an IoT-based government project while developing full-stack skills.",
            responsibilities: [
                "Served as team lead for an IoT-based government collaborative project",
                "Gained hands-on experience with Python and its libraries for backend development",
                "Published research in IJSRD, Vol-8 Issue 10, Dec-2020 journal",
                "Delivered innovative solutions meeting government requirements",
            ],
            features: ["IoT innovation", "Government standards", "Research-driven dev"],
            technologies: ["IoT", "Python", "Research", "Team Leadership"],
        },
        {
            type: "Training",
            company: "PIALGO Solutions",
            position: "UI/UX Frontend Trainee",
            duration: "Sep 2017 – Jul 2018",
            description: "Received professional training in frontend development and UI/UX principles.",
            responsibilities: [
                "Worked on modules of major projects for various clients",
                "Received professional training in front-end technologies and design principles",
                "Collaborated with a team of four to design user interfaces",
                "Focused on usability and aesthetic appeal in application design",
            ],
            features: ["Design principles", "Client-centric UI", "UX thinking"],
            technologies: ["UI/UX Design", "Frontend Development", "Client Projects", "Team Collaboration"],
        },
    ];

    return (
        <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-teal-900 mb-4">
                        <span className="text-teal-600">Internships</span> & Training
                    </h1>
                    <div className="w-24 h-1.5 bg-teal-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-teal-700 max-w-3xl mx-auto">
                        My early career experiences that shaped my professional journey
                    </p>
                </div>

                {/* Experience Cards */}
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative group">
                            {/* Card */}
                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-teal-50 overflow-hidden">
                                {/* Ribbon for type */}
                                <div
                                    className={`absolute top-0 right-0 px-4 py-1 text-xs font-bold text-white ${
                                        exp.type === "Internship" ? "bg-teal-600" : "bg-emerald-600"
                                    }`}
                                >
                                    {exp.type}
                                </div>

                                {/* Header */}
                                <div className="pr-10">
                                    <h3 className="text-xl font-bold text-teal-800">{exp.position}</h3>
                                    <h4 className="text-lg font-semibold text-teal-700">{exp.company}</h4>
                                    <p className="text-sm text-teal-500 mb-3">{exp.duration}</p>
                                    <p className="text-gray-700 mb-4">{exp.description}</p>
                                </div>

                                {/* Responsibilities */}
                                <div className="mb-4">
                                    <h5 className="text-sm font-semibold text-teal-700 uppercase tracking-wider mb-2">
                                        Key Contributions
                                    </h5>
                                    <ul className="space-y-2">
                                        {exp.responsibilities.map((item, i) => (
                                            <li key={i} className="flex items-start">
                                                <div className="flex-shrink-0 mt-1.5">
                                                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                                                </div>
                                                <p className="ml-2 text-gray-700">{item}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div className="pt-3 border-t border-teal-100">
                                    <h5 className="text-sm font-semibold text-teal-700 uppercase tracking-wider mb-2">
                                        Skills Gained
                                    </h5>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-xs font-medium px-3 py-1 bg-teal-100 text-teal-700 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="pt-3 border-t border-teal-100 mt-4">
                                    <h5 className="text-sm font-semibold text-teal-700 uppercase tracking-wider mb-2">
                                        Key Highlights
                                    </h5>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.features.map((item, i) => (
                                            <span
                                                key={i}
                                                className="text-xs font-medium px-3 py-1 bg-teal-50 text-teal-800 border border-teal-200 rounded-full"
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
