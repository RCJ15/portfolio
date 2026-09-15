import ProjectPage from "../ProjectPage";
import TextBlock from "../../../TextBlock";
import Icon from "../../../Icon";

function BoxBreak() {
  return (
    <>
      <ProjectPage title="<BOX_BREAK>" teamSize={1} timeTaken="1 month" date="2026"
        badges={<>
          <Icon src="unity" className="icon" color="white" tooltip="Made with Unity" />
          <Icon src="c#" className="icon" color="#9B4F97" tooltip="Programmed in C#" />
        </>}>

        <div className="grid">

          <TextBlock>
            <h2>Concept</h2>
            {`<BOX_BREAK>`} is a programming-based tactical strategy game initially created for the 2026 Bad Ideas Game Jam. Since then it is being developed into a full game with more content and features. The game received 11th place out of 550+ total entries in the game jam results.
          </TextBlock>

          <TextBlock>
            <h2>My Role</h2>
            I'm the sole developer of the game, responsible for creating everything from scratch within the alloted time frame of 1 month.
          </TextBlock>

        </div>

        <h1>Core Pillars</h1>

        <div className="grid">
          <TextBlock>
            <h2>Programming</h2>
            <p>The core of the game is its unique programming-based, tile-based & turn-based combat system where you use code blocks to control your character's actions.</p>
            <div className="fill"/>
            {/*<img src={Gif1} alt="Gif 1" />*/}
          </TextBlock>

          <TextBlock>
            <h2>Strategy</h2>
            <p>Every command you execute costs energy, so you must plan your moves carefully.</p>
            <div className="fill"/>
          </TextBlock>

          <TextBlock>
            <h2>Style</h2>
            <p>The game utilizes a 3D pixelated art style and a catchy synth-based soundtrack.</p>
            <div className="fill"/>
          </TextBlock>

          <TextBlock>
            <h2>Data Driven</h2>
            <p>Behind the scenes, the Commands, Enemies and Levels in the game are stored as JSON files, allowing for easy modification and balancing.</p>
            <div className="fill"/>
          </TextBlock>

        </div>

        <h1>The Design</h1>
        <TextBlock>
          <h2>Goal</h2>
          I have always liked programming based games, but I feel that most of them fall into the educational category with the primary goal of teaching the player how to program.
          My goal for this project was to utilize the programming-based game format to create a fun and engaging experience, while also being challenging and rewarding.
        </TextBlock>

        <h1>Behind the Scenes</h1>
        <TextBlock>
          <h2>Pathfinding</h2>
          I incorporated a modified A* pathfinding algorithm to allow the enemies to navigate the grid-based arena whilst accounting for various factors such as the player's current facing direction.
          <br/>
          <br/>
          <h2>Data-driven</h2>
          Almost all of the game's data is stored in JSON files, which allows for easy tweaking and balancing of the game without having to recompile the code.
          </TextBlock>
      </ProjectPage>
    </>
  )
}

export default BoxBreak;