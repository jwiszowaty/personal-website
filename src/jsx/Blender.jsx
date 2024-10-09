import P1 from "../assets/Blender-P1.png"
import P1Acc from "../assets/Blender-P1-Acc.webp"
import P2 from "../assets/Blender-P2.png"
import P3 from "../assets/Blender-P3.png"
import '../styles/Blender.css'
import { Link } from "react-router-dom"
import Menu from "./Menu"
function Blender() {
  return (
    <>
      <Menu clicked={"Blender"}/>
    <section className='blender'>
          <div className='card'>
            <h2 className='title'>Diamond World Tour Rihanna</h2>
              <img className='img' src={P1} alt="" />
              <img className='img' src={P1Acc} alt="" />
          </div>
          <div className='card'>
            <h2 className='title'>Inspired by Selena Gomez "Feel Me"</h2>
            <img className='img' src={P2} alt="" />
          </div>
          <div className='card'>
            <h2 className='title'>Inspired by Beyoncé "America Has A Problem" Live</h2>
            <img className='img' src={P3} alt="" />
          </div>
    </section>
  </>
  )
}

export default Blender