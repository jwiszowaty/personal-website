import axios from 'axios'
import '../styles/WritingCheck.css'
import React, { useEffect, useState } from 'react'
function WritingCheck() {
    const [feedback, setFeedback] = useState(null)
    const [display, setDisplay] = useState(null)
    const provideFeedback = async () => {
        const grammar = await axios({
            url: "https://testrestapi-latest.onrender.com/generate/feedback/grammar",
            method: "GET",
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
                <button onClick={() => { setDisplay("grammar") }}>Grammar</button>
                <button onClick={() => { setDisplay("vocab") }}>Vocabulary</button>
                <div>
                <div className="writing" dangerouslySetInnerHTML={{ __html: feedback[display] }}></div>
                <div className="feedback"></div>
                </div>
                <button onClick={() => provideFeedback()}>Submit</button>
            </>
        )
        :
        (
            <>
                <textarea></textarea>
                <button onClick={() => provideFeedback()}>Submit</button>
            </>
        );
}

export default WritingCheck