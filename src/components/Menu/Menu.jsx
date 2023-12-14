import React, { useState } from 'react'
import './Menu.css'
import CV from '../../assets/CV Northcoders Jakub Wiszowaty December 2023.pdf'
function Menu({setNav, nav}) {
  const [menu, setMenu] = useState(false)
  return (
    <section className='section-menu'>
      <div className='name'>
        <h1 className='first'>Jakub</h1>
        <h1 className='surname'>Wiszowaty</h1>
      </div>
      <div className='cv'>
        <div className='text'>
          <p>CV</p>
          <p className='cv-update'>last update</p>
          <p className='cv-update'>7/12/23</p>
        </div>
        <p className='download'><a href={CV} download="Jakub Wiszowaty CV 2023" >download</a></p>
        <p className='view'><a href={CV} target='_blank'>view</a></p>
      </div>
      <nav>
        <div className="list">
          {nav === "blender" ? <p className='back' onClick={() => setNav(undefined)}>back</p> : <p className='nav' onClick={() => setNav("blender")}>Blender</p>}
          {nav === "northcoders" ? <p className='back' onClick={() => setNav(undefined)}>back</p> : <p className='nav' onClick={() => setNav("northcoders")}>Northcoders Bootcamp</p>}
          {nav === "personal" ? <p className='back' onClick={() => setNav(undefined)}>back</p> : <p className='nav' onClick={()=>setNav("personal")}>Personal</p>}
          {nav === "freecodecamp" ? <p className='back' onClick={() => setNav(undefined)}>back</p> : <p className='nav' onClick={()=>setNav("freecodecamp")}>freeCodeCamp</p>}
        </div>
        <div className="dropdown">
          {nav !== undefined ? <div className='menu-back'><button className="dropbtn" onClick={() => setMenu(!menu)}>Menu</button><button className='back-btn' onClick={() => {
            setNav(undefined)
            setMenu(!menu)
          }}>back</button></div> : <button className="dropbtn" onClick={() => setMenu(!menu)}>Menu</button>}
          {menu === true && 
            <div className="dropdown-content">
            <p className='nav' onClick={() => setNav("blender")}>Blender</p>
            <p className='nav' onClick={() => setNav("northcoders")}>Northcoders bootcamp</p>
            <p className='nav' onClick={() => setNav("personal")}>otherPersonal</p>
            <p className='nav' onClick={() => setNav("freecodecamp")}>freeCodeCamp</p>
          </div>
          }
          
        </div>
      </nav>
    </section>
  )
}

export default Menu