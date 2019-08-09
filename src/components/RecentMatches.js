import React from 'react';
import Match from './Match';
import '../css/RecentMatches.css'

const RecentMatches = (props) => {

    const matchNode = props.games.map((match, index) => {
        return(
            <tr key = {index}>
                <Match match = {match}/>
            </tr>
        )
    })

    return(
        <div>
            <h2>Recent Matches</h2>
            <table>
                <tbody>
                <tr>
                    <th>Player 1</th>
                    <th>P1 Score</th>
                    <th>Player 2</th>
                    <th>P2 Score</th>
                </tr>
                    {matchNode}  
                </tbody>          
            </table>
        </div>

        
    )
}

export default RecentMatches;