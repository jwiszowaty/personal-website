import axios from 'axios'
import React, { useState } from 'react'
import '../styles/simplejavaprograms.css'

function SimpleJavaPrograms() {
    const [number, setNumber] = useState()
    const [number2, setNumber2] = useState()
    const [number3, setNumber3] = useState()
    const [answer, setAnswer] = useState("")
    const [isDisabled, setIsDisabled] = useState(false)
    const handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value);
        
        setNumber(e.target.value)
    }     
    const handleChangeTwo = (e) => {
        e.preventDefault()
        console.log(e);
        setNumber2(e.target.value)
    }
    const handleChangeThree = (e) => {
        e.preventDefault()
        console.log(e);
        setNumber3(e.target.value)
    }
    const singleNumberGet = async (method, number) => {
        setIsDisabled(true)
        setAnswer("wait...")
        await axios({
            url: `https://testrestapi-latest.onrender.com/api/${method}/${number}`,
            method: "GET",
        })
        .then((response) => {
            setAnswer(response.data)
        })
        .catch((error) => {
            setAnswer(error.response.data)
            console.log(error)
        })
        setIsDisabled(false)
    }
    const twoNumbersGet = async (method, number1, number2) => {
        setIsDisabled(true)
        setAnswer("wait...")
        await axios({
            url: `https://testrestapi-latest.onrender.com/api/${method}?${number1}&${number2}`,
            method: "GET",
        })
        .then((response) => {
            console.log(response.data);
            setAnswer(response.data)
        })
        .catch((error) => {
            setAnswer(error.response.data)
            console.log(error)
        })
        setIsDisabled(false)
    }
    const threeNumbersGet = async (method, number1, number2, number3) => {
        setIsDisabled(true)
        setAnswer("wait...")
        await axios({
            url: `https://testrestapi-latest.onrender.com/api/${method}?${number1}&${number2}&${number3}`,
            method: "GET",
        })
        .then((response) => {
            console.log(response.data);
            setAnswer(response.data)
        })
        .catch((error) => {
            setAnswer(error.response.data)
            console.log(error)
        })
        setIsDisabled(false)
    }
  return (
    <section className='sjp-fields'>
        <section className='output'>
            <pre>
            {answer}
            </pre>
        </section>
        <section className="sjp-field">
            <p>Sum Even Digits </p><input className="sjp-input" placeholder='enter number' onChange={(e) => handleChange(e)}/>
            <button disabled={isDisabled} className="sjp-submit" onClick={() => singleNumberGet("even-digit-sum", number)}>Calculate</button>
        </section>
        <section className="sjp-field">
            <p>Diagonal Star</p><input className="sjp-input" placeholder='enter number' onChange={(e) => handleChange(e)}/>
            <button disabled={isDisabled} className="sjp-submit" onClick={() => singleNumberGet("diag-star", number)}>Calculate</button>
        </section>
        <section className="sjp-field">
            <p>Factor Printer</p><input className="sjp-input" placeholder='enter number' onChange={(e) => handleChange(e)}/>
            <button disabled={isDisabled} className="sjp-submit" onClick={() => singleNumberGet("factor-printer", number)}>Calculate</button>
        </section>
        <section className="sjp-field">
            <p>Largest Prime</p><input className="sjp-input" placeholder='enter number' onChange={(e) => handleChange(e)}/>
            <button disabled={isDisabled} className="sjp-submit" onClick={() => singleNumberGet("largest-prime", number)}>Calculate</button>
        </section>
        <section className="sjp-field">
                <p>Greatest Common Divisor</p>
                <input id="number1" className="sjp-input" placeholder='enter number' onChange={(e) => handleChange(e)}/>
                
                <input id="number2" className="sjp-input" placeholder='enter number' onChange={(e) => handleChangeTwo(e)}/>
            <button disabled={isDisabled} className="sjp-submit" onClick={() => twoNumbersGet("greatest-common-divisor", `number1=${number}`, `number2=${number2}`)}>Calculate</button>
        </section>
        <section className="sjp-field">
                <p>Flour Packer - Will It Fit?</p>
                <input id="number1" className="sjp-input" placeholder='Five-kilo bags' onChange={(e) => handleChange(e)}/>
                <input id="number2" className="sjp-input" placeholder='One-kilo bags' onChange={(e) => handleChangeTwo(e)}/>
                <input id="number2" className="sjp-input" placeholder='Mass of the flour' onChange={(e) => handleChangeThree(e)}/>
            <button disabled={isDisabled} className="sjp-submit" onClick={() => threeNumbersGet("flour-packer", `fiveKilo=${number}`, `oneKilo=${number2}`, `goal=${number3}`)}>Calculate</button>
        </section>
        <section className="sjp-field">
                <p>Days In A Month</p>
                <input id="number1" className="sjp-input" placeholder='month 1-12' onChange={(e) => handleChange(e)}/>
                <input id="number2" className="sjp-input" placeholder='year' onChange={(e) => handleChangeTwo(e)}/>
            <button disabled={isDisabled} className="sjp-submit" onClick={() => twoNumbersGet("days-in-month", `month=${number}`, `year=${number2}`)}>Calculate</button>
        </section>
        <section className="sjp-field">
                <p>Number In Word</p>
                <input id="number1" className="sjp-input" placeholder='number' onChange={(e) => handleChange(e)}/>
            <button disabled={isDisabled} className="sjp-submit" onClick={() => singleNumberGet("number-in-word", number)}>Calculate</button>
        </section>
        <section className="sjp-field">
                <p>Is Palindrome?</p>
                <input id="number1" className="sjp-input" placeholder='number' onChange={(e) => handleChange(e)}/>
            <button disabled={isDisabled} className="sjp-submit" onClick={() => singleNumberGet("palindrome", number)}>Calculate</button>
        </section>
        <section className="sjp-field">
                <p>Sum Odd Numbers in A Range</p>
                <input id="number1" className="sjp-input" placeholder='start' onChange={(e) => handleChange(e)}/>
                <input id="number2" className="sjp-input" placeholder='end' onChange={(e) => handleChangeTwo(e)}/>
            <button disabled={isDisabled} className="sjp-submit" onClick={() => twoNumbersGet("sum-odd-range", `start=${number}`, `end=${number2}`)}>Calculate</button>
        </section>
        <section className="sjp-field">
                <p>Do They Have A Digit In Common?</p>
                <input id="number1" className="sjp-input" placeholder='number 1' onChange={(e) => handleChange(e)}/>
                <input id="number2" className="sjp-input" placeholder='number 2' onChange={(e) => handleChangeTwo(e)}/>
            <button disabled={isDisabled} className="sjp-submit" onClick={() => twoNumbersGet("shared-digit", `number1=${number}`, `number2=${number2}`)}>Calculate</button>
        </section>
        <section className="sjp-field">
                <p>Is It Perfect?</p>
                <input id="number1" className="sjp-input" placeholder='number' onChange={(e) => handleChange(e)}/>
            <button disabled={isDisabled} className="sjp-submit" onClick={() => singleNumberGet("perfect-number", number)}>Calculate</button>
        </section>
    </section>
  )
}

export default SimpleJavaPrograms