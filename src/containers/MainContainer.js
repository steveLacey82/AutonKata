import React, {Component} from 'react';
import SimpleComponent from '../components/SimpleComponent';

class MainContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
    }

    render(){
        return(
            <>
                <h2>Hello from MainContainer</h2>
                <SimpleComponent count = {this.state.counter}/>
            </>
        )
    }
}

export default MainContainer;