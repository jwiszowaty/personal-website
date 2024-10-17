import '../styles/menu.css'
import CV from "../assets/CV Jakub Wiszowaty October 2024.pdf"
import { Link } from 'react-router-dom'
import OpenAI from "openai";
function Menu({ clicked }) {

  const tabs = [{tab: 'Simple Java Programs', endpoint: '/', label: 'sjp-nav'}, {tab: 'Coding projects', endpoint: '/projects', label: "projects-nav"}, {tab: '❄️ Advent of Code ❄️', endpoint: '/aoc', label: "aoc-nav"}, {tab: 'Blender', endpoint: '/blender', label: "blender-nav"}]
  
  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY; // Store your API key in an .env file

  const fetchChatGPTResponse = async (prompt) => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4o-mini',
          messages: [{ role: 'user', content: prompt }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`,
          },
        }
      );
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('Error fetching ChatGPT response:', error);
      throw error;
    }
  };
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
        {
          fetchChatGPTResponse("Say hi")
        }
      </div>
    </section>
  )
}

export default Menu