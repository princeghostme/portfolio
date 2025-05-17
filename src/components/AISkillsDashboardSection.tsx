import React from "react";

const AISkillsDashboardSection: React.FC = () => {
    return (
        <div className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    AI for <span className="text-red-600">Productivity</span>
                </h2>
                <p className="text-md text-gray-600 max-w-2xl mx-auto">
                    Integrate AI to automate, accelerate, and optimize content creation, development tasks, and decision-making workflows.
                </p>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    <div>
                        <h3 className="text-red-700 font-semibold mb-2">Content Generation</h3>
                        <p className="text-gray-600 text-sm">
                            Generate articles, documentation, and summaries using smart AI prompts and templates.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-red-700 font-semibold mb-2">Developer Productivity</h3>
                        <p className="text-gray-600 text-sm">
                            Leverage AI for code generation, refactoring, debugging, and rapid prototyping.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-red-700 font-semibold mb-2">Workflow Automation</h3>
                        <p className="text-gray-600 text-sm">
                            Automate documentation, research synthesis, and team knowledge sharing via AI.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AISkillsDashboardSection;
