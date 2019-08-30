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
                    "matches": [],
                    "selected": false
                },
                {
                    "name": "Andy",
                    "position": 0,
                    "points": 0,
                    "wins": 0,
                    "losses": 0,
                    "matches": [],
                    "selected": true
                },
                {
                     "name": "Declan",
                     "position": 0,
                     "points": 0,
                     "wins": 0,
                     "losses": 0,
                     "matches": [],
                     "selected": false
                },
                {
                    "name": "Adam",
                    "position": 0,
                    "points": 0,
                    "wins": 0,
                    "losses": 0,
                    "matches": [],
                    "selected": false
                },
                {
                    "name": "Chris",
                    "position": 0,
                    "points": 0,
                    "wins": 0,
                    "losses": 0,
                    "matches": [],
                    "selected": false
                },
                {
                    "name": "Callum",
                    "position": 0,
                    "points": 0,
                    "wins": 0,
                    "losses": 0,
                    "matches": [],
                    "selected": false
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
        this.assignRank()
        
    }

    calcuteGameResult(game){
        console.log(game);
        
         let allPlayers = this.state.players;
         let player1 = allPlayers.filter((player) => player.name === game.player1);
         let player2 = allPlayers.filter((player) => player.name === game.player2);
         console.log(player1, 'Player1');
         console.log(player2, 'Player2');
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
            // Sorts players by points, if two players have matching points then it ranks the player with less games higher
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
       });
    }


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
                <GameForm newGame = {this.addNewGame} players = {this.state.players} findWithAttr = {this.findWithAttr}/>
                <LeagueContainer games = {this.state.games} players = {this.state.players}/>
                <About />
            </>
        )
    }
}

export default MainContainer;

//https://stackoverflow.com/questions/35737274/how-to-rank-objects-by-property