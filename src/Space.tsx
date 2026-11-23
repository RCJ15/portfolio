import './Space.css'

interface SpaceProps {
  size?: string | number;
  sizeFormat?: string | number;
  children?: React.ReactNode;
}

function Space({ size = 20, sizeFormat = "px", children }: SpaceProps) {
  return <p className="space" style={{height: `${size}${sizeFormat}`}}>
    {children}
  </p>;
}

export default Space;