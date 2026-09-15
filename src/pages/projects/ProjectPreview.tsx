import { useState } from "react";

import "./ProjectPreview.css"

import Icon from "../../Icon";
import InfoLine from "./InfoLine";
import ImageWithChildren from "../../ImageWithChildren";

type Props = {
  title: string;
  date: string;

  subtitle?: string;
  subtitleIcon?: string;
  subtitleColor?: string;

  teamSize: number;
  timeTaken: string;
  badges?: React.ReactNode;

  img: string;
  imgOverlayText?: string;
  imgClickEvent?: React.MouseEventHandler;
  imgAlt?: string;

  text?: string;
  children?: React.ReactNode;
};

function ProjectPreview({
  title,
  date,
  subtitle, subtitleIcon, subtitleColor,
  teamSize, timeTaken, badges,
  img, imgOverlayText, imgClickEvent, imgAlt,
  text,
  children
}: Props) {

  const [hoverImg, setHoverImg] = useState(false);

  const hoverImgEnter = () => setHoverImg(true);
  const hoverImgLeave = () => setHoverImg(false);

  return (
    <>
      <div className="mainPanel">
        <div className="projectTitle">{title}</div>

        {/* SUBTITLE */}
        {subtitle === undefined ?
          <></> :
          <div className="subtitle" style={
            (subtitleColor === undefined ?
              {}
              :
              { color: `${subtitleColor}` }
            )
          }>
            {subtitleIcon === undefined ?
              <></> :
              <Icon className="subtitleIcon" src={subtitleIcon} />
            }
            <div>
              {subtitle}
            </div>
          </div>
        }

        {/* IMAGE */}
        <ImageWithChildren
          className={imgClickEvent === undefined ? "image" : "imageClickable"}
          src={img}
          alt={imgAlt}

          onClick={imgClickEvent}
          onMouseEnter={hoverImgEnter}
          onMouseLeave={hoverImgLeave}
        >

          <div className={hoverImg && imgClickEvent !== undefined ? "overlayVisible" : "overlay"}>
            <div>{imgOverlayText}</div>
          </div>
        </ImageWithChildren>

        <InfoLine
          date={date}
          teamSize={teamSize}
          timeTaken={timeTaken}
          badges={badges}
        />

        {/* PROJECT TEXT */}
        <div className="projectText">
          {text}
        </div>

        {/* GROW */}
        <div style={{ flexGrow: "1" }}></div>

        {/* CHILDREN */}
        <div className="projectContent">{children}</div>
      </div>
    </>
  )
}

export default ProjectPreview;