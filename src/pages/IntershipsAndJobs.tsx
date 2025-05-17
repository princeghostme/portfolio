import Internship from '../components/Internship'
import WorkExperience from '../components/WorkExperience'
import { FaBriefcase, FaUserGraduate } from 'react-icons/fa'

const InternshipsAndJobs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mt-10">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-purple-600">Professional Journey</span>
          </h1>
          <div className="w-24 h-1.5 bg-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A timeline of my career growth through internships and professional work experiences
          </p>
        </div>

        {/* Experience Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            <a
              href="#work-experience"
              className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-l-lg bg-purple-600 text-white"
            >
                <FaBriefcase className="mr-2" />
              Work Experience
            </a>
            <a
              href="#internships"
              className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-r-lg bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              <FaUserGraduate className="mr-2" />
              Internships
            </a>
          </div>
        </div>

        <section id="work-experience" className="scroll-mt-20">
            <WorkExperience />
          </section>

        <div className="space-y-20">
          <section id="internships" className="scroll-mt-20">
            <Internship />
          </section>

          
        </div>
      </div>
    </div>
  )
}

export default InternshipsAndJobs
