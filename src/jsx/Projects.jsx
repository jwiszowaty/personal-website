import { Link } from "react-router-dom"
import "../styles/projects.css"
import Menu from "./Menu"
import projects from "./projects.js"
function Projects() {
  return (
    <>
      <Menu clicked='Coding projects' />
      <div className='projects'>
      <div className="information turquoise">
        <p>It's a true joy seeing how the <Link to="/archive" className="link">designs of my website</Link> evolve. There are design updates planned for this section too.</p>
        </div>
        {
          projects.map(({ title, id, about, links, tools }) => {
            return (
              <div className='project' id={id}>
                <p className="title">{title}</p>
                <div className="info">
                  {about ? <p className="about">{about}</p> : <p className="about"></p>}
                  <div className='tools'>
                    {tools.map(tool => <p>{tool}</p>)}
                  </div>
                  <div className="links">
                    {links.map(({ linkName, url }) => <a className="link" href={url} target="_blank">{linkName}</a>)}
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Projects