import React from 'react';

const Player = (props) => {
    
    return (
    <>
    <td>pos</td>
    <td>{props.player.name}</td>
    <td>{props.player.wins}</td>
    <td>{props.player.losses}</td>
    <td>{props.player.points}</td>
    </>
    )
}

export default Player;