import { HashRouter } from 'react-router-dom'
import ContactMe from './components/ContactMe '
import { TopNavBar } from './components/FloatingNavBar'
import AppRouter from './routers/AppRouter'

const App = () => {
  return (
    <>
      <HashRouter>
        <TopNavBar></TopNavBar>
        <AppRouter></AppRouter>
        <ContactMe></ContactMe>
      </HashRouter>
    </>

  )
}

export default App
