
interface ProjectDetail {
  id: number;
  name: string;
  description?: string;
  technologies?: string[];
  feature: string[];
  duration: string;
  role?: string;
}

const items: ProjectDetail[] = [
  {
    id: 1,
    name: "Lease and Rent System",
    description: "A comprehensive system for property management companies to handle lease agreements and rent collection with automated workflows and integrations with Microsoft 365 services.",
    technologies: [ ".NET Core 6 with MVC", "Azure SQL", "Power Automate", "SharePoint", "Entity Framework Core", "Azure App Services"],
    role: "Full-stack Developer",
    feature: [
      "Designed and implemented lease creation module with customizable templates",
      "Developed rent transaction processing with receipt generation",
      "Integrated with SharePoint for document storage and version control",
      "Automated reminder notifications and late fee calculations using Power Automate",
      "Built RESTful APIs with .NET Core 6 and Entity Framework Core",
      "Implemented role-based access control with Azure AD integration",
      "Optimized database performance with Azure SQL indexing strategies",
      "Created responsive UI components with Angular Material",
    ],
    duration: "Oct 2023",
  },
  {
    id: 2,
    name: "Document Management System",
    description: "Enterprise-grade document management solution with advanced security features and high availability storage for financial sector client.",
    technologies: ["React", ".NET Core 6", "Azure Blob Storage", "Amazon S3", "Azure AD", "Redis Cache", "Elastic Search"],
    role: "Backend Lead",
    feature: [
      "Architected document storage system using Azure Blob Storage with tiered storage",
      "Implemented document versioning and audit trails",
      "Developed advanced search functionality with Azure Search integration",
      "Created granular permission system with hierarchical access controls",
      "Optimized performance with Redis caching for frequent documents",
      "Implemented document preview generation for common file types",
      "Designed automated retention policy enforcement",
    ],
    duration: "Nov 2022 – Mar 2023",
  },
  {
    id: 3,
    name: "Ticketing Tool",
    description: "Internal support ticket management system with email integration and SLA tracking for IT service desk.",
    technologies: ["React", ".NET Core 6", "MS Graph API", "Power Automate", "Azure SQL"],
    role: "Full-stack Developer",
    feature: [
      "Developed email parsing system to auto-create tickets from support emails",
      "Implemented SLA tracking with escalation workflows",
      "Created dashboard with real-time ticket metrics and KPIs",
      "Integrated with Microsoft Teams for internal notifications",
      "Built knowledge base integration for suggested solutions",
      "Developed automated ticket assignment based on skillset",
    ],
    duration: "Sep 2022 – Oct 2022",
  },
  {
    id: 4,
    name: "Leave Management System",
    description: "HR management tool for tracking employee leaves, approvals, and balancing with company policies and labor laws.",
    technologies: ["React", ".NET Core 6", "SQL", "Microsoft Power BI"],
    role: "Frontend Lead",
    feature: [
      "Developed leave request workflow with multi-level approvals",
      "Created calendar views for team availability",
      "Integrated with Azure AD for employee authentication",
      "Built accrual calculation engine for different leave types",
      "Developed reporting module with Power BI integration",
      "Implemented mobile-responsive design for on-the-go access",
    ],
    duration: "Jul 2022 – Aug 2022",
  },
  {
    id: 5,
    name: "Project Management System",
    description: "End-to-end project tracking solution for consulting firm with time tracking, resource allocation, and client billing features.",
    technologies: ["Angular", ".NET Core 6", "SQL Server", "JWT Authentication"],
    role: "Full-stack Developer",
    feature: [
      "Developed project estimation module with template system",
      "Created time tracking with calendar integration",
      "Built resource allocation views with drag-and-drop scheduling",
      "Implemented client billing with customizable invoice generation",
      "Developed dashboard with project health indicators",
      "Created API for integration with accounting software",
    ],
    duration: "Feb 2022 – Jul 2022",
  },
  {
    id: 6,
    name: "Employee Management and Payroll System",
    description: "Comprehensive HR system handling employee records, performance reviews, and payroll processing for mid-sized company.",
    technologies: ["Blazor", ".NET Core 6", "SQL Server", "Azure AD"],
    role: "Frontend Developer",
    feature: [
      "Developed employee profile management with document attachments",
      "Created performance review workflow with 360° feedback",
      "Built payroll processing module with tax calculation",
      "Implemented secure document storage for sensitive HR documents",
      "Developed organizational chart visualization",
      "Created reporting module for HR analytics",
    ],
    duration: "Feb 2021 – Jul 2021",
  },
  {
    id: 7,
    name: "Urban Clap UI",
    description: "Service marketplace UI redesign focusing on improved conversion rates and mobile experience.",
    technologies: ["Adobe XD", "HTML/CSS", "JavaScript", "Bootstrap"],
    role: "UI Designer",
    feature: [
      "Redesigned service booking flow improving conversion by 22%",
      "Created mobile-first responsive designs",
      "Developed design system with reusable components",
      "Conducted user testing to validate design decisions",
      "Created high-fidelity prototypes for developer handoff",
      "Optimized checkout process reducing abandonment",
    ],
    duration: "Oct 2017 – Jan 2018",
  },
  {
    id: 8,
    name: "Hospital Project UI (AIMS Ranchi)",
    description: "Patient management system interface for multi-specialty hospital with focus on accessibility and clinician workflow.",
    technologies: ["React",".Net 6","SSMS"],
    role: "UI/UX Designer",
    feature: [
      "Designed patient registration flow reducing time by 35%",
      "Created clinician dashboard prioritizing critical information",
      "Implemented accessibility features meeting WCAG 2.0 AA",
      "Developed medication tracking interface",
      "Designed emergency override workflows",
      "Created responsive designs for bedside terminals",
    ],
    duration: "Feb 2018 – Jul 2018",
  },
  {
    id: 9,
    name: "E-commerce Platform Migration",
    description: "Migration of legacy e-commerce system to modern microservices architecture with improved performance.",
    technologies: [".NET Core 7", "MongoDB","ClickHouse", "Redis"],
    role: "Frontend Specialist",
    feature: [
      "Led migration of UI components to Angular 16",
      "Improved page load performance by 40%",
      "Implemented lazy loading for product images",
      "Developed AB testing framework for UI changes",
      "Created responsive product configurator",
      "Integrated with new checkout microservice",
    ],
    duration: "Apr 2023 – Present",
  },
   {
    id: 11,
    name: "Fintech Trading and Investment Platform",
    description: "A robust trading and investment platform for Nuvama (formerly Edelweiss), providing real-time market data, portfolio management, and transaction tracking for retail and institutional investors.",
    technologies: ["React", ".NET Core 6, 8", "Mongo", "SQL", "Entity Framework Core", "Redis", "python"],
    role: "Full-stack Developer",
    feature: [
      "Implemented real-time market data updates using SignalR and Azure Service Bus",
      "Built secure transaction modules for equity, commodity, and derivatives trading",
      "Integrated Azure SQL with high-frequency data writes and optimized query performance",
      "Created dashboards for tracking portfolio performance and order histories",
      "Implemented advanced order types and stop-loss logic",
      "Built notification services for order confirmations and trade alerts via MS Graph API",
      "Ensured secure user access with Azure AD and JWT-based authentication",
      "Collaborated on API design and versioning for mobile and web platforms",
    ],
    duration: "Apr 2023 – Present",
  }
];


const ProjectCard: React.FC<{ project: ProjectDetail }> = ({ project }) => {
  return (
    <div className="group relative bg-white rounded-lg shadow-md border border-gray-200 hover:border-teal-400 transition-all duration-300 p-4 w-fit max-w-sm">
      <h3 className="text-base font-semibold text-gray-800 group-hover:text-teal-700 mb-1">
        {project.name}
      </h3>

      <div className="text-xs text-teal-600 font-medium mb-1">
        {project.duration}
      </div>

      {project.role && (
        <div className="text-xs text-gray-600 bg-gray-100 rounded px-2 py-0.5 inline-block mb-2">
          Role: {project.role}
        </div>
      )}

      <div className="flex flex-wrap gap-1 mt-1">
        {project.technologies?.slice(0, 4).map((tech, idx) => (
          <span
            key={idx}
            className="bg-teal-50 text-teal-700 text-[11px] px-2 py-0.5 rounded-md group-hover:bg-teal-100 transition-colors"
          >
            {tech}
          </span>
        ))}
        {project.technologies && project.technologies.length > 4 && (
          <span className="text-[11px] text-gray-500">+{project.technologies.length - 4} more</span>
        )}
      </div>
    </div>
  );
};


const ProjectDetails: React.FC<{ project: ProjectDetail }> = ({ project }) => {
  return (
    <div className="bg-white rounded-xl w-full shadow-md border border-gray-100 mb-8 overflow-hidden">
      <div className="p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-1">{project.name}</h2>
            <p className="text-teal-600 font-medium">{project.duration}</p>
          </div>
          {project.role && (
            <span className="bg-teal-100 text-teal-800 text-sm px-4 py-2 rounded-full font-medium">
              {project.role}
            </span>
          )}
        </div>

        {project.description && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100">
              Project Overview
            </h3>
            <p className="text-gray-700 leading-relaxed">{project.description}</p>
          </div>
        )}

        {project.technologies && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="bg-gradient-to-br from-teal-50 to-teal-100 text-teal-800 text-sm px-4 py-2 rounded-lg shadow-sm border border-teal-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100">
            Key Features & Contributions
          </h3>
          <ul className="space-y-4">
            {project.feature.map((feat, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 mt-1 mr-3">
                  <svg 
                    className="w-5 h-5 text-teal-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                </span>
                <span className="text-gray-700 leading-relaxed">{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const ProjectsShowcase: React.FC = () => {
  return (
    <div className="w-full py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-teal-600">Project Portfolio</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A collection of my professional work showcasing full-stack development expertise with Angular and .NET Core
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <ProjectCard key={item.id} project={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const ProjectsShowcaseLarge: React.FC = () => {
  return (
    <div className="w-full py-10 mt-5">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Project <span className="text-teal-600">Details</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Detailed view of my professional projects with technologies used and key contributions
          </p>
        </div>
        <div className="space-y-8">
          {items.reverse().map((item) => (
            <ProjectDetails key={item.id} project={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
