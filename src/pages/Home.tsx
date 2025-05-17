import AISkillsDashboardSection from "../components/AISkillsDashboardSection";
import PageHeader from "../components/PageHeader";
import { ProjectsShowcase } from "../components/ProjectsShowcase";
import TechnologiesDashboard from "../components/TechnologiesDashboard";

const Home = () => {
    return (
        <div className="container-fluid">
            <PageHeader />
            <ProjectsShowcase />
            <TechnologiesDashboard />
            <AISkillsDashboardSection />
        </div>
    );
};

export default Home;
