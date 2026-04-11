import { useNavigate } from "react-router-dom"
import "./ProjectPage.css"

type Props = {
  title: string;
};

function ProjectPage({ title }: Props) {
  const navigate = useNavigate();

  const gotoPage = () => {
    navigate("/about/", { viewTransition: true });
  };

  return (
    <>
      <div className="projectTitle">{title}</div>
    </>
  )
}

export default ProjectPage;