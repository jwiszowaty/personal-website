import '../styles/menu.css'
import CV from "../assets/CV Jakub Wiszowaty October 2024.pdf"
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
function Menu({ clicked }) {
  
  const [ reason, setReason ] = useState()
  
  const giveAMillionReasons = async () => {
    const reason = await axios({
      url: "https://testrestapi-latest.onrender.com/generate/reason",
      method: "GET",
  })
  .then((response) => {
      console.log(response);
      return response
  })
  .catch((error) => {
      console.log(error)
  })
  }

  const tabs = [{tab: 'Simple Java Programs', endpoint: '/', label: 'sjp-nav'}, {tab: 'Coding projects', endpoint: '/projects', label: "projects-nav"}, {tab: '❄️ Advent of Code ❄️', endpoint: '/aoc', label: "aoc-nav"}, {tab: 'Blender', endpoint: '/blender', label: "blender-nav"}]
  useEffect(() => {
    
    giveAMillionReasons()
  },[])
  return (
    <section className='menu'>
      <div className='menu-top'>
        <div className='name'>
          <h1 className='first'>Jakub</h1>
          <h1 className='surname'>Wiszowaty</h1>
        </div>
        <nav className="nav">
          <Link to={CV} target='_blank'>CV</Link>
            {
            tabs.map(({ tab, endpoint, label}, index) => {
              if (clicked == tab) {
                return <p className={"active " + label} key={index}>{tab}</p>
              } else {
                return <Link className={label} to={endpoint} key={index}>{tab}</Link>
              }
              })
            }
        </nav>
      </div>
      <div className='menu-bottom'>
        {reason}
      </div>
    </section>
  )
}

export default Menu