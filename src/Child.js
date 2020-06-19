import React, { useContext, useState } from 'react';
import counterContext from './CounterContext';
function Child() {

     let [val,setVal] = useState(useContext(counterContext))
    return (

        <div>
            <h2> The value Passed from App is {val}</h2>
            <button onClick={()=>{setVal(++val)}}>Increse</button>
        </div>
    )
}
export default Child