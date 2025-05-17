import ContactMe from './components/ContactMe '
import { TopNavBar } from './components/FloatingNavBar'
import AppRouter from './routers/AppRouter'

const App = () => {
  return (
    <>
      <TopNavBar></TopNavBar>
      <AppRouter></AppRouter>
      <ContactMe></ContactMe>
    </>
    
  )
}

export default App
