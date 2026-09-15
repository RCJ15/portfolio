

function TextBlock({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) {
  return <p className="textBlock" style={style}>
    {children}
  </p>;
}

export default TextBlock;