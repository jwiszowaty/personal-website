import React from 'react'
import '../styles/Statement.css'
function Statement() {
  return (
    <section id='header'>
      <div id='name'>
        <h1>Jakub</h1>
        <h1>Wiszowaty</h1>
      </div>
      <div id='statement'>
      <div className='statement-container'>
        <h4 className='left'>A recent graduate from <span className='emphasise'>Northcoders</span> </h4>
        <h4 className='right'>Software Engineering Bootcamp, </h4>
        <h4 className='left'><span className='emphasise-message-1'>now seeking</span> a role </h4>
        <h4 className='right'>as a Junior within <span className='emphasise-message-3'>the industry.</span> </h4>
      </div>
      <div  className='statement-container'>
      <h4 className='left'>With a keen interest in</h4>
        <h4 className='right'> problem-solving </h4>
        <h4 className='left'>and <span className='emphasise-message-1'>creativity</span> <span className='emphasise-message-4'>to find solutions</span>, </h4>
        <h4 className='right'><span className='emphasise-message-2'>I aim to </span>secure a position</h4>
      </div>
        <div className='statement-container'>
        <h4 className='left'> where I can further <span className='emphasise-message-2'>develop</span> my coding skills</h4>
        <h4 className='right'> and <span className='emphasise-message-4'>contribute</span> <span className='emphasise-message-3'>to innovative </span>projects.</h4>
      </div>
    </div>
    </section>
    
  )
}

export default Statement