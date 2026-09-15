import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion";
import ProjectOverview from "./projects/ProjectOverview";
import GamesProjectOverview from "./projects/games/GamesProjectOverview";
import './Home.css'

import Selfie from "../assets/selfie.png"
import Icon from "../Icon";
import Button from "../Button";

function Home() {
  const navigate = useNavigate();

  const goto = (route: string) => {
    navigate(`${route}`, { viewTransition: true });
  };
  
  const openLink = (link: string) => {
    window.open(`${link}`, '_blank', 'noopener,noreferrer');
  };

  const gotoAbout = () => goto("/about/");

  const introText =
    `I'm Ruben, a Game Programmer based in Sweden. Currently studying Game Developement at Stockholm University.

    This website is under construction! Will finish this later...
        `

    //I specialize in creating robust developer tools and individual systems that enhance productivity, but I also enjoy working on gameplay features and mechanics.

  return (
    <>
      <div className="homeMain">
        <h1>Hello!</h1>
        <img src={Selfie} alt="Selfie" className="selfie" />
        <p className="textBlock">{introText}</p>
      </div>
      <Button
        onClick={gotoAbout}
        tooltip="What does this guy even do?"
      >
        About me
      </Button>

      <br />
      <br />

      <motion.div
        className="scrollText"
        animate={{
          y: [0, 5, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Icon src="arrow" className="arrow" />
        <div>Scroll down to see my latest works!</div>
        <Icon src="arrow" className="arrow" />
      </motion.div>

      <br/>

      <GamesProjectOverview/>
    </>
  )
}

export default Home
