import React from 'react';

const SimpleComponent = (props) => {

   

    return(
        <>
        <div>Hello from SimpleComponent</div>
        <p>{props.count}</p>
        <button onClick = {props.addMore}>Add MOAR!</button>
        </>
    )
}

export default SimpleComponent;