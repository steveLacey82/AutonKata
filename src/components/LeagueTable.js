import React from 'react';
import Match from './Match';

const LeagueTable = (props) => {

    const matchNode = props.games.map((match, index) => {
        return(
            <tr key = {index}>
                <Match match = {match}/>
            </tr>
        )
    })

    return(
        <div>
            <h2>Hello From League Table</h2>
            <table>
                <tr>
                    <th>Player 1</th>
                    <th>P1 Score</th>
                    <th>Player 2</th>
                    <th>P2 Score</th>
                </tr>
                    {matchNode}            
            </table>
        </div>

        
    )
}

export default LeagueTable;