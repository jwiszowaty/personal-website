import axios from 'axios'
import React, { useState } from 'react'
import '../styles/simplejavaprograms.css'

import "../styles/projects.css" // css for .information
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
                                                if (/^Is/i.test(label) ) {
                                                    return (
                                                        <div className='boolean-input' key={"radio"+index}>
                                                            <p key={label+index}>{label}</p>
                                                            <label key={"true"}><input type='radio' onKeyDown={(e) => e.key === 'Enter' ? sendGetRequest(endpoint) : ''} name={placeholder} value='true' checked={args[param] == "true"} onChange={() => handleSelection(endpoint, param, "true")}/> Yes</label>
                                                            <label key={"false"}><input type='radio' onKeyDown={(e) => e.key === 'Enter' ? sendGetRequest(endpoint) : ''} name={placeholder} value='false' checked={args[param] == "false"} onChange={() => handleSelection(endpoint, param, "false")}/> No</label>
                                                        </div>
                                                    )
                                                } else { 
                                                    return <label>{label}<input onKeyDown={(e) => e.key === 'Enter' ? sendGetRequest(endpoint) : ''} key={placeholder+index} value={args[param] && answer[0] == endpoint ? args[placeholder] : ""} className="sjp-input" placeholder={placeholder} onChange={(e) => handleInput(endpoint, param, e)}/></label>
                                                }
                                            })}
                                            <button type='submit' disabled={isDisabled} className="sjp-submit" onClick={() => sendGetRequest(endpoint)}>
                                                {
                                                /\?$/.test(title) ? 'Check' : 'Calculate'
                                                }
                                                </button>
                                                { 
                                                    (answer[0] == endpoint && answer[2]) ? 
                                                        <>
                                                        <pre className='answer'>
                                                            {
                                                                answer[1] == "false" || answer[1] == "true" ? 
                                                                    <p className={answer[1] + " boolean"}>{answer[1]}</p> 
                                                                        : <p className='string'>{answer[1].split("").filter(char => char != '"').join("")}</p>
                                                            } 
                                                        </pre></> 
                                                        : "" 
                                                }
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
            <section className='information yellow'>
                <p>The first request, after a period of inactivity, will be resolved within 60 seconds, every other after instantly.</p>
            </section>
            {generateProgramFields()}
        </>
    )
}

export default SimpleJavaPrograms