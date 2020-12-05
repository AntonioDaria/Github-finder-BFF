import React from 'react'

const Results = ({results}) => {
    return (
        <>
            <h3>Our Best Guess</h3>
            <ul className="list">
                {results}
            </ul>
        </>
    )
}

export default Results
