import React, { useEffect } from "react";
import Button from "../../Button";
import { useNavigate, useLocation } from "react-router-dom";

import "./ProjectPage.css"

import InfoLine from "./InfoLine";
import TextBlock from "../../TextBlock";

type Props = {
  title: string;
  teamSize: number;
  timeTaken: string;
  date: string;
  badges?: React.ReactNode;
  children?: React.ReactNode;
}

function ProjectPage({ title, teamSize, timeTaken, date, badges, children }: Props) {

  const navigate = useNavigate();
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const goBack = () => {
    navigate("/", { viewTransition: true });
  };

  return (
    <>
      <div className="projectPageMain">

        <h1 className="title">{title}</h1>
        
        <div style={{ width: "300px" }} >
          <InfoLine
            date={date}
            teamSize={teamSize}
            timeTaken={timeTaken}
            badges={badges}
          />
        </div>

        <Button onClick={goBack} tooltip="View my other projects!">{`← Go back`}</Button>

        <br />

        {children}
      </div>
    </>
  )
}

export default ProjectPage;