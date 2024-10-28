import axios from 'axios'
import '../styles/WritingCheck.css'
import React, { useEffect, useState } from 'react'
function WritingCheck() {
    const [feedback, setFeedback] = useState(null)
    const [display, setDisplay] = useState(null)
    const [text, setText] = useState()
    const provideFeedback = async () => {
        const grammar = await axios.post("https://testrestapi-latest.onrender.com/generate/feedback/grammar",{
            text: text
        })
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                console.log(error)
            })
        const vocab = await axios({
            url: "https://testrestapi-latest.onrender.com/generate/feedback/vocab",
            method: "GET",
        })
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                console.log(error)
            })
        setFeedback({ grammar: grammar, vocab: vocab })
        setDisplay("grammar")
    }
    return feedback ?
        (
            <>  
                <div className='feedback-buttons'>
                    <button className='feedback-button' onClick={() => { setDisplay("grammar") }}>Grammar</button>
                    <button className='feedback-button' onClick={() => { setDisplay("vocab") }}>Vocabulary</button>
                </div>
                <div className="dashboard" dangerouslySetInnerHTML={{ __html: feedback[display] }}></div>
                <button onClick={() => provideFeedback()}>Submit again</button>
            </>
        )
        :
        (
            <>
                <textarea onChange={(e)=>setText(e.target.value)}></textarea>
                <button onClick={() => provideFeedback()}>Submit</button>
            </>
        );
}

export default WritingCheck