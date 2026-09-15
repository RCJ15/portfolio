import { useNavigate } from "react-router-dom"
import './About.css'
import Button from "../Button";

function About() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/", { viewTransition: true });
  };
  
  const text =
  `First line
  Second line
  Third line
  `;
  
  const text2 =
  `Other first line
  Other second line
  Other third line
  `;

  return (
    <>
      <div className="aboutMain">
        <div className="mainText">About Me</div>
        <div className="lastUpdated">Last updated: 99th quintovembruary 2404</div>
        <p className="textBlock">{text}</p>
        <p className="textBlock">{text2}</p>
      </div>
      <Button
        onClick={handleClick}
        tooltip="Go back to the home page"
      >
        Go back
      </Button>
    </>
  )
}

export default About
