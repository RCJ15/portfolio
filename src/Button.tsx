import React from "react";

type Props = {
  onClick?: React.MouseEventHandler;
  tooltip?: string;
  children?: React.ReactNode;
}

function Button({ onClick, tooltip, children }: Props) {
  return (
    <>
      <button className="button"
        onClick={onClick}
        data-tooltip-id={tooltip === undefined ? "" : "tooltip"}
        data-tooltip-content={tooltip}
      >
        {children}
      </button>
    </>
  )
}

export default Button;