import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';
import InternshipsAndJobs from '../pages/IntershipsAndJobs';
import Projects from '../pages/Projects';
import AboutMe from '../pages/AboutMe';
import { useEffect } from 'react';
import Skills from '../pages/Skills';


const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppRouter: React.FC = () => (
  <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/work' element={<InternshipsAndJobs />}></Route>
      <Route path='/projects' element={<Projects />}></Route>
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </>

);

export default AppRouter;
