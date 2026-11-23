import ProjectPage from "../ProjectPage";
import TextBlock from "../../../TextBlock";
import Icon from "../../../Icon";

function PostalPanic() {
  return (
    <>
      <ProjectPage title="Postal Panic" teamSize={8} timeTaken="1 month" date="2026"
        badges={<>
          <Icon src="unreal" className="icon" color="white" tooltip="Made with Unreal Engine" />
          <Icon src="c++" className="icon" color="#9B4F97" tooltip="Programmed in C++" />
        </>}>

        <div className="grid">

          <TextBlock>
            <h2>Concept</h2>
            <p>Postal Panic is a <b>chaotic couch co-op party game</b> where two players must work together to sort packages onto the correct conveyor belts or else risk getting fired! </p>
          </TextBlock>

          <TextBlock>
            <h2>My Role</h2>
            <p>I worked in a team of 8 where I was responsible for <b>all</b> of the <b>sound design</b> and <b>music composition</b> for the game, as well as implementing and programming the sounds into the game using <b>FMOD</b>.</p>
          </TextBlock>

        </div>

        <h1>Pillars</h1>

        <div className="grid">
          <TextBlock>
            <h2>Cartoony</h2>
            <p>The tone of the game is very light-hearted and fun, which influenced every aspect of the audio design, from the sound effects to the music.</p>
            <br/>
            <p>For some sound effects I decided to mix in some old and recognizable cartoon sound effects.</p>
          </TextBlock>

          <TextBlock>
            <h2>Jazzy</h2>
            <p>The game features a chaotic and jazzy soundtrack that aims to elevate the playful and energetic nature of the gameplay.</p>
            <br/>
            <p>I studied the music theory of jazz and incorperated a lot of similar elements into my own compositions. An element I really liked was occasionally throwing in some chromaticism into the mix.</p>
          </TextBlock>

          <TextBlock>
            <h2>Improvisational & Clumsy</h2>
            <p>During the game, players are bound to make spontaneous and clumsy actions, which is reflected in the improvisational elements of the music composition.</p>
            <br/>
            <p>I improvised certain solos of the soundtrack myself using a real keyboard and then adjusted them inside my DAW. For some songs I also played with the time signature in some tracks to give off a clumsy vibe.</p>
          </TextBlock>

          {/*
          <TextBlock>
            <h2>Intentional Mistakes</h2>
            <p>During gameplay, accidents are bound to happen. These are incorporated into the audio design to create a more dynamic and engaging experience.</p>
            <div className="fill"/>
          </TextBlock>
          */}

        </div>

        <h1>You like jazz?</h1>
        <TextBlock>
          <p>The soundtrack I made for the game is up on <b>Spotify!</b></p>
          <br/>
          <iframe data-testid="embed-iframe" style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/album/6bsrpDa85vssHbf9v3Y6Zm?utm_source=generator&si=145f460768544501" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </TextBlock>
      </ProjectPage>
    </>
  )
}

export default PostalPanic;