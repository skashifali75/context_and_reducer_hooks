import React, { useReducer } from 'react';
import counterReducer from './counterReducer';

function Child2() {
    let [state,dispatch] = useReducer(counterReducer,9);
    return (
        <div>
            
    <h2> Reuucer {state}</h2>
    <button onClick={()=>{dispatch({type:'inc'});}}>Increase</button>
    <button onClick={()=>{dispatch({type:'dec'});}}>Decrease</button>
        </div>

        
    );
}
export default Child2;