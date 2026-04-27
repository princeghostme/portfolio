import React from "react";
import AboutHeader from "../components/AboutHeader";
import ContactInfo from "../components/ContactInfo";
import ProfessionalSummary from "../components/ProfessionalSummary";
import EducationTimeline from "../components/EducationTimeline";
import Certifications from "../components/Certifications";
import KeyStrengths from "../components/KeyStrengths";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="mx-auto max-w-4xl mt-10 space-y-8">
        <AboutHeader />
        <ContactInfo />
        <ProfessionalSummary />
        <KeyStrengths />
        <Certifications />
        <EducationTimeline />
      </div>
    </div>
  );
};

export default AboutPage;