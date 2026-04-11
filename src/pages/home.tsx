import { useNavigate } from "react-router-dom"
import ProjectPage from "./projects/ProjectPage";
import './Home.css'

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about/", { viewTransition: true });
  };

  const introText = 
  `Lorem ipsum dolor sit amet consectetur adipiscing elit.
  Quisque faucibus ex sapien vitae pellentesque sem placerat.
  In id cursus mi pretium tellus duis convallis.
  Tempus leo eu aenean sed diam urna tempor.
  
  Scroll down to see my latest works!
  `
  
  return (
    <>
      <div className="homeMain">
        <h1>Hello!</h1>
        <p className="textBlock">{introText}</p>
      </div>
      <button className="button"
        onClick={handleClick}
        data-tooltip-id="tooltip"
        data-tooltip-content="What does this guy even do?"
        >
        About Me
      </button>

      <br/>

      <div className="projects">
        <ProjectPage title="Hello"></ProjectPage>
      </div>
    </>
  )
}

export default Home
