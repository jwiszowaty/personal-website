import { Link } from 'react-router-dom'
import '../styles/Aoc.css'
import Menu from './Menu'
function Aoc() {
  return (
    <>
      <Menu/>
      <section className='aoc-2023'>
        <div className='aoc-2023 list'>
        <a className='aoc-2023 title' href='https://github.com/jwiszowaty/AoC-2023' target='_blank'>ADVENT OF CODE 2023</a>
        <a className='aoc-2023 task' href='https://github.com/jwiszowaty/AoC-2023/tree/main/1-trebuchet' target='_blank'>Trebuchet?!</a>
        <a className='aoc-2023 task' href='https://github.com/jwiszowaty/AoC-2023/tree/main/2-cube-conundrum' target='_blank'>Cube Conundrum</a>
        <a className='aoc-2023 task' href="https://github.com/jwiszowaty/AoC-2023/tree/main/3-gear-ratios" target='_blank'>Gear Ratios</a>
        <a className='aoc-2023 task' href="https://github.com/jwiszowaty/AoC-2023/tree/main/4-scratchcards" target='_blank'>Scratchcards</a>
          <a className='aoc-2023 task' href="https://github.com/jwiszowaty/AoC-2023/tree/main/5-fertiliser" target='_blank'>If You Give A Seed A Fertilizer</a>

      </div>
      </section>
      </>
  )
}

export default Aoc