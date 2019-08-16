import React from 'react';
import '../css/Player.css'

const Player = (props) => {
    
    return (
    <>
    <td>{props.player.position}</td>
    <td>{props.player.name}</td>
    <td>{props.player.wins}</td>
    <td>{props.player.losses}</td>
    <td>{props.player.points}</td>
    </>
    )
}

export default Player;