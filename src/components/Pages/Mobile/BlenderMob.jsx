import P1 from "../../../assets/Blender-P1.png"
import P1Acc from "../../../assets/Blender-P1-Acc.webp"
import P2 from "../../../assets/Blender-P2.png"
import P3 from "../../../assets/Blender-P3.png"
import './PagesMob.css'
import { useNavigate } from 'react-router-dom'
function BlenderMob() {
  const navigate = useNavigate()
  return (
    <section id='blender-section' className='projects-section'>
      <h4 className='back' onClick={() => navigate(-1)}>&#x2190;back</h4>
      <a href="" className='nav-tags'><h1>Blender</h1></a> 
      <div className='project-card'>
        <h2>Diamond World Tour Rihanna</h2>
        <div id='news-img' className='project-imgs'>
          <img className='project-img' src={P1} alt="" />
        </div>
        <div id='news-img' className='project-imgs'>
          <img className='project-img' src={P1Acc} alt="" />
        </div>
      </div>
      <div className='project-card'>
        <h2>Inspired by Selena Gomez "Feel Me"</h2>
        <div id='news-img' className='project-imgs'>
          <img className='project-img' src={P2} alt="" />
        </div>
      </div>
      <div className='project-card'>
        <h2>Inspired by Beyoncé "America Has A Problem" Live</h2>
        <div id='news-img' className='project-imgs'>
          <img className='project-img' src={P3} alt="" />
        </div>
      </div>
    </section>
  )
}

export default BlenderMob