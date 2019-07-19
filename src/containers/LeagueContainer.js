import React, {Component} from 'react';
import LeagueTable from '../components/LeagueTable';

class LeagueContainer extends Component {
    render()
    {
        return(
            <div>
                <h1>League Container</h1>
                <LeagueTable games = {this.props.games}/>
            </div>
            
        )
    }
}

export default LeagueContainer;