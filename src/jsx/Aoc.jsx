import { Link } from 'react-router-dom'
import '../styles/Aoc.css'
function Aoc() {
    return (
      <section className='aoc-2023'>
        <div className='aoc-2023 list'>
        <Link className="back-button" to="/">back</Link>
        <a className='aoc-2023 title' href='https://github.com/jwiszowaty/AoC-2023' target='_blank'>ADVENT OF CODE 2023</a>
        <a className='aoc-2023 task' href='https://github.com/jwiszowaty/AoC-2023/tree/main/1-trebuchet' target='_blank'>Trebuchet?!</a>
        <a className='aoc-2023 task' href='https://github.com/jwiszowaty/AoC-2023/tree/main/2-cube-conundrum' target='_blank'>Cube Conundrum</a>
        <a className='aoc-2023 task' href="https://github.com/jwiszowaty/AoC-2023/tree/main/3-gear-ratios" target='_blank'>Gear Ratios</a>
        <a className='aoc-2023 task' href="https://github.com/jwiszowaty/AoC-2023/tree/main/4-scratchcards" target='_blank'>Scratchcards</a>
          <a className='aoc-2023 task' href="https://github.com/jwiszowaty/AoC-2023/tree/main/5-fertiliser" target='_blank'>If You Give A Seed A Fertilizer</a>
          <p className='aoc-2023 update'>Last update: Monday, 11 January 2024</p>
      </div>
        <div className='aoc-2023 message'>
        <p>I have completed part 1 for day 5 for test data and the large input.</p>
        <p>I have also managed to complete part 2 for test data.</p>
        <p>My code might work for the full input, however its too large</p>
        <p>and I will analyse others' code to learn how to make the method more efficient.</p>
        </div>
      </section>
      
  )
}

export default Aoc