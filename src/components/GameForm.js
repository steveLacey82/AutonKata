import React, { Component } from 'react';

class GameForm extends Component {
    constructor(props) {
        super(props)
        //This creates the component state object that we will post to our DB etc
        this.state = {
            player1: '',
            player2: '',
            p1Score: '',
            p2Score: ''
        }
        // We have to bind functions so that they can be used
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // This takes a change event on our input field and then finds the relevant key in the state and sets its value to the value of the input field
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // This handles the button click 
    handleSubmit(event) {
        // This stops the defualt action of buttons which is to post to the browser URL
        event.preventDefault();

        // Just checking that our function is sending data
        console.log("This is my post", this.state);

        // This is a function propped down from our main container we pass it the state from our form and it handles adding it to the games array in our main state
        this.props.newGame(this.state)

        // Our input fields get their default value from the state so we set state back to empty strings after everything else to clear the form fields
        this.setState({
            player1: '',
            player2: '',
            p1Score: '',
            p2Score: ''
        })
    }

    // You cannot comment inside the render as anything in there is rendered on the page
    // 
    // The onchange in the input calls the handleChange function whenever a change happens in the field
    // The onClick in the button calls the handleSubmit function when we click the save button in browser
    render() {

        const playerNode = this.props.players.map((player, index) => {
            return <option key = {index} value = {player.name}>{player.name}</option>
        })




        return (
            <>
                <p>Add new Game!</p>
                <form>
                    <div>
                        <label htmlFor="player1">Player 1</label>
                        <select name='player1' onChange={this.handleChange} value={this.state.player1}>
                            <option default>Choose player</option>
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
            </>
        )
    }
}

// You need to export your components etc so theyt can be read by other pages
export default GameForm;