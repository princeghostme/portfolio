import React from "react";
import AboutHeader from "../components/AboutHeader";
import ContactInfo from "../components/ContactInfo";
import ProfessionalSummary from "../components/ProfessionalSummary";
import EducationTimeline from "../components/EducationTimeline";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className=" mx-auto mt-10 space-y-8">
        <AboutHeader />
        <ContactInfo />
        <ProfessionalSummary />
        <EducationTimeline />
      </div>
    </div>
  );
};

export default AboutPage;