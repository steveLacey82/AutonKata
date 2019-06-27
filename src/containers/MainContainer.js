import React, {Component} from 'react';
import SimpleComponent from '../components/SimpleComponent';

class MainContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
        this.counterAdder = this.counterAdder.bind(this);
    }

     counterAdder() {
        
        let prevState = this.state.counter;
        prevState += 1;
        let newState = prevState;
        this.setState({counter: newState})
    }

    render(){
        return(
            <>
                <h2>Hello from MainContainer</h2>
                <SimpleComponent count = {this.state.counter} addMore = {this.counterAdder}/>
            </>
        )
    }
}

export default MainContainer;