import axios from 'axios'
import React, { useState } from 'react'
import '../styles/simplejavaprograms.css'
import { Link } from 'react-router-dom'

function SimpleJavaPrograms() {
    const [number, setNumber] = useState()
    const [answer, setAnswer] = useState("type a number")
    const [isDisabled, setIsDisabled] = useState(false)
    const handleChange = (e) => {
        e.preventDefault()
        console.log(number);
        
        setNumber(e.target.value)
    }     
    const getEvenDigitSum = async (number) => {
        setIsDisabled(true)
        await axios({
            url: `https://testrestapi-latest.onrender.com/api/even-digit-sum/${number}`,
            method: "GET",
        })
        .then((response) => {
            setAnswer(response.data)
            setIsDisabled(false)
        })
        .catch((error) => {
            console.log(error)
            setIsDisabled(false)
        })
    }
  return (
    <>
    <Link className="back-button" to="/">back</Link>
    <div>SimpleJavaPrograms</div>
    <section className="sjp-field">
        <h3>Sum all even digits from a number</h3>
        <input className="sjp-input" placeholder="positive integer" onChange={(e) => handleChange(e)}/>
        <button disabled={isDisabled} className="sjp-submit" onClick={() => getEvenDigitSum(number)}>SUM</button>
        <h3>Answer:</h3>
        <h2>{answer}</h2>
    </section>
    
    </>
  )
}

export default SimpleJavaPrograms