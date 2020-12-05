import React, { useState } from 'react'

const SubmissionForm = () => {

    //const [result, setResults] = useState([]);
    const [text, setText] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();


    }

    return (
        <>
            <h3>Find out a Github user favourite language</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Username</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter name..." />
                </div>
                <button className="btn">Search User</button>
            </form>
            <br></br>
            {/* <Results results={result} /> */}
        </>
    )
}

export default SubmissionForm