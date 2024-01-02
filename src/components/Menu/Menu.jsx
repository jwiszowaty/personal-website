import './Menu.css'
import CV from '../../assets/CV Northcoders Jakub Wiszowaty January 2024.pdf'
import { Link } from 'react-router-dom'
function Menu({setNav, nav}) {
  return (
    <section className='section-menu'>
      <div className='name'>
        <h1 className='first'>Jakub</h1>
        <h1 className='surname'>Wiszowaty</h1>
      </div>
      <div className='cv'>
        <div className='text'>
          <p>CV</p>
          <p className='cv-update'>updated on</p>
          <p className='cv-update'>2/1/24</p>
        </div>
        <a href={CV} download="Jakub Wiszowaty CV 2023" className='download'>download</a>
        <a href={CV} target='_blank' className='view'>view</a>
      </div>
      <nav className="web-nav">
        <div className="list">
          {nav === "aoc" ? <p className='back' onClick={() => setNav(undefined)}>back</p> : <p className='nav' onClick={() => setNav("aoc")}>	&#10052; Advent of Code 2023 	&#10052;</p>}
          {nav === "blender" ? <p className='back' onClick={() => setNav(undefined)}>back</p> : <p className='nav' onClick={() => setNav("blender")}>Blender</p>}
          {nav === "northcoders" ? <p className='back' onClick={() => setNav(undefined)}>back</p> : <p className='nav' onClick={() => setNav("northcoders")}>Northcoders Bootcamp</p>}
          {nav === "personal" ? <p className='back' onClick={() => setNav(undefined)}>back</p> : <p className='nav' onClick={()=>setNav("personal")}>Personal</p>}
          {nav === "freecodecamp" ? <p className='back' onClick={() => setNav(undefined)}>back</p> : <p className='nav' onClick={()=>setNav("freecodecamp")}>freeCodeCamp</p>}
        </div>
      </nav>
      <nav className="mobile-nav">
        <div className="list">
          <Link className='nav' to="/aoc2023">	&#10052; Advent of Code 2023 	&#10052;</Link>
          <Link className='nav' to="/blender">Blender</Link>
          <Link className='nav' to="/northcoders">Northcoders Bootcamp</Link>
          <Link className='nav' to="/personal">Personal</Link>
          <Link className='nav' to="/freecodecamp">freeCodeCamp</Link>
        </div>
      </nav>
    </section>
  )
}

export default Menu