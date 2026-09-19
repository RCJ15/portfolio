import { useState } from "react";

import "./ProjectPreview.css"

import Icon from "../../Icon";
import ImageWithChildren from "../../ImageWithChildren";

type Props = {
  title: string;

  subtitle?: string;
  subtitleIcon?: string;
  subtitleColor?: string;

  img: string;
  imgOverlayText?: string;
  imgClickEvent?: React.MouseEventHandler;
  imgAlt?: string;

  text?: string;
  children?: React.ReactNode;
};

function ProjectPreview({
  title,
  subtitle, subtitleIcon, subtitleColor,
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