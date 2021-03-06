import React, {Component} from 'react';
import Player from './Player'
import '../css/LeagueTable.css'

class LeagueTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.players,
            sorted: false
        }
        this.compareBy.bind(this);
        this.sortBy.bind(this);
    }

    compareBy(key) {
        if(this.state.sorted){
            return function (a, b) {
                if (a[key] > b[key]) return -1;
                if (a[key] < b[key]) return 1;
                return 0;
              }; 
        } else {
            return function (a, b) {
                if (a[key] < b[key]) return -1;
                if (a[key] > b[key]) return 1;
                return 0;
              };
        }

      }

    sortBy(key) {
        let arrayCopy = [...this.state.data];
        arrayCopy.sort(this.compareBy(key));
        this.setState({data: arrayCopy});
        //!this.state.sorted? this.setState({sorted: true}) : this.setState({sorted: false}) 
        this.setState({sorted: !this.state.sorted});
      }

    render(){
    const rows = this.state.data.map((player, index) => {
        return(
            <tr key = {index}>
                <Player player = {player}/>
            </tr>
        )
    })

    return(
        <div>
            <h2>League Table</h2>
            <table>
    <tbody>
        <tr>
            <th onClick={() => this.sortBy('position')}>Rank</th>
            <th onClick={() => this.sortBy('name')}>Player</th>
            <th onClick={() => this.sortBy('wins')}>Wins</th>
            <th onClick={() => this.sortBy('losses')}>Losses</th>
            <th onClick={() => this.sortBy('points')}>Points</th>
        </tr>
            {rows}  
        </tbody>          
    </table>
        </div>
    )
}
}

export default LeagueTable;