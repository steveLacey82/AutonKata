import React, {Component} from 'react';
import GameForm from '../components/GameForm';
import LeagueContainer from './LeagueContainer';

class MainContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            games: []
        }
       this.addNewGame = this.addNewGame.bind(this); 
    }

    // This function will add the new game from our game form to the games array in our main containers state
    addNewGame(game){
        let prevState = this.state.games;
        prevState.push(game);
        let newState = prevState;
        this.setState({games: newState});
    }

    render(){
        return(
            <>
                <h2>Hello from MainContainerTest</h2>
                <GameForm newGame = {this.addNewGame}/>
                <LeagueContainer games = {this.state.games}/>
            </>
        )
    }
}

export default MainContainer;