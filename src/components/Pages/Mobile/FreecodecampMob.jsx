import React from 'react'
import Pform from "../../../assets/freecodecamp-form.png"
import Ptribute from "../../../assets/freecodecamp-tribute.png"
import { useNavigate } from 'react-router-dom'
function FreecodecampMob() {
  const navigate = useNavigate()
  return (
    <section id='freecodecamp-section' className='projects-section'>
      <h4 className='back' onClick={() => navigate(-1)}>&#x2190;back</h4>
      <a href="" className='nav-tags'><h1>FreeCodeCamp</h1></a> 
      <section id='HTML/CSS-certificate'></section>
      <div className='project-card'>
        <h3>Form</h3>
        <img className='project-img' src={Pform} />
      </div>
      <div className='project-card'>
        <h3>Tribute page</h3>
        <img className='project-img' src={Ptribute}
          alt="Screenshot of a website dedicated to a Polish radio podcast. Website is devided in three parts: 1. linear gradient of three colours(black 30%, then gray 20%, then yellow (dark tan)) Takes 50% of the image. It has logo of the radio written in red letters at the top, lower is name and the title of the podcats in white letters and at the bottom of this section there is photo of the interviewer on the left and short description of the podcast on the right to the picture. 2. Background-colour: Yellow (Flax). Title (English translation 'A list of podcasts') of the table below it. 3. Background-colour: Yellow (Crayola). Table consists of three columns 'date', 'podcast number' and 'guest's name'" />
      </div>
    </section>
  )
}

export default FreecodecampMob