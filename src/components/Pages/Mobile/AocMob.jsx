import React from 'react'
import "./AocMob.css"
import { useNavigate } from 'react-router-dom'
function AocMob() {
  const navigate = useNavigate()
  return (
    <section className='aoc'>
      <h4 className='back' onClick={() => navigate(-1)}>&#x2190;back</h4>
      <p><a href='https://github.com/jwiszowaty/AoC-2023' target='_blank'>ADVENT OF CODE 2023</a></p>
      <p><a href='https://github.com/jwiszowaty/AoC-2023/tree/main/1-trebuchet' target='_blank'>Day 1: Trebuchet?!</a></p>
      <p><a href='https://github.com/jwiszowaty/AoC-2023/tree/main/2-cube-conundrum' target='_blank'>Day 2: Cube Conundrum</a></p>
      <p><a href="https://github.com/jwiszowaty/AoC-2023/tree/main/3-gear-ratios" target='_blank'>Day 3: Gear Ratios</a></p>
    </section>
      
  )
}

export default AocMob