import '../styles/menu.css'
import CV from '../assets/CV Northcoders Jakub Wiszowaty January 2024.pdf'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import SimpleJavaPrograms from './SimpleJavaPrograms'
function Menu() {
  const [value, setValue] = useState(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_gq06hvq', 'template_razkcdj', e.target, 'NSdKc8LDXh1Td4gWB', value )
  }
  return (
    <>
      <section className='menu'>
        <div className='name'>
          <h1 className='first'>Jakub</h1>
          <h1 className='surname'>Wiszowaty</h1>
        </div>
        <nav className="nav">
          <Link to={CV} target='_blank'>CV</Link>
          <Link to="/sjp">Simple Java Programs</Link>
          <Link to="/projects">Coding projects</Link>
          <Link to="/aoc2023">	&#10052; Advent of Code 2023 	&#10052;</Link>
          <Link to="/blender">Blender</Link>
        </nav>
      </section>
          <SimpleJavaPrograms/>
      
    </>
  )
}

export default Menu