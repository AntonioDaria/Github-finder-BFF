import React from 'react'

const Results = ({ results }) => {
    return (
        <div>
            <h3>Our Best Guess is:</h3>
            <div className="results-container">
                {results}
            </div>
        </div>
    )
}

export default Results
