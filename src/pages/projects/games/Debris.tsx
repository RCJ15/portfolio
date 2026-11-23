import ProjectPage from "../ProjectPage";
import TextBlock from "../../../TextBlock";
import Icon from "../../../Icon";
import YoutubeEmbed from "../../../YoutubeEmbed";

function Debris() {
  return (
    <>
      <ProjectPage title="Debris" teamSize={6} timeTaken="1 month" date="2023"
        badges={<>
          <Icon src="unity" className="icon" color="white" tooltip="Made with Unity" />
          <Icon src="c#" className="icon" color="#9B4F97" tooltip="Programmed in C#" />
        </>}
        >

        <div className="grid">

          <TextBlock>
            <h2>Concept</h2>
            <p><b>Debris</b> is a <b>2D platformer</b> where you play as a <b>robot</b> exploring a post-apocalyptic and empty earth.
            The game received an award for <b>"Best Sound & Music"</b> along with a nomination for <b>"Best 2D Visuals"</b> at a school awards show</p>
          </TextBlock>

          <TextBlock>
            <h2>My Role</h2>
            <p>I was responsible for creating <b>all</b> of the <b>sounds</b> and <b>music</b> for the game as well as implementing it. I was also one of the <b>gameplay programmers</b>.</p>
          </TextBlock>

        </div>

        <h1>Pillars</h1>
          <div className="grid">
          <TextBlock>
            <h2>Desolate & Lonely</h2>
            <p>The game takes place on a barren earth that is void of any life, with only remnants of humanity left.</p>
            <br/>
            <p>The soundtrack features a lot of wide pads and reverb to reflect the loneliness and scale of the areas.</p>
          </TextBlock>

          <TextBlock>
            <h2>Hopeful</h2>
            <p>In the end, there is a hopeful ending and I wanted the games audio to foreshadow this.</p>
            <br/>
            <p>I created a sad yet hopeful melody which I continously used as a leitmotif through the games various areas.</p>
          </TextBlock>
        </div>
        
        <h1>Awards!</h1>
        <TextBlock>
          <p>This game won an award for <b>Best Sound & Music</b>! Here is the entire show (audio award is at 28:48)</p>
          <br/>
          <YoutubeEmbed embedId="rUKj206QFrs" width="560" height="315"></YoutubeEmbed>
        </TextBlock>
        
        <h1>Play the game!</h1>
        <TextBlock>
          <p>The game is up on <b>itch.io</b>!</p>
          <br/>
          <iframe src="https://itch.io/embed/2094226?dark=true" width="552" height="167"><a href="https://rcj15.itch.io/portal-packer">Debris by Minor Tragedies</a></iframe>
        </TextBlock>
      </ProjectPage>
    </>
  )
}

export default Debris;