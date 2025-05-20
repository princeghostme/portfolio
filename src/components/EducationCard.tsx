import React from "react";
import type { EducationEntry } from "./EducationTimeline";

interface EducationCardProps {
  education: EducationEntry;
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => (
  <div className="relative border-l-4 border-purple-500 pl-6 pb-6">
    <div className="absolute -left-2 top-1.5 w-4 h-4 bg-purple-500 rounded-full shadow-md"></div>
    <p className="text-sm text-gray-500 mb-1">{education.duration}</p>
    <h3 className="text-xl font-semibold text-purple-700">{education.degree}</h3>
    <p className="text-md text-purple-900 mb-1">{education.university}</p>
    {education.gpa && <p className="text-sm text-gray-600 mb-2">{education.gpa}</p>}
    
    <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
      {education.highlights.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
    
    {education.projects && (
      <>
        <h4 className="text-sm font-semibold text-purple-600 mt-2">Key Projects:</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
          {education.projects.map((proj, i) => (
            <li key={i}>{proj}</li>
          ))}
        </ul>
      </>
    )}
    
    {education.technologies && (
      <p className="text-sm text-gray-800">
        <strong>Technologies:</strong> {education.technologies.join(", ")}
      </p>
    )}
    
    {education.extracurriculars && (
      <>
        <h4 className="text-sm font-semibold text-purple-600 mt-2">Extracurriculars:</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {education.extracurriculars.map((activity, i) => (
            <li key={i}>{activity}</li>
          ))}
        </ul>
      </>
    )}
  </div>
);

export default EducationCard;