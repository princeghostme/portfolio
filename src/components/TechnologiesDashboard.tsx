import { Link } from "react-router-dom";
import { Star, StarHalf, StarOff } from "lucide-react";

const skills = [
    { name: "ASP.NET Core", rating: 5 },
    { name: "REST & Web API", rating: 5 },
    { name: "Entity Framework", rating: 4.5 },
    { name: "React", rating: 4 },
    { name: "Angular", rating: 3.5 },
    { name: "JavaScript/TypeScript", rating: 4 },
    { name: "SQL Server", rating: 4.5 },
    { name: "PostgreSQL", rating: 3.5 },
    { name: "Azure Functions", rating: 4 },
    { name: "Azure DevOps", rating: 4 },
    { name: "Blob Storage", rating: 4 },
    { name: "Docker", rating: 3.5 },
    { name: "Cosmos DB", rating: 3 },
    { name: "Redis Caching", rating: 3.5 },
    { name: "Microservices Architecture", rating: 4 },
    { name: "CI/CD Pipelines", rating: 4 },
    { name: "SignalR/WebSockets", rating: 3.5 },
    { name: "Authentication (JWT/OAuth)", rating: 4 },
    { name: "Power Automate / SharePoint", rating: 4 },
    { name: "Dapper ORM", rating: 3.5 },
];


const renderStars = (rating : number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars.push(<Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />);
        } else if (rating >= i - 0.5) {
            stars.push(<StarHalf key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />);
        } else {
            stars.push(<StarOff key={i} className="w-3 h-3 text-gray-300" />);
        }
    }
    return stars;
};

const TechnologiesDashboard = () => {
    return (
        <div className="mb-5 bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-teal-900 mb-2">
                    My <span className="text-teal-600">Core Skills</span>
                </h1>
                <p className="text-teal-700 text-base md:text-lg">
                    Here's a quick overview of my most proficient technologies.
                </p>
            </div>

            <div className="flex flex-wrap justify-evenly gap-4 max-w-7xl mx-auto">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-teal-50 rounded-xl p-2 px-5 my-2 mx-5 shadow-sm hover:shadow-md transition"
                    >
                        <h2 className="text-sm font-semibold text-teal-800 text-center">
                            {skill.name}
                        </h2>
                        <div className="flex justify-center">{renderStars(skill.rating)}</div>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <Link
                    to="/skills"
                    className="inline-block px-6 py-2 text-white bg-teal-600 rounded-full hover:bg-teal-700 text-sm font-medium transition"
                >
                    View Full Skillset
                </Link>
            </div>
        </div>
    );
};

export default TechnologiesDashboard;
