import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import BlogHome from './Components/BlogHome'
import HomePage from './Components/HomePage'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import BlogPage from './Components/BlogPage'

function App() {

  return (
    <>
    
    <Router>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/bloghome" element={<BlogHome />}></Route>
        <Route path="/blogpage/:id" element={<BlogPage />}></Route>
        
      </Routes>
    
    
    </Router>
    
    </>
        

  )
}

export default App
