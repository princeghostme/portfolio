import { BrowserRouter as Router } from 'react-router-dom'
import { TopNavBar } from './components/FloatingNavBar'
import AppRouter from './routers/AppRouter'
import ContactMe from './components/ContactMe '

const App = () => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <Router>
        <TopNavBar></TopNavBar>
        <AppRouter></AppRouter>
        <ContactMe></ContactMe>
        
        {/* Copyright Footer */}
        <footer className="py-4 text-center text-sm text-gray-500">
          <div className="container mx-auto px-4">
            <p>© {currentYear} All Rights Reserved. Designed and Developed by Prince Yadav</p>
          </div>
        </footer>
      </Router>
    </>
  )
}

export default App