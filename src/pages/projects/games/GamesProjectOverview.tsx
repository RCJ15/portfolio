import { useNavigate } from "react-router-dom"
import ProjectOverview from "../ProjectOverview";
import ProjectPreview from "../ProjectPreview";

import PortalPackerThumb from "../assets/portalPackerThumb.gif"
import BoxBreakThumb from "../assets/boxBreakThumb.gif"
import DebrisThumb from "../assets/debrisThumb.gif"
import PostalPanicThumb from "../assets/postalPanicThumb.gif"

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

  const postalPanicLink = () => openLink("");
  const postalPanicRoute = () => goto("/projects/games/postal-panic/");
  const postalPanicOstLink = () => openLink("https://open.spotify.com/album/6bsrpDa85vssHbf9v3Y6Zm?si=xIxekl_CQWyLE4vy7FOzSQ");

  return (
    <>
      <ProjectOverview>


        {/* POSTAL PANIC */}
        <ProjectPreview
          title="Postal Panic!"

          subtitle="My latest and greatest work!"
          subtitleIcon="star"
          subtitleColor="#ff5858"

          img={PostalPanicThumb}
          imgClickEvent={postalPanicRoute}
          imgOverlayText="Read more..."

          text={`A chaotic co-op party game where you sort packages onto the correct conveyor belts. 
            
            I was responsible for making and implementing all the sounds/music. `}
        >

          <Button
            onClick={postalPanicRoute}
            tooltip="The making of Postal Panic"
          >
            Read more...
          </Button>

          <Button
            onClick={postalPanicOstLink}
            tooltip="Listen to the original soundtrack"
          >
            <Icon src="spotify" className="icon" />
            Soundtrack
          </Button>

        </ProjectPreview>

        {/* PORTAL PACKER */}
        <ProjectPreview
          title="Portal Packer"

          subtitle="1st place winner!"
          subtitleIcon="1st-place"
          subtitleColor="#ffbf58"

          img={PortalPackerThumb}
          imgClickEvent={portalPackerRoute}
          imgOverlayText="Read more..."

          text={`Escape from an abandoned lab using backpacks and portals. 
            
            I was responsible for making and implementing all the sounds/music.
            
            The game received 1st place in the Game Jam results.`}
        >

          <Button
            onClick={portalPackerRoute}
            tooltip="The making of Portal Packer"
          >
            Read more...
          </Button>

          <Button
            onClick={portalPackerLink}
            tooltip="Playable directly in the browser!"
          >
            <Icon src="itch-other" className="icon" />
            Play
          </Button>

        </ProjectPreview>

        {/* DEBRIS */}
        <ProjectPreview
          title="Debris"
          //date="2023"

          subtitle="Award winning audio!"
          subtitleIcon="music"
          subtitleColor="rgba(153, 197, 255, 1)"

          //teamSize={8}
          //timeTaken="1 month"
          //</ProjectOverview>badges={<>
          //  <Icon src="unity" className="icon" color="white" tooltip="Made with Unity" />
          //  <Icon src="c#" className="icon" color="#9B4F97" tooltip="Programmed in C#" />
          //</>}

          img={DebrisThumb}
          imgClickEvent={debrisRoute}
          imgOverlayText="Read more..."

          text={`2D platformer where you play as a robot on a post-apocalyptic earth. 
            
            I was responsible for making and implementing all the sounds/music.
            
            Won award for "Best Sound & Music".`}

            /*
            
            I developed various developer tools and systems for the game, such as a map renderer, reflective water shader and a custom node-based dialogue system. 
            
            I was the sole person responsible for the sound and music of the game, which ultimately won the award for "Best Sound & Music" during a school awards show. The game was also nominated for "Best 2D Art".
            */
        >

          <Button
            onClick={debrisRoute}
            tooltip="The making of Debris"
          >
            Read more...
          </Button>
          
          <Button
            onClick={debrisLink}
            tooltip="Download the game"
          >
            <Icon src="itch-other" className="icon" />
            Play
          </Button>

        </ProjectPreview>

        {/* BOX BREAK */}
        {/*
        <ProjectPreview
          title="<BOX_BREAK>"

          subtitle="Programming-based strategy"
          subtitleIcon="programmer"
          subtitleColor="#4dcf57"

          img={BoxBreakThumb}
          imgClickEvent={boxBreakRoute}
          imgOverlayText="Read more..."

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
        */}

      </ProjectOverview>
    </>
  )
}

export default gamesProjectOverview
