import AISkillsDashboardSection from "../components/AISkillsDashboardSection";
import PageHeader from "../components/PageHeader";
import { ProjectsShowcase } from "../components/ProjectsShowcase";
import TechnologiesDashboard from "../components/TechnologiesDashboard";
import ProjectMethodology from "../components/ProjectMethodology";

const Home = () => {
    return (
        <div className="container-fluid">
            <PageHeader />
            <ProjectsShowcase />
            <ProjectMethodology />
            <TechnologiesDashboard />
            <AISkillsDashboardSection />
        </div>
    );
};

export default Home;
