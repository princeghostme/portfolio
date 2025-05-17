import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';
import InternshipsAndJobs from '../pages/IntershipsAndJobs';
import Projects from '../pages/Projects';
import AboutMe from '../pages/AboutMe';
import Skills from '../pages/Skills';


const AppRouter: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/work' element={<InternshipsAndJobs />}></Route>
    <Route path='/projects' element={<Projects />}></Route>
    <Route path="/aboutme" element={<AboutMe />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);

export default AppRouter;
