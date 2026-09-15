import { useNavigate } from "react-router-dom"
import ProjectOverview from "../ProjectOverview";
import ProjectPreview from "../ProjectPreview";

import NighttimeVillageThumb from "./assets/nighttimeVillageThumb.gif"

import Icon from "../../../Icon";
import Button from "../../../Button";

function otherProjectOverview() {
  const navigate = useNavigate();

  const openLink = (link: string) => {
    window.open(`${link}`, '_blank', 'noopener,noreferrer');
  };
  const goto = (route: string) => {
    navigate(`${route}`, { viewTransition: true });
  };

  const nighttimeVillageLink = () => openLink("");
  const nighttimeVillageRoute = () => goto("/projects/nighttime-village/");

  return (
    <>
      <ProjectOverview>

        {/* NIGHTTIME VILLAGE */}
        <ProjectPreview
          title="Nighttime Village"
          date="2025"

          subtitle="Unreal Engine mini-movie"
          subtitleIcon="movie"
          subtitleColor="#ff85c2"

          teamSize={1}
          timeTaken="1 month"
          badges={<>
            <Icon src="unreal" className="icon" color="white" tooltip="Made with Unreal Engine" />
            <Icon src="c++" className="icon" color="#6194CB" tooltip="Programmed in C++" />
          </>}

          img={NighttimeVillageThumb}
          imgClickEvent={nighttimeVillageLink}
          imgOverlayText="Watch todo todo!"

          text={`Insert description later`}

        >
          <Button
            onClick={nighttimeVillageLink}
            tooltip="Watch todo todo!"
          >
            <Icon src="itch-other" className="icon" />
            Play
          </Button>

          <Button
            onClick={nighttimeVillageRoute}
            tooltip="The making of Nighttime Village"
          >
            Read more...
          </Button>

        </ProjectPreview>
      </ProjectOverview>
    </>
  )
}

export default otherProjectOverview
