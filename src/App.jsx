import './App.css'
import { ThemeProvider } from './components/theme-provider'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectView from './pages/ProjectView'
import Footer from './pages/sub-components/Footer'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from './pages/sub-components/Navbar'
import PageNotFound from './pages/sub-components/PageNotFound'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" >
      <Router>
        
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project/:name' element={<ProjectView />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
        <Footer />
        <ToastContainer position='bottom-right' defaultTheme="dark" storageKey="vite-ui-theme" />
      </Router>
    </ThemeProvider>
  )
}

export default App
