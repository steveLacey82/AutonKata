import React, {Fragment} from 'react';

const Match = (props) => {
    return(
        <Fragment>
            <td>{props.match.player1}</td>
            <td>{props.match.p1Score}</td>
            <td>{props.match.player2}</td>
            <td>{props.match.p2Score}</td>
        </Fragment>
        
    )
}

export default Match;