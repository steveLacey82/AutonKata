import React, {Component} from 'react';
import GameForm from '../components/GameForm';
import LeagueContainer from './LeagueContainer';

class MainContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            games: [],
            players: [
                {
                    "name": "Kyle",
                    "points": 0,
                    "wins": 0,
                    "losses": 0,
                    "matches": []
                },
                {
                    "name": "Andy",
                    "points": 0,
                    "wins": 0,
                    "losses": 0,
                    "matches": []
                },
                {
                     "name": "Declan",
                     "points": 0,
                     "wins": 0,
                     "losses": 0,
                     "matches": []
                },
                {
                    "name": "Adam",
                    "points": 0,
                    "wins": 0,
                    "losses": 0,
                    "matches": []
                } 
            ]
        }
       this.addNewGame = this.addNewGame.bind(this); 
       this.calcuteGameResult = this.calcuteGameResult.bind(this);
       this.findWithAttr = this.findWithAttr.bind(this);
    }

    // This function will add the new game from our game form to the games array in our main containers state
    addNewGame(game){
        let prevState = this.state.games;
        prevState.push(game);
        let newState = prevState;
        this.calcuteGameResult(game);
        this.setState({games: newState});
        
    }

    calcuteGameResult(game){
        let allPlayers = this.state.players;
        let player1 = allPlayers.filter((player) => player.name === game.player1);
        let player2 = allPlayers.filter((player) => player.name === game.player2);
        if(game.p1Score > game.p2Score){
            player1[0].wins += 1;
            player1[0].points += 2;            
            if (game.p2Score >= 20) {
               player2[0].points += 1; 
            }
            player2[0].losses += 1;
            
        } else {
            player2[0].wins += 1;
            player2[0].points += 2;           
            if (game.p1Score >= 20) {
                player1[0].points += 1;
            }
            player1[0].losses += 1;          
        }
        player1[0].matches.push(game);
        player2[0].matches.push(game);
        this.setState({players: allPlayers});
    }

    assignRank(){

    }


    // Not in use
    findWithAttr(array, attr, value) {
        for (var i = 0; i < array.length; i += 1) {
            if ((array[i][attr]) === value) {
                return i;
            }
        }
        return -1;
    }

    render(){
        return(
            <>
                <h2>Hello from MainContainerTest</h2>
                <GameForm newGame = {this.addNewGame} players = {this.state.players}/>
                <LeagueContainer games = {this.state.games} players = {this.state.players}/>
            </>
        )
    }
}

export default MainContainer;

//https://stackoverflow.com/questions/35737274/how-to-rank-objects-by-property