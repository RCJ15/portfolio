import { Route, Routes } from "react-router-dom"
import { Tooltip } from "react-tooltip"
import './app.css'

import Navbar from "./Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Footer from "./Footer"

function App() {
  
  return (
    <div className="body">
			<Tooltip id="tooltip" />
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
