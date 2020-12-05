import React, { useState } from 'react'
import Results from "./Results";
import { findFavLanguage } from "../services/search.service";

const SubmissionForm = () => {

    const [text, setText] = useState('');
    const [result, setResults] = useState([]);

    const onSubmit = async (e) => {
        e.preventDefault();

        const userName = text;
        
        const apiResult = await findFavLanguage(userName);

        setResults(apiResult);
    }

    return (
        <>
            <h3>Find out a Github user's favourite language</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Username</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter name..." />
                </div>
                <button className="btn">Search User</button>
            </form>
            <br></br>
            <Results results={result} />
        </>
    )
}

export default SubmissionForm