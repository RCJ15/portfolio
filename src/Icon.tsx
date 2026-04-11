import React from "react";

/*
import github from "./assets/icon/github.svg?react";
import itch from "./assets/icon/itch.svg?react";
import linkedin from "./assets/icon/linkedin.svg?react";
import cv from "./assets/icon/cv.svg?react";
import unity from "./assets/icon/unity.svg?react";
import unreal from "./assets/icon/unreal.svg?react";
import music from "./assets/icon/music.svg?react";
import mail from "./assets/icon/mail.svg?react";
import gaming from "./assets/icon/gaming.svg?react";
import programmer from "./assets/icon/programmer.svg?react";
import star from "./assets/icon/star.svg?react";

const iconComponents: Record<string, React.FunctionComponent<React.SVGProps<SVGSVGElement>>> = {
  "github": github,
  "itch": itch,
  "linkedin": linkedin,
  "cv": cv,
  "unity": unity,
  "unreal": unreal,
  "music": music,
  "mail": mail,
  "gaming": gaming,
  "programmer": programmer,
  "star": star,
};
*/

import github from "./assets/icon/github.svg";
import itch from "./assets/icon/itch.svg";
import linkedin from "./assets/icon/linkedin.svg";
import cv from "./assets/icon/cv.svg";
import unity from "./assets/icon/unity.svg";
import unreal from "./assets/icon/unreal.svg";
import music from "./assets/icon/music.svg";
import mail from "./assets/icon/mail.svg";
import gaming from "./assets/icon/gaming.svg";
import programmer from "./assets/icon/programmer.svg";
import star from "./assets/icon/star.svg";

const iconComponents: Record<string, string> = {
  "github": github,
  "itch": itch,
  "linkedin": linkedin,
  "cv": cv,
  "unity": unity,
  "unreal": unreal,
  "music": music,
  "mail": mail,
  "gaming": gaming,
  "programmer": programmer,
  "star": star,
};

//const inBuild = import.meta.env.MODE !== "development";

function Icon({ src, tooltip, className, onClick }: { src: string, tooltip?: string, className?: string, onClick?: React.MouseEventHandler }) {

  const Icon = iconComponents[src];

  return (
    <>
      <svg
        className={className}
        onClick={onClick}
        data-tooltip-id="tooltip"
        data-tooltip-content={tooltip}
      >
        <use href={Icon} />
      </svg>
      {/*
      <Icon
        className={className}
        onClick={onClick}
        data-tooltip-id="tooltip"
        data-tooltip-content={tooltip}
      />
      */}

      {/*
      {
        inBuild ? 

        <Icon
          className={className}
          onClick={onClick}
          data-tooltip-id="tooltip"
          data-tooltip-content={tooltip}
          />
        :

        <svg 
          className={className}
          onClick={onClick}
          data-tooltip-id="tooltip"
          data-tooltip-content={tooltip}
          >
          <use href={src}/>
        </svg>
      } */}
    </>
  )
}

export default Icon;