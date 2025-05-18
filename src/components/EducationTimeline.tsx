import React from "react";

interface EducationEntry {
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
        <h2 className="text-4xl font-bold text-teal-800 mb-10 text-center">
          Education <span className="text-teal-600">Timeline</span>
        </h2>
        <div className="space-y-10">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative border-l-4 border-teal-500 pl-6 pb-6"
            >
              <div className="absolute -left-2 top-1.5 w-4 h-4 bg-teal-500 rounded-full shadow-md"></div>
              <p className="text-sm text-gray-500 mb-1">{edu.duration}</p>
              <h3 className="text-xl font-semibold text-teal-700">{edu.degree}</h3>
              <p className="text-md text-teal-900 mb-1">{edu.university}</p>
              {edu.gpa && <p className="text-sm text-gray-600 mb-2">{edu.gpa}</p>}
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
                {edu.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              {edu.projects && (
                <>
                  <h4 className="text-sm font-semibold text-teal-600 mt-2">Key Projects:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
                    {edu.projects.map((proj, i) => (
                      <li key={i}>{proj}</li>
                    ))}
                  </ul>
                </>
              )}
              {edu.technologies && (
                <p className="text-sm text-gray-800">
                  <strong>Technologies:</strong> {edu.technologies.join(", ")}
                </p>
              )}
              {edu.extracurriculars && (
                <>
                  <h4 className="text-sm font-semibold text-teal-600 mt-2">Extracurriculars:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {edu.extracurriculars.map((activity, i) => (
                      <li key={i}>{activity}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationTimeline;
