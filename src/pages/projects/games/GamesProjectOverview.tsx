import { useNavigate } from "react-router-dom"
import ProjectOverview from "../ProjectOverview";
import ProjectPreview from "../ProjectPreview";

import PortalPackerThumb from "../assets/portalPackerThumb.gif"
import BoxBreakThumb from "../assets/boxBreakThumb.gif"
import DebrisThumb from "../assets/debrisThumb.gif"

import Icon from "../../../Icon";
import Button from "../../../Button";

function gamesProjectOverview() {
  const navigate = useNavigate();

  const openLink = (link: string) => {
    window.open(`${link}`, '_blank', 'noopener,noreferrer');
  };
  const goto = (route: string) => {
    navigate(`${route}`, { viewTransition: true });
  };

  const portalPackerLink = () => openLink("https://rcj15.itch.io/portal-packer");
  const portalPackerRoute = () => goto("/projects/games/portal-packer/");

  const boxBreakLink = () => openLink("https://rcj15.itch.io/boxbreak");
  const boxBreakRoute = () => goto("/projects/games/boxbreak/");

  const debrisLink = () => openLink("https://minor-tragedies.itch.io/debris");
  const debrisRoute = () => goto("/projects/games/debris/");

  return (
    <>
      <ProjectOverview>

        {/* PORTAL PACKER */}
        <ProjectPreview
          title="Portal Packer"

          subtitle="1st place winner!"
          subtitleIcon="1st-place"
          subtitleColor="#ffbf58"

          img={PortalPackerThumb}
          imgClickEvent={portalPackerLink}
          imgOverlayText="Play the game!"

          text={`An adventure/puzzle platformer created for the 2022 MashUp Game Jam. Escape from an abandoned lab using backpacks and portals! 
            
            I created everything in the game, including programming, art, design, and music from scratch within the alloted time frame.
            
            The game received 1st place out of 50 total entries in the game jam results.`}
        >
          <Button
            onClick={portalPackerLink}
            tooltip="Playable directly in the browser!"
          >
            <Icon src="itch-other" className="icon" />
            Play
          </Button>

          <Button
            onClick={portalPackerRoute}
            tooltip="The making of Portal Packer"
          >
            Read more...
          </Button>

        </ProjectPreview>

        {/* BOX BREAK */}
        <ProjectPreview
          title="<BOX_BREAK>"

          subtitle="Programming-based strategy"
          subtitleIcon="programmer"
          subtitleColor="#4dcf57"

          img={BoxBreakThumb}
          imgClickEvent={boxBreakLink}
          imgOverlayText="Play the game!"

          text={`Programming-based tactical strategy game created for the 2026 Bad Ideas Game Jam. I employed a unique programming-based combat system where you use code blocks to control your character's actions. 
            
            I incorperated a modified A* pathfinding algorithm to allow the enemies to navigate the grid-based arena whilst accounting for various factors such as the player's current facing direction.
            
            The game received 11th place out of 550+ total entries in the game jam results.`}
        >

          <Button
            onClick={boxBreakLink}
            tooltip="Playable directly in the browser!"
          >
            <Icon src="itch-other" className="icon" />
            Play
          </Button>

          <Button
            onClick={boxBreakRoute}
            tooltip="The making of <BOX_BREAK>"
          >
            Read more...
          </Button>

        </ProjectPreview>

        {/* DEBRIS */}
        {/*
        <ProjectPreview
          title="Debris"
          date="2023"

          subtitle="Award winning audio!"
          subtitleIcon="music"
          subtitleColor="rgba(153, 197, 255, 1)"

          teamSize={8}
          timeTaken="1 month"
          badges={<>
            <Icon src="unity" className="icon" color="white" tooltip="Made with Unity" />
            <Icon src="c#" className="icon" color="#9B4F97" tooltip="Programmed in C#" />
          </>}

          img={DebrisThumb}
          imgClickEvent={debrisLink}
          imgOverlayText="Play the game!"

          text={`School project platformer where you play as a robot on a post-apocalyptic earth. 
            
            I developed various developer tools and systems for the game, such as a map renderer, reflective water shader and a custom node-based dialogue system. 
            
            I was the sole person responsible for the sound and music of the game, which ultimately won the award for "Best Sound & Music" during a school awards show. The game was also nominated for "Best 2D Art".`}
        >

          <Button
            onClick={debrisLink}
            tooltip="Give it a try!"
          >
            <Icon src="itch-other" className="icon" />
            Play
          </Button>

          <Button
            onClick={debrisRoute}
            tooltip="The making of Debris"
          >
            Read more...
          </Button>

        </ProjectPreview>
        */}
      </ProjectOverview>
    </>
  )
}

export default gamesProjectOverview
