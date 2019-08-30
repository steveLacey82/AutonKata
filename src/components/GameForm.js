import React, { Component } from 'react';
import '../css/GameForm.css'

class GameForm extends Component {
    constructor(props) {
        super(props)
        //This creates the component state object that we will post to our DB etc
        this.state = {
            game: {
                player1: '',
                player2: '',
                p1Score: '',
                p2Score: ''
            },
            selectedP1: false,
            newPlayerList: []
        }
        // We have to bind functions so that they can be used
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setProceed = this.setProceed.bind(this);
    }

    // This takes a change event on our input field and then finds the relevant key in the state and sets its value to the value of the input field
    handleChange = (event) => {
        const { target: { name, value } } = event;
        if (name.toString() !== 'selectedP1') {
            this.setState(prevState => ({
                game: {                   
                    ...prevState.game,    
                    [name]: value       
                }
            }))
        }  
    }

    setProceed(){
        let i = this.props.findWithAttr(this.props.players, 'name', this.state.game.player1);
        let arrCopy = [...this.props.players];
        arrCopy.splice(i,1);
        this.setState({newPlayerList: [...arrCopy]})
        
        this.setState({
            selectedP1: true
        })
    }

    // This handles the button click 
    handleSubmit(event) {
        // This stops the defualt action of buttons which is to post to the browser URL
        event.preventDefault();

        // This is a function propped down from our main container we pass it the state from our form and it handles adding it to the games array in our main state
        this.props.newGame(this.state.game)

        // Our input fields get their default value from the state so we set state back to empty strings after everything else to clear the form fields
        this.setState({
            game: {
                player1: '',
                player2: '',
                p1Score: '',
                p2Score: ''
            },
            selectedP1: false,
        })
    }
    // You cannot comment inside the render as anything in there is rendered on the page
    // 
    // The onchange in the input calls the handleChange function whenever a change happens in the field
    // The onClick in the button calls the handleSubmit function when we click the save button in browser
    render() {
        if (!this.state.game.player1) {
            
            const playerNode = this.props.players.map((player, index) => {
                if (player.selected) {
                    return null;
                }
                return <option key = {index} value = {player.name}>{player.name}</option>
            })
            return (
                <div>
                    <p>Add new Game!</p>
                    <form>
                        <div>
                            <label htmlFor="player1">Player 1</label>
                            <select name='player1' onChange={this.handleChange} value={this.state.game.player1}>
                                <option default>Choose player</option>
                                {playerNode}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="p1Score">Player 1 Score</label>
                            <input type='number' name='p1Score' onChange={this.handleChange} value={this.state.game.p1Score}/>
                        </div>
                        <div>
                            <label htmlFor="player2">Player 2</label>
                            <select name='player2' onChange={this.handleChange} value={this.state.game.player2} >
                                <option default >Choose player 1 First</option>
                            </select>
                        </div>
    
                        <div>
                            <label htmlFor="p2Score">Player 2 Score</label>
                            <input type='number' name='p2Score' onChange={this.handleChange} value={this.state.game.p2Score} />
                        </div>
                        <div>
                            <button onClick={this.handleSubmit}>Save</button>
                        </div>
                    </form>
                </div>
            )
        }
        else if(this.state.selectedP1){
            const playerNode = this.state.newPlayerList.map((player, index) => {
                if (player.selected) {
                    return null;
                }
                return <option key = {index} value = {player.name}>{player.name}</option>
            })
            return(
                <div>
                <p>Add new Game!</p>
                <form>
                    <div>
                        <label htmlFor="player1">Player 1</label>
                        <select name='player1' onChange={this.handleChange} value={this.state.game.player1}>
                        <option disabled selected value = {this.state.game.player1}>{this.state.game.player1}</option>
                            {playerNode}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="p1Score">Player 1 Score</label>
                        <input type='number' name='p1Score' onChange={this.handleChange} value={this.state.p1Score}/>
                    </div>
                    <div>
                        <label htmlFor="player2">Player 2</label>
                        <select name='player2' onChange={this.handleChange} value={this.state.player2} >
                            <option default >Choose player</option>
                            {playerNode}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="p2Score">Player 2 Score</label>
                        <input type='number' name='p2Score' onChange={this.handleChange} value={this.state.p2Score} />
                    </div>
                    <div>
                        <button onClick={this.handleSubmit}>Save</button>
                    </div>
                </form>
            </div> 
            )
        }
        else {
            const playerNode = this.props.players.map((player, index) => {
                if (player.selected) {
                    return null;
                }
                return <option key = {index} value = {player.name}>{player.name}</option>
            })
            return (
                <div>
                    <p>Add new Game!</p>
                    <form>
                        <div>
                            <label htmlFor="player1">Player 1</label>
                            <select name='player1' onChange={this.handleChange} value={this.state.game.player1}>
                                <option default>Choose player</option>
                                {playerNode}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="p1Score">Player 1 Score</label>
                            <input type='number' name='p1Score' onChange={this.handleChange} value={this.state.game.p1Score}/>
                        </div>
                        <div>
                        <button onClick={this.setProceed}>proceed</button>
                        </div>
                        <div>
                            <label htmlFor="player2">Player 2</label>
                            <select name='player2' onChange={this.handleChange} value={this.state.game.player2} >
                                <option default >Choose player 1 First</option>
                            </select>
                        </div>
    
                        <div>
                            <label htmlFor="p2Score">Player 2 Score</label>
                            <input type='number' name='p2Score' onChange={this.handleChange} value={this.state.game.p2Score} />
                        </div>
                        <div>
                            <button onClick={this.handleSubmit}>Save</button>
                        </div>
                    </form>
                </div>
            )
        }

    }
}

// You need to export your components etc so they can be read by other pages
export default GameForm;