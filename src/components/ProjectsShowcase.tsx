import type React from "react"

import { useState, useEffect, useRef, createRef } from "react"

interface ProjectDetail {
  id: number
  name: string
  description?: string
  technologies?: string[]
  feature: string[]
  duration: string
  role?: string
  startDate: Date
}

// Parse duration string into Date object for sorting
const parseDate = (dateStr: string): Date => {
  const dateRange = dateStr.split("–").map((d) => d.trim())
  const [startMonth, startYear] = dateRange[0].split(" ")
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const monthIndex = months.indexOf(startMonth)
  const yearNum = Number.parseInt(startYear || new Date().getFullYear().toString())
  return new Date(yearNum, monthIndex)
}

const items: ProjectDetail[] = [
  {
    id: 1,
    name: "Fintech Trading and Investment Platform",
    description:
      "A robust trading and investment platform for Nuvama (formerly Edelweiss), providing real-time market data, portfolio management, and transaction tracking for retail and institutional investors.",
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
    duration: "Dec 2023 – Mar 2025",
    startDate: parseDate("Dec 2023"),
  },
  {
    id: 2,
    name: "Lease and Rent System",
    description:
      "A comprehensive system for property management companies to handle lease agreements and rent collection with automated workflows and integrations with Microsoft 365 services.",
    technologies: [
      ".NET Core 6 with MVC",
      "Azure SQL",
      "Power Automate",
      "SharePoint",
      "Entity Framework Core",
      "Azure App Services",
    ],
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
    duration: "Jan 2023 - Dec 2023",
    startDate: parseDate("Jan 2023"),
  },
  {
    id: 3,
    name: "Document Management System",
    description:
      "Enterprise-grade document management solution with advanced security features and high availability storage for financial sector client.",
    technologies: [
      "React",
      ".NET Core 6",
      "Azure Blob Storage",
      "Amazon S3",
      "Azure AD",
      "Redis Cache",
      "Elastic Search",
    ],
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
    duration: "Sep 2022 – Apr 2023",
    startDate: parseDate("Sep 2022"),
  },
  {
    id: 4,
    name: "Ticketing Tool",
    description:
      "Internal support ticket management system with email integration and SLA tracking for IT service desk.",
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
    duration: "Mar 2022 – Oct 2022",
    startDate: parseDate("Mar 2022"),
  },
  {
    id: 5,
    name: "Leave Management System",
    description:
      "HR management tool for tracking employee leaves, approvals, and balancing with company policies and labor laws.",
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
    startDate: parseDate("Jul 2022"),
  },
  {
    id: 6,
    name: "Project Management System",
    description:
      "End-to-end project tracking solution for consulting firm with time tracking, resource allocation, and client billing features.",
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
    startDate: parseDate("Feb 2022"),
  },
  {
    id: 7,
    name: "Employee Management and Payroll System",
    description:
      "Comprehensive HR system handling employee records, performance reviews, and payroll processing for mid-sized company.",
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
    startDate: parseDate("Feb 2021"),
  },
  {
    id: 8,
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
    startDate: parseDate("Oct 2017"),
  },
  {
    id: 9,
    name: "Hospital Management System",
    description:
      "Patient management system interface for multi-specialty hospital with focus on accessibility and clinician workflow.",
    technologies: ["React", ".Net 6", "SSMS"],
    role: "UI/UX Designer, java, SQL",
    feature: [
      "Designed patient registration flow reducing time by 35%",
      "Created clinician dashboard prioritizing critical information",
      "Implemented accessibility features meeting WCAG 2.0 AA",
      "Developed medication tracking interface",
      "Designed emergency override workflows",
      "Created responsive designs for bedside terminals",
    ],
    duration: "Feb 2018 – Jul 2018",
    startDate: parseDate("Feb 2018"),
  },
].sort((a, b) => b.startDate.getTime() - a.startDate.getTime())

const FloatingMenu: React.FC<{
  projects: ProjectDetail[]
  activeId: number | null
  scrollToProject: (id: number) => void
}> = ({ projects, activeId, scrollToProject }) => {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      // Only hide if scrolling down more than 100px
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false)
      } else {
        setVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <div
      ref={menuRef}
      className={`fixed right-4 bottom-4 transition-all duration-300 z-50 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-4 max-h-[70vh] overflow-y-auto w-64">
        <h3 className="font-bold text-gray-800 mb-3 sticky top-0 bg-white pb-2 border-b border-gray-100">
          Projects Navigation
        </h3>
        <ul className="space-y-1">
          {projects.map((project) => (
            <li key={project.id}>
              <button
                onClick={() => scrollToProject(project.id)}
                className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors w-full text-left ${
                  activeId === project.id
                    ? "bg-purple-50 text-purple-800 font-medium border border-purple-200"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <span className="truncate">{project.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const ProjectCard: React.FC<{
  project: ProjectDetail
  onClick: () => void
}> = ({ project, onClick }) => {
  return (
    <div
      className="group relative bg-white rounded-lg shadow-md border border-gray-200 hover:bg-purple-50 transition-all duration-300 p-5 lg:w-fit sm:w-full m-5 mx-2 cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-base font-semibold text-gray-800 group-hover:text-purple-700 mb-1">{project.name}</h3>
      <div className="text-xs text-purple-600 font-medium mb-1">{project.duration}</div>
      {project.role && (
        <div className="text-xs text-gray-600 bg-gray-100 rounded px-2 py-0.5 inline-block mb-2">
          Role: {project.role}
        </div>
      )}
      <div className="flex flex-wrap gap-1 mt-1">
        {project.technologies?.slice(0, 4).map((tech, idx) => (
          <span
            key={idx}
            className="bg-purple-50 text-purple-700 text-[11px] px-2 py-0.5 rounded-md group-hover:bg-purple-100 transition-colors"
          >
            {tech}
          </span>
        ))}
        {project.technologies && project.technologies.length > 4 && (
          <span className="text-[11px] text-gray-500">+{project.technologies.length - 4} more</span>
        )}
      </div>
    </div>
  )
}

const ProjectDetails: React.FC<{
  project: ProjectDetail
  projectRef: React.RefObject<HTMLDivElement | null>
}> = ({ project, projectRef }) => {
  return (
    <section ref={projectRef} className="scroll-mt-24 mb-12">
      <div className="bg-white rounded-xl w-full shadow-md border border-gray-100 overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{project.name}</h2>
              <p className="text-purple-600 font-medium">{project.duration}</p>
            </div>
            {project.role && (
              <span className="bg-purple-100 text-purple-800 text-sm px-4 py-2 rounded-full font-medium">
                {project.role}
              </span>
            )}
          </div>

          {project.description && (
            <div className="mt-6">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100">
                Project Overview
              </h3>
              <p className="text-gray-700 leading-relaxed">{project.description}</p>
            </div>
          )}

          {project.technologies && (
            <div className="mt-6">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-br from-purple-50 to-purple-100 text-purple-800 text-sm px-3 py-1.5 rounded-lg shadow-sm border border-purple-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100">
              Key Features & Contributions
            </h3>
            <ul className="space-y-3">
              {project.feature.map((feat, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-3">
                    <svg
                      className="w-5 h-5 text-purple-500"
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
    </section>
  )
}

export const ProjectsShowcase: React.FC = () => {
  const projectsLargeRef = useRef<HTMLDivElement>(null)

  const scrollToProjectsLarge = (projectId: number) => {
    if (projectsLargeRef.current) {
      projectsLargeRef.current.scrollIntoView({ behavior: "smooth" })

      // After scrolling to the projects section, find the specific project
      setTimeout(() => {
        const projectElement = document.querySelector(`[data-project-id="${projectId}"]`)
        if (projectElement) {
          projectElement.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }, 500)
    }
  }

  return (
    <div className="w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-purple-600">Project Portfolio</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A collection of my professional work showcasing full-stack development expertise with modern technologies
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <ProjectCard key={item.id} project={item} onClick={() => scrollToProjectsLarge(item.id)} />
          ))}
        </div>
      </div>
    </div>
  )
}

export const ProjectsShowcaseLarge: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null)
  const projectRefs = useRef(items.map(() => createRef<HTMLDivElement>()))
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = Number.parseInt(entry.target.getAttribute("data-project-id") || "0")
            if (projectId) {
              setActiveId(projectId)
            }
          }
        })
      },
      { threshold: 0.5, rootMargin: "-100px 0px -100px 0px" },
    )

    const currentObserver = observerRef.current

    projectRefs.current.forEach((ref, index) => {
      if (ref.current) {
        ref.current.setAttribute("data-project-id", items[index].id.toString())
        currentObserver.observe(ref.current)
      }
    })

    return () => {
      if (currentObserver) currentObserver.disconnect()
    }
  }, [])

  const scrollToProject = (id: number) => {
    const index = items.findIndex((item) => item.id === id)
    if (index !== -1 && projectRefs.current[index].current) {
      projectRefs.current[index].current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div className="w-full py-10 bg-gray-50 relative">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Project <span className="text-purple-600">Details</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Detailed view of my professional projects with technologies used and key contributions
          </p>
        </div>
        <div className="space-y-8">
          {items.map((item, index) => (
            <div key={item.id} data-project-id={item.id}>
              <ProjectDetails project={item} projectRef={projectRefs.current[index]} />
            </div>
          ))}
        </div>
      </div>
      <FloatingMenu projects={items} activeId={activeId} scrollToProject={scrollToProject} />
    </div>
  )
}
