import "./PortalPacker.css";
import ProjectPage from "../ProjectPage";
import Icon from "../../../Icon";
import TextBlock from "../../../TextBlock";

import Gif1 from "../assets/portalPacker1.gif";
import Gif2 from "../assets/portalPacker2.gif";
import Gif3 from "../assets/portalPacker3.gif";
import Gif4 from "../assets/portalPacker4.gif";

function PortalPacker() {
  return (
    <>
      <ProjectPage title="Portal Packer" teamSize={1} timeTaken="10 days" date="2022"
        badges={<>
          <Icon src="unity" className="icon" color="white" tooltip="Made with Unity" />
          <Icon src="c#" className="icon" color="#9B4F97" tooltip="Programmed in C#" />
        </>}
        >

        <div className="grid">

          <TextBlock>
            <h2>Concept</h2>
            <p>Portal packer is a <b>2D adventure/puzzle platformer</b> where you use <b>backpacks and portals</b> to escape an abandoned lab. It was created for the <b>2022 MashUp Game Jam</b>, where it won <b>1st place</b> out of 50 total entries.</p>
          </TextBlock>

          <TextBlock>
            <h2>My Role</h2>
            <p>I created <b>everything</b> in the game, including <b>programming, art, design,</b> and <b>music</b> from scratch within the alloted time frame of <b>10 days.</b></p>
          </TextBlock>

        </div>

        <h1>Core Pillars</h1>

        <div className="grid">
          <TextBlock>
            <h2>Responsiveness</h2>
            <p>The game features snappy controls and tons of visual feedback on the players various actions. The game also implements subtle gameplay tweaks such as variable jump height and coyote time.</p>
            <div className="fill"/>
            <img src={Gif1} alt="Gif 1" />
          </TextBlock>

          <TextBlock>
            <h2>The Backpack</h2>
            <p>The Backpack is the primary mechanic of the game. The player can place the backpack down and use it to hold down buttons to open doors or as a stepping stone to reach higher areas. The player can recall the backpack as long as they have line of sight to it.</p>
            <div className="fill"/>
            <img src={Gif2} alt="Gif 2" />
          </TextBlock>

          <TextBlock>
            <h2>Portals</h2>
            <p>After completing the first area of the game, the player can place portals down on golden tiles. These can be used to bypass obstacles, reach new areas, and solve puzzles.</p>
            <div className="fill"/>
            <img src={Gif3} alt="Gif 3" />
          </TextBlock>

          <TextBlock>
            <h2>Puzzle Solving</h2>
            <p>The game features a variety of puzzles that require the player to use the Backpack and Portals in creative ways to progress.</p>
            <div className="fill"/>
            <img src={Gif4} alt="Gif 4" />
          </TextBlock>
        </div>

        <h1>The Design</h1>
        <TextBlock>
          <h2>Goal</h2>
          My primary goal with the project was to create a polished and engaging game that was simple and fun to play and showcased my skills as a game developer.
        </TextBlock>
        
      </ProjectPage>
    </>
  )
}

export default PortalPacker;