import './PagesMob.css'
import CV from '../assets/CV Northcoders Jakub Wiszowaty November 2023.pdf'
function CvMob() {
  return (
    <>
    <section id='cv-section' className='projects-section'>
        <a href="" className='nav-tags'><h1>CV</h1></a>
        <div className='project-card'><a href={CV} target='_blank'>VIEW</a></div>
        <div className='project-card'><a href={CV} download="Jakub Wiszowaty CV 2023" >DOWNLOAD</a></div>
    </section>
    </>
  )
}

export default CvMob