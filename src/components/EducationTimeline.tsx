import React from "react";
import EducationCard from "./EducationCard";

export interface EducationEntry {
  duration: string;
  degree: string;
  university: string;
  highlights: string[];
  gpa?: string;
  projects?: string[];
  technologies?: string[];
  extracurriculars?: string[];
}

const educationData: EducationEntry[] = [
  {
    duration: "2019 – 2021",
    degree: "Master of Computer Application (MCA)",
    university: "Reva University, Bengaluru",
    highlights: [
      "Specialized in Full Stack Development, Software Engineering, and Distributed Systems.",
      "Strong foundation in Microservices Architecture and Cloud Computing.",
      "Participated in multiple coding hackathons and algorithmic contests.",
    ],
    projects: [
      "Built full-stack applications with .NET Core and modern frontend frameworks.",
      "Developed systems focusing on scalability and performance optimization."
    ],
    technologies: ["ASP.NET Core", "React", "Angular", "SQL Server", "Azure", "Docker"],
  },
  {
    duration: "2016 – 2019",
    degree: "Bachelor of Computer Application (BCA)",
    university: "ICFAI University, Bengaluru",
    highlights: [
      "Built strong foundation in Object-Oriented Programming, DBMS, and Web Development.",
      "Excelled in software engineering principles and design patterns.",
      "Participated in tech competitions and contributed to academic projects."
    ],
    projects: [
      "Developed multiple web applications using contemporary technologies.",
      "Contributed to group projects on system design and architecture."
    ],
    technologies: ["Java", "Python", "PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
  },
];


const EducationTimeline: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <h2 className="text-4xl font-bold text-purple-800 mb-10 text-center">
          Education <span className="text-purple-600">Timeline</span>
        </h2>
        <div className="space-y-10">
          {educationData.map((edu, index) => (
            <EducationCard key={index} education={edu} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationTimeline;