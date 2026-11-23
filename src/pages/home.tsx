import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion";
import ProjectOverview from "./projects/ProjectOverview";
import GamesProjectOverview from "./projects/games/GamesProjectOverview";
import './Home.css'

import Selfie from "../assets/selfie.png"
import Icon from "../Icon";
import Button from "../Button";
import YoutubeEmbed from "../YoutubeEmbed";
import TextBlock from "../TextBlock";

function Home() {
  const navigate = useNavigate();

  const goto = (route: string) => {
    navigate(`${route}`, { viewTransition: true });
  };
  
  const openLink = (link: string) => {
    window.open(`${link}`, '_blank', 'noopener,noreferrer');
  };

  const gotoAbout = () => goto("/about/");

  /*
  const introText =
    `I'm <b>Ruben</b>, an Audio Programmer based in Sweden. Currently studying Game Development at Stockholm University.
    
    I have a strong passion for creating immersive and unique audio experiences in games, and I specialize in implementing complex audio systems that enhance the overall gameplay experience.
    
    I have experience in using various DAWs (such as Reaper and FL Studio) for both sound design and music composition, and I enjoy working on all aspects of game audio, from creating sound effects to implementing complex audio systems via middleware such as FMOD.
    `

    */
    //I specialize in creating robust developer tools and individual systems that enhance productivity, but I also enjoy working on gameplay features and mechanics.

  return (
    <>
      <div className="homeMain">
        <h1>Hello!</h1>
        <div className="selfieContainer">
          <img src={Selfie} alt="Selfie" className="selfie" />
          <YoutubeEmbed embedId="Mq2UhdkExYY" width="560" height="315" />
        </div>
        <TextBlock style={{maxWidth:"1000px"}}>
          <p>I'm <b>Ruben</b>, a <b>Game Audio Programmer</b> based in Sweden, Stockholm. Currently studying <b>Game Development</b> at <b>Stockholm University</b>.</p>
          <br/>
          <p>I have experience in using various <b>DAWs</b> (such as <b>Reaper</b> and <b>FL Studio</b>) for both <b>sound design</b> and <b>music composition</b>, and I enjoy working on all aspects of game audio, from creating sound effects to implementing complex audio systems via <b>middleware</b> such as <b>FMOD</b>.</p>
        </TextBlock>
      </div>
      {/*
      <Button
        onClick={gotoAbout}
        tooltip="What does this guy even do?"
      >
        About me
      </Button>

      <br />
      */}
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
