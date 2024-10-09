import '../styles/menu.css'
import CV from "../assets/CV Jakub Wiszowaty October 2024.pdf"
import { Link } from 'react-router-dom'
function Menu({ clicked }) {
  const tabs = [{tab: 'Simple Java Programs', endpoint: '/', label: 'sjp-nav'}, {tab: 'Coding projects', endpoint: '/projects', label: "projects-nav"}, {tab: '❄️ Advent of Code ❄️', endpoint: '/aoc', label: "aoc-nav"}, {tab: 'Blender', endpoint: '/blender', label: "blender-nav"}]
  return (
      <section className='menu'>
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
      </section>
  )
}

export default Menu