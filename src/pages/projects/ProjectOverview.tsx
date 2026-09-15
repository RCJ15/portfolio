import './ProjectOverview.css'

function ProjectOverview({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <div className="projects">
        {children}
      </div>
    </>
  )
}

export default ProjectOverview
