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
    duration: "Aug 2019 – Jul 2021",
    degree: "Master of Computer Application (MCA)",
    university: "Reva University, Bangalore",
    gpa: "CGPA: 8.7/10",
    highlights: [
      "Specialized in Full Stack Development, Software Engineering, and Cloud Computing.",
      "Participated in multiple coding hackathons and algorithmic contests.",
    ],
    projects: [
      "Developed a Document Management System using .NET Core and Angular.",
      "Built a Leave Management System integrated with Azure SQL and Blob Storage."
    ],
    technologies: ["ASP.NET Core", "Angular", "SQL Server", "Azure", "Git"],
    extracurriculars: [
      "Represented university in inter-college tech fest.",
      "Volunteered as technical coordinator in MCA Department Club."
    ],
  },
  {
    duration: "Aug 2016 – Jul 2019",
    degree: "Bachelor of Computer Application (BCA)",
    university: "ICFAI University, Bangalore",
    gpa: "CGPA: 8.4/10",
    highlights: [
      "Built a strong foundation in Object-Oriented Programming, DBMS, and Web Development.",
      "Completed mini-projects each semester based on Java and MySQL."
    ],
    projects: [
      "Created a Student Feedback Portal using PHP and MySQL.",
      "Contributed to a group project on E-commerce website development."
    ],
    technologies: ["Java", "C++", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    extracurriculars: [
      "Participated in debugging competitions and seminars.",
      "Member of Web Development Club."
    ],
  },
  {
    duration: "Apr 2015 – Jun 2016",
    degree: "Higher Secondary Education (Class XII, PCM)",
    university: "Army Public School, CBSE Board",
    gpa: "Percentage: 86%",
    highlights: [
      "Completed with Physics, Chemistry, and Mathematics as core subjects.",
      "Excelled in Computer Science elective with programming assignments in C++."
    ],
    extracurriculars: [
      "Member of the school quiz and robotics team.",
      "Completed a summer course in Basic Web Development."
    ],
  },
  {
    duration: "Apr 2012 – Mar 2013",
    degree: "Secondary School (Class X)",
    university: "Army Public School, CBSE Board",
    gpa: "CGPA: 9.2/10",
    highlights: [
      "Built strong basics in Mathematics and Logical Reasoning.",
      "Introduced to foundational programming and computer applications."
    ],
    extracurriculars: [
      "Active participant in inter-school tech and sports competitions.",
    ],
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