import { Link } from "react-router-dom";

const TechnologiesDashboard = () => {
    const categories = [
        { name: "Languages", count: 6 },
        { name: "Frameworks", count: 7 },
        { name: "Backend Technologies", count: 6 },
        { name: "Databases", count: 7 },
        { name: "Cloud & DevOps", count: 7 },
        { name: "Tools & Platforms", count: 8 },
        { name: "API Performance", count: 6 },
        { name: "UI/UX", count: 4 }
    ];

    return (
        <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
                        My <span className="text-rose-600">Technical Stack</span>
                    </h1>
                    <div className="w-24 h-1.5 bg-rose-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-rose-700 max-w-3xl mx-auto">
                        Overview of my technical expertise across different domains.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 border border-rose-50 hover:border-rose-100"
                        >
                            <h2 className="text-xl font-semibold text-rose-800 mb-2">{category.name}</h2>
                            <p className="text-rose-600">{category.count} skills</p>
                            <div className="mt-4 w-full bg-rose-50 rounded-full h-2.5">
                                <div 
                                    className="bg-rose-500 h-2.5 rounded-full" 
                                    style={{ width: `${Math.min(100, category.count * 10)}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link 
                        to="/skills" 
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-colors"
                    >
                        View Full Technical Breakdown
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TechnologiesDashboard;