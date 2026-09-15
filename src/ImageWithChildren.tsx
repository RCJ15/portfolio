import React, { JSX } from "react";

type Props = {
  src: string,
  alt?: string,
  children?: string | JSX.Element | JSX.Element[],
  className?: string,
  style?: object,
  onClick?: React.MouseEventHandler,
  onMouseEnter?: React.MouseEventHandler,
  onMouseLeave?: React.MouseEventHandler,
};

const ImageWithChildren = ({ src, alt, children, className, style, onClick, onMouseEnter, onMouseLeave }: Props) => {

  return (
    <div
      className={`image-container ${className}`}
      style={{
        position: "relative",
        display: "inline-block",
        ...style,
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img
        src={src}
        alt={alt || "Image"}
        style={{ display: "block", width: "100%", height: "auto", borderRadius: "inherit" }}
      />
      {children && (
        <div
          className="image-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            borderRadius: "inherit",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default ImageWithChildren;
