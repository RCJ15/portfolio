import { useNavigate } from "react-router-dom"
import './home.css'

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about/", { viewTransition: true });
  };
  
  return (
    <>
      <div>
        <h1>This is the HOME page</h1>
      </div>
      <button className="button"
        onClick={handleClick}
        >
        GO to ABOUT!
      </button>
    </>
  )
}

export default Home
