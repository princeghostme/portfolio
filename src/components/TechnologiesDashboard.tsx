import { Link } from "react-router-dom";
import { Star, StarHalf, StarOff } from "lucide-react";

const skills = [
    // Backend Technologies
    { name: "ASP.NET Core", rating: 5 },
    { name: "Node.js", rating: 4.5 },
    { name: "Express.js", rating: 4.5 },
    { name: "REST APIs", rating: 5 },
    { name: "GraphQL", rating: 3.5 },
    { name: "gRPC", rating: 3 },
    
    // Frontend Technologies
    { name: "React", rating: 4.5 },
    { name: "Angular", rating: 4 },
    { name: "TypeScript", rating: 4.5 },
    { name: "Next.js", rating: 3.5 },
    { name: "Redux", rating: 4 },
    
    // Databases
    { name: "SQL Server", rating: 5 },
    { name: "PostgreSQL", rating: 4.5 },
    { name: "MongoDB", rating: 4 },
    { name: "Cosmos DB", rating: 4 },
    { name: "Redis Caching", rating: 4.5 },
    
    // Cloud & Infrastructure
    { name: "Azure (App Service, Functions)", rating: 4.5 },
    { name: "AWS (EC2, S3, Lambda, RDS)", rating: 4 },
    { name: "Docker", rating: 4 },
    { name: "Kubernetes", rating: 3.5 },
    
    // Real-time & Messaging
    { name: "WebSockets", rating: 4 },
    { name: "SignalR", rating: 4 },
    { name: "Kafka", rating: 3.5 },
    { name: "Azure Service Bus", rating: 4 },
    
    // Architecture & Patterns
    { name: "Microservices", rating: 4.5 },
    { name: "Event-Driven Architecture", rating: 4 },
    { name: "CQRS Pattern", rating: 3.5 },
    { name: "API Gateway", rating: 4 },
    
    // Security & Auth
    { name: "JWT", rating: 4.5 },
    { name: "OAuth2 & OIDC", rating: 4 },
    { name: "Entra ID", rating: 4 },
    { name: "PASETO", rating: 3.5 },
    
    // AI & ML
    { name: "LangChain", rating: 3.5 },
    { name: "OpenAI API", rating: 3.5 },
    { name: "RAG (Retrieval-Augmented Generation)", rating: 3 },
    
    // DevOps & CI/CD
    { name: "CI/CD (GitHub Actions, Azure DevOps)", rating: 4 },
    { name: "Entity Framework Core", rating: 4.5 },
    { name: "Power Automate & SharePoint", rating: 4 },
];


const renderStars = (rating : number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars.push(<Star key={i} className="w-3 h-3 text-purple-500 fill-purple-500" />);
        } else if (rating >= i - 0.5) {
            stars.push(<StarHalf key={i} className="w-3 h-3 text-purple-500 fill-purple-500" />);
        } else {
            stars.push(<StarOff key={i} className="w-3 h-3 text-purple-300" />);
        }
    }
    return stars;
};

const TechnologiesDashboard = () => {
    return (
        <div className="mb-5 bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-2">
                    My <span className="text-purple-600">Core Skills</span>
                </h1>
                <p className="text-purple-700 text-base md:text-lg">
                    Here's a quick overview of my most proficient technologies.
                </p>
            </div>

            <div className="flex flex-wrap justify-evenly gap-4 max-w-7xl mx-auto">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-purple-50 rounded-xl p-2 px-5 my-2 mx-5 sm:my-1 sm:mx-2  shadow-sm hover:shadow-md transition"
                    >
                        <h2 className="text-sm font-semibold text-purple-800 text-center">
                            {skill.name}
                        </h2>
                        <div className="flex justify-center">{renderStars(skill.rating)}</div>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <Link
                    to="/skills"
                    className="inline-block px-6 py-2 text-white bg-purple-600 rounded-full hover:bg-purple-700 text-sm font-medium transition"
                >
                    View Full Skillset
                </Link>
            </div>
        </div>
    );
};

export default TechnologiesDashboard;
