import { Route, Routes, ScrollRestoration } from "react-router-dom"
import { Tooltip } from "react-tooltip"
import './App.css'

import Navbar from "./Navbar"

import Home from "./pages/Home"
import About from "./pages/About"

import ProjectOverview from "./pages/projects/ProjectOverview"
import GamesProjectOverview from "./pages/projects/games/GamesProjectOverview"
import PortalPacker from "./pages/projects/games/PortalPacker";
import BoxBreak from "./pages/projects/games/BoxBreak";
import Debris from "./pages/projects/games/Debris";
import NighttimeVillage from "./pages/projects/other/NighttimeVillage";

import Footer from "./Footer"

function App() {

  return (
    <div className="body">
      <Tooltip id="tooltip" />
      <Navbar />

      <div className="main">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/projects" element={<GamesProjectOverview />} />
          <Route path="/projects/games/portal-packer" element={<PortalPacker />} />
          <Route path="/projects/games/boxbreak" element={<BoxBreak />} />
          <Route path="/projects/games/debris" element={<Debris />} />
          <Route path="/projects/games/nighttime-village" element={<NighttimeVillage />} />
        </Routes>

      </div>

      <br />

      <Footer />
    </div>
  )
}

export default App
