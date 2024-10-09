import { Link } from "react-router-dom"
import Pform from "../assets/freecodecamp-form.png"
import Ptribute from "../assets/freecodecamp-tribute.png"
import News1 from "../assets/northcoders-news1.png"
import News2 from "../assets/northcoders-news2.png"
import News3 from "../assets/northcoders-news3.png"
import News4 from "../assets/northcoders-news4.png"
import RWT from "../assets/RenaissanceWT.jpg"
import "../styles/northcoders.css"
import "../styles/personal.css"
import "../styles/freecodecamp.css"
import "../styles/projects.css"
import Menu from "./Menu"
function Projects() {
  return (
    <>
      <Menu clicked='Coding projects' />
      <div className="information turquoise">
        <p>It's a true joy seeing how the <Link to="/archive" className="link">designs of my website</Link> evolve. There are design updates planned for this section too.</p>
      </div>
    <div className="projects">
        <div className='northcoders'>
        <div className='ncnews'>
          <h3 className="title">News app</h3>
          <div className='framework'>
            <h4>Node.js</h4>
            <h4>Express.js</h4>
            <h4>postgreSQL</h4>
            <h4>elephantSQL.com</h4>
            <h4>render.com</h4>
            <h4>netlify.com</h4>
          </div>
          <a className='link' href="https://github.com/jwiszowaty/be-jw-news" target="_blank"><h3>GitHub</h3></a>
          <a className='link' href="https://be-jw-news.onrender.com/api" target="_blank"><h3>API endpoints</h3></a>
          <a className='link' href="https://luminous-sunshine-fe3228.netlify.app/" target="_blank"><h3>Web view</h3></a>
        </div>
      </div>
      <div className='personal'>
        <div className='beyonceRWT'>
            <h3 className="title">Renaissance World Tour</h3>
            <div className='info'>
              <h4>Beyoncé's outfits from some of the shows</h4>
            </div>
            <a className="link" href="https://github.com/jwiszowaty/intro-html-css" target="_blank"><h3>GitHub</h3></a>
            <a className="link" href="https://jwiszowaty.github.io/intro-html-css/" target="_blank"><h3>Web view</h3></a>
          </div>
        </div>
        </div>
    </>
  )
}

export default Projects