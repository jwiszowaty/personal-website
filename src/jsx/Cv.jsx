import CV from '../assets/CV Northcoders Jakub Wiszowaty November 2023.pdf'
function Cv() {
  return (
    <>
    <section id='cv-section' className='projects-section'>
        <h1>CV</h1>
        <a href={CV} target='_blank'>VIEW</a>
        <a href={CV} download="Jakub Wiszowaty CV 2023" >DOWNLOAD</a>
    </section>
    </>
  )
}

export default Cv