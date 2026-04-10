import { useNavigate } from "react-router-dom"
import './about.css'

function About() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/", { viewTransition: true });
  };
  
  return (
    <>
      <div>
        <h1>This is the about page</h1>
      </div>
      <button className="button"
        onClick={handleClick}
        >
        GO Back
      </button>
    </>
  )
}

export default About
