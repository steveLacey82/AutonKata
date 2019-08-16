import React, {Component} from 'react';
import GameForm from '../components/GameForm';
import LeagueContainer from './LeagueContainer';
import About from '../components/About';

class MainContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            games: [],
            players: [
                {
                    "name": "Kyle",
                    "position": 0,
                    "points": 0,
                    "wins": 0,
                    "losses": 0,
                    "matches": []
                },
                {
                    "name": "Andy",
                    "position": 0,
                    "points": 0,
                    "wins": 0,
                    "losses": 0,
                    "matches": []
                },
                {
                     "name": "Declan",
                     "position": 0,
                     "points": 0,
                     "wins": 0,
                     "losses": 0,
                     "matches": []
                },
                {
                    "name": "Adam",
                    "position": 0,
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
       this.sortPlayers = this.sortPlayers.bind(this);
       this.assignRank = this.assignRank.bind(this);
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

    // Once we have a backend this should post to this should be moved there.
    sortPlayers(){
        if (this.state.games.length !== 0) {
            this.state.players.sort((a, b) => (a.points < b.points) ? 1 : (a.points === b.points) ? ((a.matches.length < b.matches.length) ? 1 : -1) : -1 );
        }        
    }

    assignRank(){
        this.sortPlayers();
       let playersArr = this.state.players;
       let pos = 1;
       playersArr.forEach(player =>{
           player.position = pos;
           pos += 1;
       })
       
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
                <button onClick = {this.assignRank}>Sort</button>
                <About />
            </>
        )
    }
}

export default MainContainer;

//https://stackoverflow.com/questions/35737274/how-to-rank-objects-by-property