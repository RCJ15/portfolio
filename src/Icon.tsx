import React from "react";

import github from "./assets/icon/github.svg?react";
import itch from "./assets/icon/itch.svg?react";
import itchother from "./assets/icon/itch-other.svg?react";
import linkedin from "./assets/icon/linkedin.svg?react";
import cv from "./assets/icon/cv.svg?react";
import unity from "./assets/icon/unity.svg?react";
import unreal from "./assets/icon/unreal.svg?react";
import music from "./assets/icon/music.svg?react";
import mail from "./assets/icon/mail.svg?react";
import gaming from "./assets/icon/gaming.svg?react";
import programmer from "./assets/icon/programmer.svg?react";
import star from "./assets/icon/star.svg?react";
import firstplace from "./assets/icon/1st-place.svg?react";
import cplusplus from "./assets/icon/c++.svg?react";
import csharp from "./assets/icon/c-sharp.svg?react";
import person from "./assets/icon/person.svg?react";
import clock from "./assets/icon/clock.svg?react";
import arrow from "./assets/icon/arrow.svg?react";
import movie from "./assets/icon/movie.svg?react";

const iconComponents: Record<string, React.FunctionComponent<React.SVGProps<SVGSVGElement>>> = {
  "github": github,
  "itch": itch,
  "itch-other": itchother,
  "linkedin": linkedin,
  "cv": cv,
  "unity": unity,
  "unreal": unreal,
  "music": music,
  "mail": mail,
  "gaming": gaming,
  "programmer": programmer,
  "star": star,
  "1st-place": firstplace,
  "c++": cplusplus,
  "c#": csharp,
  "person": person,
  "clock": clock,
  "arrow": arrow,
  "movie": movie,
};

type Props = {
  src: string;
  tooltip?: string;
  className?: string;
  onClick?: React.MouseEventHandler;
  color?: string;
  style?:React.CSSProperties
}

function Icon({ src, tooltip, className, onClick, color, style }: Props) {

  const Icon = iconComponents[src];

  return (
    <>
      <Icon
        className={className}
        onClick={onClick}
        data-tooltip-id={tooltip === undefined ? "" : "tooltip"}
        data-tooltip-content={tooltip}
        style={{
          fill:"currentColor",
          color:`${color}`,
          ...style,
        }}
      />
    </>
  )
}

export default Icon;