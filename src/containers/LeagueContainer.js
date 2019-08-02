import React, {Component} from 'react';
import RecentMatches from '../components/RecentMatches';
import LeagueTable from '../components/LeagueTable';

class LeagueContainer extends Component {
    render()
    {
        return(
            <div>
                <h1>League Container</h1>
                <RecentMatches games = {this.props.games}/>
                <LeagueTable players = {this.props.players}/>
            </div>
            
        )
    }
}

export default LeagueContainer;