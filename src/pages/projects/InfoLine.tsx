import "./InfoLine.css"
import Icon from "../../Icon";

type Props = {
  date: string;
  
  teamSize: number;
  timeTaken: string;
  badges?: React.ReactNode;
};

function InfoLine({date, teamSize, timeTaken, badges}: Props) {

  return (
    <>
        {/* INFO LINE */}
        <div className="infoLine">
          <span className="clock"
            data-tooltip-id="tooltip"
            data-tooltip-content={`Made in ${timeTaken}`}
          >
            <Icon src="clock" className="icon" />
            <div className="text">{timeTaken}</div>
          </span>

          <div className="date">{date}</div>

          <span className="side">

            {badges}

            <div className="teamSize"
              data-tooltip-id="tooltip"
              data-tooltip-content={teamSize === 1 ? "Solo project" : `Worked in a team of ${teamSize} people`}
            >
              <Icon src="person" className="icon" />
              <div className="text">{teamSize}</div>
            </div>
          </span>
        </div>

        <div className="seperator" />
    </>
  )
}

export default InfoLine;