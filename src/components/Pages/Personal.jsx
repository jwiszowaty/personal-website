import React from 'react'
import RWT from "../../assets/RenaissanceWT.jpg"
function Personal() {
  return (
    <section id='personal-section' className='projects-section'>
      <a href="" className='nav-tags'><h1>Personal</h1></a> 
      <div className='project-card'>
        <a href="https://jwiszowaty.github.io/intro-html-css/" target='_blank' className='project-title'><h2>Renaissance World Tour</h2></a>
        <div className='framework'>
        <h4>Beyoncé's outfits from some of the shows</h4>
        </div>
        <a href="https://github.com/jwiszowaty/intro-html-css" target="_blank" className='github-link'><h3>GitHub</h3></a>
        <a href="https://jwiszowaty.github.io/intro-html-css/" target="_blank" className='github-link'><h3>Web view</h3></a>
        <div id='news-img' className='project-imgs'>
          <img className='project-img' src={RWT} alt="" />
          
        </div>
      </div>
    </section>
  )
}

export default Personal