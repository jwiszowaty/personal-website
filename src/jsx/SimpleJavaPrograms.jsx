import axios from 'axios'
import React, { useState } from 'react'
import '../styles/simplejavaprograms.css'
import udemyJava from './sjpObject'
import Menu from './Menu'

function SimpleJavaPrograms() {
    const [isDisabled, setIsDisabled] = useState(false)
    const [answer, setAnswer] = useState(["","",""])
    const [args, setArgs] = useState({})
    const [dropdown, setDropdown] = useState()

    const generateProgramFields = () => {
        return (
            <section className='udemy-java'>
                <h3>Exercises completed in the Java Masterclass Udemy course</h3>
                {
                udemyJava.map(({section, methods}) => {
                    return (
                        <>
                            <button id={section} disabled={methods.length == 0}className='dropdown-button' onClick={() => toggleDropdown(section)}>{section}</button>
                            { 
                            dropdown == section ? (
                            <section className='sjp-fields'>
                            {
                                methods.map(({title, endpoint, inputs}) => {
                                    return (
                                        
                                            <section className="sjp-field">
                                                <h4>{title}</h4>
                                            {inputs.map(({label, placeholder}) => {
                                                if (/^is/.test(placeholder) ) {
                                                    return (
                                                        <div className='boolean-input'>
                                                            <p>{label}</p>
                                                            <label><input type='radio' name={placeholder} value='true'/> Yes</label>
                                                            <label><input type='radio' name={placeholder} value='false'/> No</label>
                                                        </div>
                                                    )
                                                } else {
                                                    return <label>{label}<input value={args[placeholder] && answer[0] == endpoint ? args[placeholder] : ""} className="sjp-input" placeholder={placeholder} onChange={(e) => handleInput(endpoint, placeholder, e)}/></label>
                                                }
                                            })}
                                            <button type='submit' disabled={isDisabled} className="sjp-submit" onClick={() => sendGetRequest(endpoint)}>
                                                {
                                                /\?$/.test(title) ? 'Check' : 'Calculate'
                                                }
                                                </button>
                                                { (answer[0] == endpoint && answer[2]) ? <><pre className='answer'>{answer[1]} </pre></> : "" }
                                            </section>
                                    )
                                })
                            }
                            </section>
                            ) : ""
                            }
                        </>
                    )
                })
                }
            </section>
        )
    }
    const handleInput = (method, key, e) => {
        e.preventDefault()
        setAnswer([method, answer[1], false])
        setArgs({...args, [key]: e.target.value})
    }
    const sendGetRequest = async (method) => {
        setIsDisabled(true)
        setAnswer([method, "wait...", true])
    
        const url = buildUrl(method)
        
        await axios({
            url: url,
            method: "GET",
        })
        .then((response) => {
            console.log(response);
            
            setAnswer([answer[0], method == "diag-star" ? response.data : JSON.stringify(response.data), true])
        })
        .catch((error) => {
            console.log(error)
            setAnswer([answer[0], error.message, true])
        })
        setIsDisabled(false)
        setArgs({})
    }
    const buildUrl = (method) => {
        let url = `https://testrestapi-latest.onrender.com/api/${method}`
        const params = Object.keys(args)
        const lastArgument = params.length - 1
        if (params.length == 1) {
            return url.concat(`/${args["number"]}`)
        } else {
            url = url.concat("?")
            for (const param of params) {
                url = url.concat(`${param}=${args[param]}`)
                if (params.indexOf(param) != lastArgument ) url = url.concat("&")
            }
            console.log(url);
            
            return url
        }
    }
    const toggleDropdown = (section) => {
        if (dropdown == section) {
            setDropdown(!!dropdown ? null : section)
        } else {
            setDropdown(section)
        }
    }
    return (
        <>
            <Menu clicked='Simple Java Programs'/>
            {generateProgramFields()}
        </>
    )
}

export default SimpleJavaPrograms