import React,{createContext} from 'react';
import CounterContext from './CounterContext';
import Parent from './Parent.js';
function App() {

  return (
    <CounterContext.Provider value={10}>
      <div>
        
        <Parent />
      </div>
    </CounterContext.Provider>

  );
}
export default App;