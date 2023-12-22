import React, { useState } from 'react'
import Menu from '../Menu/Menu.jsx'
import Timeline from '../Timeline/Timeline.jsx'
import Northcoders from '../Northcoders/Northcoders.jsx'
import Personal from '../Pages/Personal.jsx'
import Freecodecamp from '../Pages/Freecodecamp.jsx'
import Blender from '../Pages/Blender.jsx'
import Aoc from '../Pages/Aoc.jsx'
import '../Timeline/Timeline.css'
import '../Menu/Menu.css'
function Home() {
  const [nav, setNav] = useState(undefined)
  return (
    <main className='page'>
      <Menu nav={nav} setNav={setNav} />
      {nav === "aoc" ? <Aoc /> :
        nav === "blender" ? <Blender /> :
          nav === "northcoders" ? <Northcoders /> :
            nav === "personal" ? <Personal /> :
              nav === "freecodecamp" ? <Freecodecamp /> : <Timeline />}
    </main>
  )
}

export default Home