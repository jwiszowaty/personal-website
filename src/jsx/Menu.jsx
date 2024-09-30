import '../styles/menu.css'
import CV from '../assets/CV Jakub Wiszowaty September 2024.pdf'
import { Link } from 'react-router-dom'
function Menu() {
  return (
      <section className='menu'>
        <div className='name'>
          <h1 className='first'>Jakub</h1>
          <h1 className='surname'>Wiszowaty</h1>
        </div>
        <nav className="nav">
          <Link to={CV} target='_blank'>CV</Link>
          <Link to="/">Simple Java Programs</Link>
          <Link to="/projects">Coding projects</Link>
          <Link to="/aoc2023">	&#10052; Advent of Code 2023 	&#10052;</Link>
          <Link to="/blender">Blender</Link>
        </nav>
      </section>
  )
}

export default Menu