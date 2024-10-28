import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../styles/CvAnalysis.css'
function CvAnalysis() {
    const [reason, setReason] = useState(null)
  
  const giveAMillionReasons = async () => {
    setReason(null)
    await axios({
      url: "https://testrestapi-latest.onrender.com/generate/reason",
      method: "GET",
  })
      .then((response) => {
        setReason(response.data)
  })
  .catch((error) => {
      console.log(error)
  })
  }

  useEffect(() => {
    
    giveAMillionReasons()
  },[])
    return (
        <div className='menu-bottom'>
            {reason ? <><p className='reason-cv'>{reason}</p></> : <><p className='loader-text'>ANALYZING JAKUB'S CV</p><div className='loader'></div></>}
        </div>
  )
}

export default CvAnalysis