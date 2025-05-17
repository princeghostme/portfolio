import { BrowserRouter as Router } from 'react-router-dom'
import ContactMe from './components/ContactMe '
import { TopNavBar } from './components/FloatingNavBar'
import AppRouter from './routers/AppRouter'

const App = () => {
  return (
    <>
      <Router>
        <TopNavBar></TopNavBar>
        <AppRouter></AppRouter>
        <ContactMe></ContactMe>
      </Router>
    </>

  )
}

export default App
