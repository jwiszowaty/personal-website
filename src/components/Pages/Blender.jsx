import React from 'react'
import P1 from "../../assets/Blender-P1.png"
import P1Acc from "../../assets/Blender-P1-Acc.webp"
import P2 from "../../assets/Blender-P2.png"
import P3 from "../../assets/Blender-P3.png"
import './Blender.css'
function Blender() {
  return (
    <section className='blender'>
      <div className='dwt card'>
        <h2 className='dwt title'>Diamond World Tour Rihanna</h2>
        <div className='dwt imgs'>
          <img className='dwt img' src={P1} alt="" />
          <img className='dwt img' src={P1Acc} alt="" />
        </div>
      </div>
      <div className='SGfeel card'>
        <h2 className='SGfeel title'>Inspired by Selena Gomez "Feel Me"</h2>
        <img className='SGfeel img' src={P2} alt="" />
      </div>
      <div className='BAmerica card'>
        <h2 className='BAmerica title'>Inspired by Beyoncé "America Has A Problem" Live</h2>
        <img className='BAmerica img' src={P3} alt="" />
      </div>
    </section>
  )
}

export default Blender