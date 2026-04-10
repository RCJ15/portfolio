import { Route, Routes } from "react-router-dom"
import './app.css'

import Navbar from "./navbar"
import Home from "./pages/home"
import About from "./pages/about"
import Footer from "./footer"

function App() {
  
  return (
    <div className="body">
      <Navbar/>
      
      <div className="main">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>

      <Footer/>
    </div>
  )
}

export default App
