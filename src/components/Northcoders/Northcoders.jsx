import React from 'react'
import './Northcoders.css'
import News1 from"../../assets/northcoders-news1.png"
import News2 from "../../assets/northcoders-news2.png"
import News3 from "../../assets/northcoders-news3.png"
import News4 from "../../assets/northcoders-news4.png"
function Northcoders() {
  return (
    <section id='northcoders-section' className='projects-section'>
      <a href="" className='nav-tags'><h1>Northcoders</h1></a>  
      <div className='project-card'>
        <a href="https://luminous-sunshine-fe3228.netlify.app/" target='_blank' className='project-title'><h2>News app</h2></a>
        <div className='framework'>
        <h4>Node.js</h4>
        <h4>Express.js</h4>
        <h4>postgreSQL</h4>
        <h4>elephantSQL.com</h4>
        <h4>render.com</h4>
        <h4>netlify.com</h4>
        </div>
        <a href="https://github.com/jwiszowaty/be-jw-news" target="_blank" className='github-link'><h3>GitHub</h3></a>
        <a href="https://be-jw-news.onrender.com/api" className='github-link' target="_blank"><h3>API endpoints</h3></a>
        <a href="https://luminous-sunshine-fe3228.netlify.app/" className='github-link' target="_blank"><h3>Web view</h3></a>
        <div id='news-img' className='project-imgs'>
          <img className='project-img' src={News1} alt="" />
          <img className='project-img' src={News2} alt="" />
          <img className='project-img' src={News3} alt="" />
          <img className='project-img' src={News4} alt="" />
        </div>
      </div>
     </section>
  )
}

export default Northcoders