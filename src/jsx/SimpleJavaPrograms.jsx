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
                udemyJava.map(({section, methods}, index) => {
                    return (
                        <>
                            <button id={section} key={"button"+index} disabled={methods.length == 0}className='dropdown-button' onClick={() => toggleDropdown(section)}>{section}</button>
                            { 
                            dropdown == section ? (
                            <section className='sjp-fields' key={"section"+index}>
                            {
                                methods.map(({title, endpoint, inputs}, index) => {
                                    return (
                                        
                                            <section className="sjp-field" key={title+index}>
                                                <h4 key={title}>{title}</h4>
                                            {inputs.map(({label, placeholder, param, defaultValue}, index) => {
                                                if (/^is/.test(placeholder) ) {
                                                    return (
                                                        <div className='boolean-input' key={"radio"+index}>
                                                            <p key={label+index}>{label}</p>
                                                            <label key={"true"}><input type='radio' name={placeholder} value='true' checked={args[param] == "true"} onChange={() => handleSelection(endpoint, param, "true")}/> Yes</label>
                                                            <label key={"false"}><input type='radio' name={placeholder} value='false' checked={args[param] == "false"} onChange={() => handleSelection(endpoint, param, "false")}/> No</label>
                                                        </div>
                                                    )
                                                } else { 
                                                    return <label>{label}<input key={placeholder+index} value={args[param] && answer[0] == endpoint ? args[placeholder] : ""} className="sjp-input" placeholder={placeholder} onChange={(e) => handleInput(endpoint, param, e)}/></label>
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
    const handleSelection = (endpoint, param, selection) => {
        setAnswer([endpoint, answer[1], false])
        setArgs({...args, [param]: selection})
    }
    const handleInput = (endpoint, param, e) => {
        e.preventDefault()
        
            setAnswer([endpoint, answer[1], false])
            setArgs({...args, [param]: e.target.value}) 
    }
    const sendGetRequest = async (endpoint) => {
        setIsDisabled(true)
        setAnswer([endpoint, "wait...", true])
    
        const url = buildUrl(endpoint)
        
        await axios({
            url: url,
            method: "GET",
        })
        .then((response) => {
            console.log(response);
            
            setAnswer([answer[0], endpoint == "diag-star" ? response.data : JSON.stringify(response.data), true])
        })
        .catch((error) => {
            console.log(error)
            setAnswer([answer[0], error.message, true])
        })
        setIsDisabled(false)
        setArgs({})
    }
    const buildUrl = (endpoint) => {
        let url = `https://testrestapi-latest.onrender.com/api/${endpoint}`
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