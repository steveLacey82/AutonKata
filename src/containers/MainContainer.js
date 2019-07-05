import React, {Component} from 'react';
import GameForm from '../components/GameForm';

class MainContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            // counter: 0,
            games: []
        }
       // this.counterAdder = this.counterAdder.bind(this);
       this.addNewGame = this.addNewGame.bind(this); 
    }

    //  counterAdder() {
    //     let prevState = this.state.counter;
    //     prevState += 100;
    //     let newState = prevState;
    //     this.setState({counter: newState})
    // }

    // This function will add the new game from our game form to the games array in our main containers state
    addNewGame(game){
        let prevState = this.state.games;
        prevState.push(game);
        let newState = prevState;
        this.setState({counter: newState});
    }

    render(){
        return(
            <>
                <h2>Hello from MainContainerTest</h2>
                <GameForm newGame = {this.addNewGame}/>
            </>
        )
    }
}

export default MainContainer;