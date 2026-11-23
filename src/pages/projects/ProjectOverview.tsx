import './ProjectOverview.css'

function ProjectOverview({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <div className="projectsWrapper">
        <div className='projects'>
          {children}
        </div>
      </div>
    </>
  )
}

export default ProjectOverview
