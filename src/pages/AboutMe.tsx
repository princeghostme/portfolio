import React from "react";
import EducationTimeline from "../components/EducationTimeline";

const AboutMe: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto mt-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Prince Yaduvanshi
          </h1>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-4"></div>
          <p className="text-xl text-teal-600 font-medium">
            Full Stack Developer
          </p>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:yaduvanshiprince2007@gmail.com" className="text-teal-600 hover:underline">
                yaduvanshiprince2007@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-teal-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <a href="https://www.linkedin.com/in/prince-yadav-340b99134" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 7004571707</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Bangalore, India</span>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Professional Summary</h2>
          <p className="text-gray-700 mb-4">
            Dynamic Full Stack Developer with over 3 years of experience in crafting innovative software solutions and web applications. 
            Proficient in ASP.NET, ASP.NET Core, React, HTML, CSS, JavaScript, and Power Automate, with a strong focus on building scalable, maintainable applications.
          </p>
          <p className="text-gray-700">
            Successfully collaborated with diverse clients to design and implement web solutions. Known for effectively reducing project timelines while upholding high-quality standards and fostering team collaboration.
          </p>
        </div>

        <EducationTimeline />

      </div>
    </div>
  );
};

export default AboutMe;