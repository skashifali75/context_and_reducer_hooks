import React from 'react';
import App from './App.js';
import Child from './Child.js';
import Child2 from './Child2.js';
function Parent() {

    return(
        <div>

        <Child />
        <Child2 />
        </div>
    );
}
export default Parent;